/* Twelve original words across three stages; earlier words stay available. */
import {installUnlock,say,chime,stretch} from '../shared/audio.js';
import * as S from '../shared/progress.js';
import {WORDS} from '../shared/bank.js';
import {score,restartSession,shuffled} from '../shared/game-model.js';
import {createRoundLife} from '../shared/round-life.js';
const GAME='blend',el=id=>document.getElementById(id),life=createRoundLife();let state,token,current,lit=-1,fraction=0,phase='start',dragging=false;
function paint(){el('stickers').textContent='⭐️'.repeat(state.stickers);}
function save(){S.writeLocal(GAME,state);paint();}
function position(f){fraction=Math.max(0,Math.min(1,f));const radius=el('puck').offsetWidth/2,w=el('rail').clientWidth;el('puck').style.left=`${radius+fraction*Math.max(0,w-radius*2)}px`;el('rail').setAttribute('aria-valuenow',String(Math.round(fraction*100)));}
function setup(same=false){token=life.begin();dragging=false;phase='rail';lit=-1;const pool=WORDS.filter(w=>w.stage<=state.stage);if(!same||!current)current=pool[Math.floor(Math.random()*pool.length)];el('wordOut').textContent='';el('pics').hidden=true;el('reaction').textContent='';el('letters').style.gridTemplateColumns=`repeat(${current.letters.length},1fr)`;el('letters').innerHTML=current.letters.map((l,i)=>`<div class="slot" data-i="${i}">${l}</div>`).join('');position(0);say('slide-robot','Slide the robot.');}
function crossed(f){if(phase!=='rail'||!life.valid(token))return;const zone=Math.min(current.letters.length-1,Math.floor(f*current.letters.length));for(let i=lit+1;i<=zone;i++){el('letters').children[i].classList.add('lit');say(`snd-${current.letters[i]}`,stretch(current.letters[i]));}lit=Math.max(lit,zone);if(f>.94)snap();}
async function snap(){if(phase!=='rail')return;phase='blending';const own=token,word=current;el('wordOut').textContent=word.w;await say(`word-${word.w}`,word.w);if(!life.valid(own))return;offer();}
function offer(){phase='answer';const choices=shuffled([current,...shuffled(WORDS.filter(w=>w.w!==current.w)).slice(0,2)]);el('pics').replaceChildren();for(const w of choices){const b=document.createElement('button');b.type='button';b.className='pic';b.dataset.w=w.w;b.setAttribute('aria-label',w.w);b.textContent=w.pic;b.addEventListener('click',()=>chose(w.w));el('pics').append(b);}el('pics').hidden=false;say('which-picture','Which picture?');}
async function chose(w){if(phase!=='answer'||!life.valid(token))return;phase='feedback';const own=token,word=current,correct=w===word.w;state=score(GAME,state,word.w,correct);save();
 if(correct){chime('good');el('reaction').textContent='🎉';await say(`yes-${word.w}`,`Yes! ${word.w}.`);if(!life.valid(own))return;if(state.finished)return finish();life.later(own,setup,600);}
 else{chime('soft');el('reaction').textContent='🤔';await say(`word-${word.w}`,word.w);if(!life.valid(own))return;await say('try-again','Try again.');if(life.valid(own))phase='answer';}
}
function finish(){phase='finished';el('reaction').textContent='👏';el('pics').hidden=true;el('wordOut').textContent='';el('again').setAttribute('aria-label','Play another blending session');say('all-done','All done! Lovely work.');}
function load(){state=S.readLocal(GAME);token=life.begin();paint();if(state.finished)finish();else setup();}
function eventFraction(e){const r=el('rail').getBoundingClientRect(),radius=el('puck').offsetWidth/2;return Math.max(0,Math.min(1,(e.clientX-r.left-radius)/Math.max(1,r.width-radius*2)));}
el('puck').addEventListener('pointerdown',e=>{if(phase!=='rail')return;dragging=true;el('puck').setPointerCapture(e.pointerId);e.preventDefault();});
el('puck').addEventListener('pointermove',e=>{if(!dragging||phase!=='rail')return;const f=eventFraction(e);position(f);crossed(f);});
for(const name of ['pointerup','pointercancel'])el('puck').addEventListener(name,()=>dragging=false);
el('rail').addEventListener('pointerdown',e=>{if(e.target===el('puck')||phase!=='rail')return;const f=eventFraction(e);position(f);crossed(f);});
el('rail').addEventListener('keydown',e=>{if(phase!=='rail')return;let f;if(e.key==='Home')f=0;else if(e.key==='End')f=1;else if(['ArrowRight','ArrowUp'].includes(e.key))f=Math.min(1,(lit+1.5)/current.letters.length);else if(['ArrowLeft','ArrowDown'].includes(e.key))f=Math.max(0,fraction-1/current.letters.length);else return;e.preventDefault();position(f);crossed(f);});
el('again').addEventListener('click',()=>{if(!life.valid(token))return;if(state.finished){state=restartSession(GAME,state);save();}el('again').setAttribute('aria-label','Replay this blending round');setup(phase!=='finished');});
window.addEventListener('resize',()=>position(fraction));document.addEventListener('progress-retired',()=>dragging=false);
installUnlock();S.initProgress(GAME).then(()=>{document.addEventListener('progress-loaded',load);load();}).catch(e=>el('reaction').textContent=e.message);
