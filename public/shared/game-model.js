import {cleanProgress,SESSION_ROUNDS} from './snapshot.js';
import {WAVES} from './bank.js';
export function score(game,value,key,correct){
 const s=cleanProgress(game,value);if(s.finished)return s;
 const prev=s.items[key]||{attempts:0,correct:0,streak:0,mastered:false};
 prev.attempts=Math.min(1000000,prev.attempts+1);prev.correct=Math.min(prev.attempts,prev.correct+(correct?1:0));prev.streak=correct?Math.min(prev.correct,prev.streak+1):0;prev.mastered=prev.streak>=(game==='path'?2:3);s.items[key]=prev;
 if(correct){s.streak++;s.round++;s.stickers++;
  if(game==='subitize'&&s.streak>=4&&s.level<3){s.level++;s.streak=0;}
  if(game==='blend'&&s.streak>=3&&s.stage<3){s.stage++;s.streak=0;}
  if(game==='path'&&s.round%2===0&&s.level<3)s.level++;
  if(game==='letters'){const letters=WAVES.slice(0,s.wave+1).flat();if(s.wave<4&&letters.filter(l=>s.items[l]?.mastered).length>=letters.length-1)s.wave++;}
 }else s.streak=0;
 s.finished=s.round>=SESSION_ROUNDS[game];return cleanProgress(game,s);
}
export function restartSession(game,s){return cleanProgress(game,{...s,round:0,stickers:0,streak:0,finished:false});}
export function shuffled(values,rng=Math.random){const out=[...values];for(let i=out.length-1;i>0;i--){const v=rng();const j=Math.floor((Number.isFinite(v)?Math.max(0,Math.min(.999999999,v)):0)*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
const PATTERNS={1:[[50,50]],2:[[30,30],[70,70]],3:[[26,26],[50,50],[74,74]],4:[[28,28],[72,28],[28,72],[72,72]],5:[[26,26],[74,26],[50,50],[26,74],[74,74]],6:[[28,22],[72,22],[28,50],[72,50],[28,78],[72,78]]};
export function countPositions(level,n,rng=Math.random){
 if(!Number.isInteger(n)||n<1||n>6)throw new TypeError('Use one to six items.');
 if(level===1)return PATTERNS[n].map(p=>[...p]);
 if(level===3){const left=Math.ceil(n/2);return Array.from({length:n},(_,i)=>[i<left?24:76,20+(i<left?i:i-left)*30]);}
 const cells=shuffled([[20,25],[50,25],[80,25],[20,75],[50,75],[80,75]],rng);
 return cells.slice(0,n).map(([x,y])=>[x+(Math.max(0,Math.min(1,rng()))-.5)*4,y+(Math.max(0,Math.min(1,rng()))-.5)*4]);
}
export function numberChoices(answer,rng=Math.random){const candidates=Array.from({length:7},(_,i)=>i+1).filter(n=>n!==answer);const near=candidates.filter(n=>Math.abs(n-answer)<=2);return [answer,...shuffled(near.length>=2?near:candidates,rng).slice(0,2)].sort((a,b)=>a-b);}
