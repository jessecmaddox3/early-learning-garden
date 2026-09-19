/* Local recordings and explicitly enabled device speech. Phoneme cues never use letter-name TTS. */
import CLIPS from '../audio/clips.json' with {type:'json'};
import {createAudioQueue} from './audio-queue.js';
const root=new URL(document.querySelector('meta[name="app-root"]')?.content||'../',document.baseURI);
let unlocked=false,deviceVoice=false,muted=false,activeMedia=null,manifestPromise,controls,cue,details,notice,continueButton;
try{const saved=JSON.parse(localStorage.getItem('early-learning-sound-v1')||'{}');deviceVoice=saved.deviceVoice===true;muted=saved.muted===true;}catch{}
const savePrefs=()=>{try{localStorage.setItem('early-learning-sound-v1',JSON.stringify({deviceVoice,muted}));}catch{}};
const imported=new Map();
const pack=()=>globalThis.__EARLY_AUDIO_PACK__||{};
const voices=()=>globalThis.speechSynthesis?.getVoices?.().filter(v=>v.localService&&/^en(?:-|$)/i.test(v.lang))||[];
async function manifest(){
 if(location.protocol==='file:')return new Set(Object.keys(pack()));
 if(!manifestPromise)manifestPromise=(async()=>{const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),3000);try{const r=await fetch(new URL('audio/manifest.json',root),{signal:controller.signal,credentials:'omit',redirect:'error'});if(!r.ok)return new Set();const value=await r.json();return new Set(Array.isArray(value)?value.filter(id=>Object.hasOwn(CLIPS,id)):[]);}catch{return new Set();}finally{clearTimeout(timer);}})();
 return manifestPromise;
}
function recorded(url,signal){return new Promise(resolve=>{
 const media=new Audio(url);activeMedia=media;let finished=false,timer;
 const done=ok=>{if(finished)return;finished=true;clearTimeout(timer);media.pause();media.removeAttribute('src');media.load();signal.removeEventListener('abort',abort);media.onended=null;media.onerror=null;if(activeMedia===media)activeMedia=null;resolve(ok);};
 const abort=()=>done(false);signal.addEventListener('abort',abort,{once:true});media.onended=()=>done(true);media.onerror=()=>done(false);
 timer=setTimeout(()=>done(false),10000);if(signal.aborted)return done(false);media.play().catch(()=>done(false));
});}
function speak(text,signal){return new Promise(resolve=>{
 const voice=voices()[0];if(!unlocked||!voice||!globalThis.SpeechSynthesisUtterance)return resolve(false);
 const utterance=new SpeechSynthesisUtterance(text);utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=.9;utterance.pitch=1;let done=false,timer;
 const finish=ok=>{if(done)return;done=true;clearTimeout(timer);signal.removeEventListener('abort',abort);resolve(ok);};const abort=()=>{globalThis.speechSynthesis?.cancel();finish(false);};signal.addEventListener('abort',abort,{once:true});utterance.onend=()=>finish(true);utterance.onerror=()=>finish(false);timer=setTimeout(abort,10000);if(signal.aborted)return abort();globalThis.speechSynthesis.speak(utterance);
});}
function manualSound(signal){return new Promise(resolve=>{
 continueButton.hidden=false;continueButton.disabled=false;
 const finish=ok=>{continueButton.hidden=true;continueButton.removeEventListener('click',next);signal.removeEventListener('abort',abort);resolve(ok);};
 const next=()=>finish(true),abort=()=>finish(false);continueButton.addEventListener('click',next,{once:true});signal.addEventListener('abort',abort,{once:true});if(signal.aborted)return abort();
});}
function readingPause(text,signal){return new Promise(resolve=>{const abort=()=>{clearTimeout(timer);resolve(false);};const timer=setTimeout(()=>{signal.removeEventListener('abort',abort);resolve(true);},Math.min(2200,Math.max(800,text.length*45)));signal.addEventListener('abort',abort,{once:true});if(signal.aborted)abort();});}
const queue=createAudioQueue({maxMs:null,play:async({id,text},signal)=>{
 const clip=CLIPS[id];if(!clip)return false;
 if(cue)cue.textContent=clip.kind==='sound'?clip.guidance:(text||clip.text);
 if(muted)return true;
 let url=imported.get(id)||pack()[id];
 if(!url&&unlocked&&(await manifest()).has(id))url=new URL(`audio/${id}.mp3`,root).href;
 if(signal.aborted)return false;
 if(url&&unlocked&&await recorded(url,signal))return true;
 if(signal.aborted)return false;
 if(clip.kind==='sound'){if(details)details.open=true;if(notice)notice.textContent='Model this sound aloud, then press Sound modelled. Each queued sound waits for you.';return manualSound(signal);}
 if(deviceVoice){const ok=await speak(text||clip.text,signal);if(!ok&&notice)notice.textContent='No working local English voice is available. Read the cue aloud or add recordings.';if(ok)return true;return readingPause(text||clip.text,signal);}
 return readingPause(text||clip.text,signal);
}});
export const cancelAudio=()=>queue.cancel();
export const say=(id,text)=>queue.say({id,text});
export const stretch=letter=>CLIPS['snd-'+letter]?.text||letter;
export function installUnlock(){
 if(controls)return;controls=document.createElement('section');controls.className='audio-controls';controls.setAttribute('aria-label','Sound and adult help');
 details=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Sound and grown-up help';details.append(summary);cue=document.createElement('p');cue.id='audio-cue';cue.textContent='Play together: an adult models letter sounds. Optional recordings can speak them for you.';details.append(cue);
 const note=document.createElement('p');note.textContent='This copy has no recorded sound pack. Computer speech is optional for instructions and whole words; it cannot reliably model letter sounds. The cue below is for the grown-up.';details.insertBefore(note,cue);
 continueButton=document.createElement('button');continueButton.type='button';continueButton.textContent='Sound modelled, continue';continueButton.hidden=true;details.append(continueButton);
 notice=document.createElement('p');notice.setAttribute('role','status');details.append(notice);
 const label=document.createElement('label'),check=document.createElement('input');check.type='checkbox';check.checked=deviceVoice;label.append(check,' Use a local device voice for instructions and words');check.addEventListener('change',()=>{cancelAudio();deviceVoice=check.checked;savePrefs();unlocked=true;notice.textContent=deviceVoice?(voices().length?'Local device voice enabled.':'No local English voice is currently available.'):'Adult-led prompts enabled.';});details.append(label);
 const muteLabel=document.createElement('label'),mute=document.createElement('input');mute.type='checkbox';mute.checked=muted;muteLabel.append(mute,' Mute sounds');mute.addEventListener('change',()=>{muted=mute.checked;savePrefs();cancelAudio();});details.append(muteLabel);
 const inputLabel=document.createElement('label');inputLabel.textContent='Choose your local recordings folder';const input=document.createElement('input');input.type='file';input.multiple=true;input.setAttribute('webkitdirectory','');input.accept='.mp3';inputLabel.append(input);details.append(inputLabel);
 input.addEventListener('change',()=>{const files=[...input.files],chosen=new Map();let bytes=0;for(const file of files){const id=file.name.replace(/\.mp3$/i,'');if(!/\.mp3$/i.test(file.name)||!Object.hasOwn(CLIPS,id))continue;if(chosen.has(id)){notice.textContent=`Two files use the same clip ID: ${id}. Keep one and try again.`;return;}if(file.size>5*1024*1024){notice.textContent='Keep each clip under 5 MB.';return;}bytes+=file.size;chosen.set(id,file);}if(bytes>100*1024*1024){notice.textContent='Keep the complete pack under 100 MB.';return;}cancelAudio();for(const url of imported.values())URL.revokeObjectURL(url);imported.clear();for(const [id,file] of chosen)imported.set(id,URL.createObjectURL(file));unlocked=true;notice.textContent=`${imported.size} local clips loaded for this page only. Choose them again after reopening. Progress backups do not include recordings.`;input.value='';});
 controls.append(details);document.body.append(controls);
 const unlock=()=>{unlocked=true;window.removeEventListener('pointerdown',unlock);window.removeEventListener('keydown',unlock);};window.addEventListener('pointerdown',unlock,{once:true});window.addEventListener('keydown',unlock,{once:true});
 window.addEventListener('pagehide',()=>{cancelAudio();for(const url of imported.values())URL.revokeObjectURL(url);imported.clear();});
}
let audioContext;
export function chime(kind='good'){
 if(!unlocked||muted)return;
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;audioContext??=new Ctx();if(audioContext.state==='suspended')void audioContext.resume();for(const [i,hz] of (kind==='good'?[523.25,659.25,783.99]:[329.63]).entries()){const t=audioContext.currentTime+i*.09,osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.frequency.setValueAtTime(hz,t);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.08,t+.01);gain.gain.exponentialRampToValueAtTime(.0001,t+.32);osc.connect(gain).connect(audioContext.destination);osc.start(t);osc.stop(t+.34);}}catch{}
}
