import {WORDS,WAVES} from './bank.js';
export const CURRICULA=Object.freeze({subitize:'quantities-6-v1',blend:'words-12-v1',letters:'letters-18-v1',path:'path-10-v1'});
export const SESSION_ROUNDS=Object.freeze({subitize:8,blend:6,letters:8,path:6});
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const count=v=>Number.isSafeInteger(v)&&v>=0&&v<=1000000?v:0;
const bounded=(v,min,max,fallback)=>Number.isInteger(v)&&v>=min&&v<=max?v:fallback;
const keys={subitize:Array.from({length:6},(_,i)=>`n${i+1}`),blend:WORDS.map(w=>w.w),letters:WAVES.flat(),path:Array.from({length:9},(_,i)=>`to${i+2}`)};
export function cleanProgress(game,value){
 if(!CURRICULA[game])throw new TypeError('Unknown game.');
 const raw=object(value)?value:{};const items={};
 for(const key of Object.keys(object(raw.items)?raw.items:{}).sort()){
  if(!keys[game].includes(key)||!object(raw.items[key]))continue;
  const v=raw.items[key],attempts=count(v.attempts),correct=Math.min(attempts,count(v.correct)),streak=Math.min(correct,count(v.streak));
  items[key]={attempts,correct,streak,mastered:streak>=(game==='path'?2:3)};
 }
 const round=bounded(raw.round,0,SESSION_ROUNDS[game],0);
 return {formatVersion:1,level:bounded(raw.level,1,3,1),stage:bounded(raw.stage,1,3,1),wave:bounded(raw.wave,0,4,0),round,stickers:Math.min(count(raw.stickers),SESSION_ROUNDS[game]),streak:count(raw.streak),finished:raw.finished===true||round===SESSION_ROUNDS[game],items};
}
export function normalizeSnapshot(game,value){if(!object(value)||value.formatVersion!==1)throw new TypeError('This saved progress needs a different app version. Keep a recovery export.');return cleanProgress(game,value);}
export function exportSnapshot(game,label,snapshot){return {app:'early-learning-garden',game,curriculum:CURRICULA[game],version:1,label,snapshot:normalizeSnapshot(game,snapshot)};}
export function importSnapshot(game,value){
 if(!object(value)||value.app!=='early-learning-garden'||value.game!==game||value.curriculum!==CURRICULA[game]||value.version!==1)throw new TypeError('That backup belongs to another game or app version.');
 if(typeof value.label!=='string'||!value.label.trim()||value.label.trim().length>60)throw new TypeError('A backup needs a nickname of 1 to 60 characters.');
 return {label:value.label.trim(),snapshot:normalizeSnapshot(game,value.snapshot)};
}
