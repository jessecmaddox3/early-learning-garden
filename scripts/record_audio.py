#!/usr/bin/env python3
"""Print a voice script, review a silence-based plan, and export a new local MP3 pack.

Requires separately installed ffmpeg and ffprobe only for analyzing/encoding audio.
No recording is uploaded. Output defaults to an ignored local audio-packs directory.
"""
from __future__ import annotations
import argparse,hashlib,json,math,re,shutil,subprocess,sys,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def registry():return json.loads((ROOT/'public/audio/clips.json').read_text())
def write_script():
 lines=['EARLY LEARNING GARDEN: OPTIONAL VOICE SCRIPT','', 'Read only the spoken line. Do not say the numbers or IDs.','Leave about one second of silence between entries. Do not speak bracketed guidance.','Review every pairing in the generated plan before export. A matching count does not prove correct alignment.','If you repeat a line, remove the extra segment in the plan. Model sounds, not letter names.','Continuous sounds can be held gently; stop sounds stay short, without an exaggerated trailing uh.','Vowel examples name the intended sound. Accents vary; listen to every clip and complete word.','']
 for i,(id,v) in enumerate(registry().items(),1):
  lines.append(f'{i}. [{id}] '+(v['text'] if v['kind']!='sound' else '[Model the sound using the guidance below.]'))
  if v['guidance']:lines.append('   [Guidance: '+v['guidance']+']')
 return '\n'.join(lines)+'\n'
def speech_segments(log,duration):
 if not math.isfinite(duration) or duration<=0:raise ValueError('Recording duration must be positive.')
 events=[(kind,max(0,min(duration,float(value)))) for kind,value in re.findall(r'silence_(start|end):\s*([\d.]+)',log)]
 intervals=[];start=None
 for kind,t in events:
  if kind=='start':start=t if start is None else min(start,t)
  elif start is not None:intervals.append((start,t));start=None
 if start is not None:intervals.append((start,duration))
 merged=[]
 for a,b in sorted(intervals):
  if b<=a:continue
  if merged and a<=merged[-1][1]:merged[-1]=(merged[-1][0],max(b,merged[-1][1]))
  else:merged.append((a,b))
 cursor=0;segments=[]
 for a,b in merged:
  if a>cursor+.005:segments.append((cursor,a))
  cursor=max(cursor,b)
 if duration>cursor+.005:segments.append((cursor,duration))
 return segments

def inspect(recording,noise,gap):
 if not recording.is_file():raise ValueError('Choose an existing recording.')
 duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',str(recording)],text=True))
 proc=subprocess.run(['ffmpeg','-hide_banner','-nostdin','-i',str(recording),'-af',f'silencedetect=noise={noise}dB:d={gap}','-f','null','-'],capture_output=True,text=True,check=True)
 return duration,speech_segments(proc.stderr,duration)
def validate_plan(plan,duration,ids,padding=0):
 if not isinstance(plan,dict):raise ValueError('Plan must be a JSON object.')
 if plan.get('reviewed') is not True:raise ValueError('Review the plan and set reviewed to true before export.')
 entries=plan.get('clips');seen=[];previous=0
 if not isinstance(entries,list):raise ValueError('Plan needs a clips list.')
 for entry in entries:
  if not isinstance(entry,dict):raise ValueError('Every clip must be a JSON object.')
  id=entry.get('id');a=entry.get('start');b=entry.get('end')
  if id not in ids or id in seen:raise ValueError('Plan contains a missing, unknown or duplicate clip ID.')
  if isinstance(a,bool) or isinstance(b,bool) or not isinstance(a,(int,float)) or not isinstance(b,(int,float)) or not (math.isfinite(a) and math.isfinite(b) and 0<=a<b<=duration) or a<previous:raise ValueError('Clip boundaries must be finite, positive, ordered, nonoverlapping and within the recording.')
  if min(duration,b+padding)-max(0,a-padding)>10:raise ValueError('Each clip, including padding, must be at most 10 seconds.')
  seen.append(id);previous=b
 if set(seen)!=set(ids):raise ValueError('Plan must cover every required clip exactly once.')
 return entries

def main():
 parser=argparse.ArgumentParser(description=__doc__);sub=parser.add_subparsers(dest='cmd',required=True);sub.add_parser('script');sub.add_parser('ids')
 for name in ['plan','split']:
  p=sub.add_parser(name);p.add_argument('recording',type=Path);p.add_argument('--noise',type=int,default=-35);p.add_argument('--gap',type=float,default=.6)
  if name=='plan':p.add_argument('--output',type=Path,required=True)
  else:p.add_argument('--plan',type=Path);p.add_argument('--out',type=Path,default=ROOT/'audio-packs/recorded-voice');p.add_argument('--dry-run',action='store_true');p.add_argument('--padding',type=float,default=.03)
 args=parser.parse_args();clips=registry()
 if args.cmd=='script':print(write_script(),end='');return 0
 if args.cmd=='ids':
  for id,v in clips.items():print(id+'\t'+v['text'])
  return 0
 if not -100<=args.noise<=0 or not math.isfinite(args.gap) or not .05<=args.gap<=5:parser.error('Use noise -100..0 dB and gap .05..5 seconds.')
 try:
  duration,segments=inspect(args.recording,args.noise,args.gap);digest=hashlib.sha256(args.recording.read_bytes()).hexdigest()
  if args.cmd=='plan':
   ids=list(clips);value={'formatVersion':1,'reviewed':False,'recordingSha256':digest,'duration':duration,'clips':[{'id':ids[i] if i<len(ids) else 'EXTRA-REVIEW','start':round(a,4),'end':round(b,4)} for i,(a,b) in enumerate(segments)]}
   # Exclusive creation never replaces a previously reviewed plan.
   with args.output.open('x') as f:json.dump(value,f,indent=2);f.write('\n')
   print(f'Found {len(segments)} segments for {len(ids)} required clips. Listen and edit {args.output}; set reviewed to true only after checking every pairing.');return 0
  if args.dry_run:
   for i,(a,b) in enumerate(segments):print(f'{i+1:3} {a:8.3f} {b:8.3f} duration {b-a:7.3f}')
   print('No files written. Create and review a plan before export.');return 0
  if not args.plan:raise ValueError('Supply --plan with a reviewed alignment plan, or use --dry-run.')
  plan=json.loads(args.plan.read_text())
  if not isinstance(plan,dict):raise ValueError('Plan must be a JSON object.')
  if plan.get('formatVersion')!=1 or plan.get('recordingSha256')!=digest:raise ValueError('This plan belongs to a different recording or version.')
  if not math.isfinite(args.padding) or not 0<=args.padding<=.2:raise ValueError('Padding must be between zero and .2 seconds.')
  entries=validate_plan(plan,duration,list(clips),args.padding)
  if args.out.exists():raise ValueError('Output already exists. Choose a new folder; existing recordings are never replaced.')
  args.out.parent.mkdir(parents=True,exist_ok=True);stage=Path(tempfile.mkdtemp(prefix='.recording-pack-',dir=args.out.parent))
  try:
   for entry in entries:
    a=max(0,entry['start']-args.padding);b=min(duration,entry['end']+args.padding)
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-nostdin','-n','-ss',str(a),'-to',str(b),'-i',str(args.recording),'-ac','1','-ar','44100','-b:a','96k',str(stage/(entry['id']+'.mp3'))],check=True)
    if (stage/(entry['id']+'.mp3')).stat().st_size==0:raise ValueError('Encoder produced an empty clip.')
    encoded_duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',str(stage/(entry['id']+'.mp3'))],text=True))
    if not math.isfinite(encoded_duration) or not 0<encoded_duration<=10:raise ValueError('Encoded clip exceeds ten seconds including codec padding; shorten its plan boundaries.')
   (stage/'manifest.json').write_text(json.dumps([e['id'] for e in entries],indent=2)+'\n')
   (stage/'README.txt').write_text('Private local recordings. Listen to every sound and complete word before teaching. No redistribution permission is implied. Do not commit this folder or include it in progress backups.\n')
   stage.rename(args.out)
  finally:
   if stage.exists():shutil.rmtree(stage)
  print(f'Wrote complete local pack to {args.out}. Select the folder in Sound and grown-up help.');return 0
 except (ValueError,OSError,subprocess.CalledProcessError) as e:print(str(e),file=sys.stderr);return 1
if __name__=='__main__':raise SystemExit(main())
