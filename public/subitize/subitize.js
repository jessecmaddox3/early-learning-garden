/* Patterned quantities, scattered collections, then two clusters. */
import {installUnlock,say,chime,cancelAudio} from '../shared/audio.js';
import * as S from '../shared/progress.js';
import {score,restartSession,countPositions,numberChoices} from '../shared/game-model.js';
import {createRoundLife} from '../shared/round-life.js';
const GAME='subitize',FLASH_MS=1150,BUGS=['🐞','🐝','🦋','🐛','🐌'];
const el=id=>document.getElementById(id),life=createRoundLife();let state,token,question,phase='start';
const rand=n=>Math.floor(Math.random()*n);
function paint(){el('stickers').textContent='⭐️'.repeat(state.stickers);}
function save(){S.writeLocal(GAME,state);paint();}
function showBugs(){el('jar').classList.remove('dark');el('jar').replaceChildren();for(const [x,y] of question.positions){const b=document.createElement('span');b.className='bug';b.textContent=question.bug;b.style.cssText=`left:${x}%;top:${y}%;transform:translate(-50%,-50%)`;el('jar').append(b);}}
function flash(same=false){
 token=life.begin();const own=token;phase='flash';el('choices').hidden=true;el('again').hidden=true;el('reaction').textContent='';
 if(!same){const n=state.level===1?1+rand(3):state.level===2?1+rand(4):5+rand(2);question={n,bug:BUGS[rand(BUGS.length)],positions:countPositions(state.level,n)};}
 showBugs();say('ask-how-many','How many?');
 life.later(own,()=>{el('jar').classList.add('dark');el('jar').innerHTML='<div class="lid">🫙</div>';offer();phase='answer';},FLASH_MS);
}
function offer(){el('choices').replaceChildren();for(const [i,n] of numberChoices(question.n).entries()){const b=document.createElement('button');b.className=`big pick-${i+1}`;b.type='button';b.textContent=n;b.dataset.n=n;b.addEventListener('click',()=>answered(n));el('choices').append(b);}el('choices').hidden=false;el('again').hidden=false;el('again').textContent='👀';el('again').setAttribute('aria-label','Look again at the same bugs');}
async function answered(n){
 if(phase!=='answer'||!life.valid(token))return;phase='feedback';const own=token,correct=n===question.n;state=score(GAME,state,`n${question.n}`,correct);save();el('choices').hidden=true;el('again').hidden=true;
 if(correct){chime('good');el('reaction').textContent='🎉';await say(`num-${question.n}`,`${question.n}!`);if(!life.valid(own))return;if(state.finished)return finish();life.later(own,()=>flash(),700);}
 else{chime('soft');el('reaction').textContent='🤔';await say('lets-count',"Let's count them.");if(!life.valid(own))return;showBugs();const bugs=[...el('jar').children];bugs.forEach(b=>b.hidden=true);for(let i=0;i<bugs.length;i++){bugs[i].hidden=false;await say(`num-${i+1}`,String(i+1));if(!life.valid(own))return;}await say(`total-${question.n}`,`${question.n} altogether.`);if(life.valid(own))life.later(own,()=>flash(),500);}
}
function finish(){phase='finished';el('jar').classList.remove('dark');el('jar').innerHTML='<div class="lid">🌟</div>';el('choices').hidden=true;el('reaction').textContent='👏';el('again').hidden=false;el('again').textContent='🔁';el('again').setAttribute('aria-label','Play another counting session');say('all-done','All done! Lovely work.');}
function load(){state=S.readLocal(GAME);token=life.begin();paint();if(state.finished)return finish();phase='start';el('choices').hidden=true;el('again').hidden=true;el('reaction').textContent='';el('jar').classList.remove('dark');el('jar').innerHTML='<button class="lid start-jar" type="button" aria-label="Tap the jar to start">🫙</button>';el('jar').querySelector('button').addEventListener('click',()=>{if(phase==='start')flash();});say('ask-tap-jar','Tap the jar to start.');}
el('again').addEventListener('click',()=>{if(!life.valid(token))return;if(phase==='answer')flash(true);else if(phase==='finished'){state=restartSession(GAME,state);save();flash();}});
installUnlock();S.initProgress(GAME).then(()=>{document.addEventListener('progress-loaded',load);load();}).catch(e=>{el('reaction').textContent=e.message;});
