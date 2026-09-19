import contextlib,hashlib,importlib.util,io,json,math,shutil,struct,sys,tempfile,unittest,wave
from pathlib import Path
from unittest.mock import patch
p=Path(__file__).resolve().parents[1]/'scripts/record_audio.py';spec=importlib.util.spec_from_file_location('record_export',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
@unittest.skipUnless(shutil.which('ffmpeg') and shutil.which('ffprobe'),'Optional FFmpeg tools are not installed')
class ExportTests(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.root=Path(self.temp.name);self.recording=self.root/'synthetic.wav'
  rate=16000
  with wave.open(str(self.recording),'wb') as f:
   f.setnchannels(1);f.setsampwidth(2);f.setframerate(rate);f.writeframes(b''.join(struct.pack('<h',int(4000*math.sin(2*math.pi*440*i/rate)) if .7<=i/rate<1.0 or 1.8<=i/rate<2.1 else 0) for i in range(rate*3)))
  self.registry={'first':{'text':'synthetic tone','kind':'speech','guidance':''},'second':{'text':'synthetic tone','kind':'speech','guidance':''}}
 def tearDown(self):self.temp.cleanup()
 def run_main(self,args):
  with patch.object(sys,'argv',['record_audio.py',*map(str,args)]),patch.object(m,'registry',return_value=self.registry),contextlib.redirect_stdout(io.StringIO()),contextlib.redirect_stderr(io.StringIO()):return m.main()
 def make_plan(self):
  plan=self.root/'plan.json';self.assertEqual(self.run_main(['plan',self.recording,'--output',plan]),0);v=json.loads(plan.read_text());self.assertEqual(len(v['clips']),2);self.assertFalse(v['reviewed']);v['reviewed']=True;plan.write_text(json.dumps(v));return plan
 def test_actual_silence_plan_and_complete_export(self):
  plan=self.make_plan();out=self.root/'pack';self.assertEqual(self.run_main(['split',self.recording,'--plan',plan,'--out',out]),0);self.assertEqual(json.loads((out/'manifest.json').read_text()),['first','second']);self.assertGreater((out/'first.mp3').stat().st_size,100);before=(out/'first.mp3').read_bytes();self.assertEqual(self.run_main(['split',self.recording,'--plan',plan,'--out',out]),1);self.assertEqual((out/'first.mp3').read_bytes(),before)
 def test_failed_second_encode_does_not_publish_partial_pack(self):
  plan=self.make_plan();out=self.root/'pack';native=m.subprocess.run;encodes=0
  def fail(args,**kwargs):
   nonlocal encodes
   if args[-1].endswith('.mp3'):
    encodes+=1
    if encodes==2:raise m.subprocess.CalledProcessError(1,args)
   return native(args,**kwargs)
  with patch.object(m.subprocess,'run',side_effect=fail):self.assertEqual(self.run_main(['split',self.recording,'--plan',plan,'--out',out]),1)
  self.assertFalse(out.exists());self.assertEqual(list(self.root.glob('.recording-pack-*')),[])
 def test_changed_recording_refuses_old_plan(self):
  plan=self.make_plan();self.recording.write_bytes(self.recording.read_bytes()+b'changed');self.assertEqual(self.run_main(['split',self.recording,'--plan',plan,'--out',self.root/'pack']),1);self.assertFalse((self.root/'pack').exists())
if __name__=='__main__':unittest.main()
