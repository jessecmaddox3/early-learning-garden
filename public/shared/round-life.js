import {cancelAudio} from './audio.js';
export function createRoundLife(){
 let epoch=0,active=false;const timers=new Set();
 function cancel(){epoch++;active=false;for(const timer of timers)clearTimeout(timer);timers.clear();cancelAudio();}
 function begin(){cancel();active=true;return epoch;}
 const valid=token=>active&&token===epoch;
 function later(token,fn,ms){const timer=setTimeout(()=>{timers.delete(timer);if(valid(token))fn();},ms);timers.add(timer);}
 document.addEventListener('progress-retired',cancel);window.addEventListener('pagehide',cancel);
 // A history-cache restoration must reopen and validate the current saved learner.
 window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
 return {cancel,begin,valid,later};
}
