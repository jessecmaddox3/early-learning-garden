/** Sequential audio with bounded duration and cancellation of active/queued work. */
export function createAudioQueue({play,maxMs=15000}){
 let tail=Promise.resolve(),scope=new AbortController();
 function cancel(){scope.abort();scope=new AbortController();tail=Promise.resolve();}
 function say(payload){const parent=scope.signal;const next=tail.then(async()=>{
  if(parent.aborted)return false;const current=new AbortController();
  let abort;const aborted=new Promise(resolve=>{abort=()=>{current.abort();resolve(false);};parent.addEventListener('abort',abort,{once:true});});
  const timeout=maxMs===null?null:setTimeout(abort,maxMs);
  try{return await Promise.race([Promise.resolve().then(()=>play(payload,current.signal)).then(v=>!current.signal.aborted&&v!==false).catch(()=>false),aborted]);}
  finally{clearTimeout(timeout);parent.removeEventListener('abort',abort);}
 });tail=next.catch(()=>{});return next;}
 return {say,cancel};
}
