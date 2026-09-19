/* A straight numbered path: five spaces, ten spaces, then counting from later starts. */
import {installUnlock,say,chime} from '../shared/audio.js';
import * as S from '../shared/progress.js';
import {score,restartSession} from '../shared/game-model.js';
import {createRoundLife} from '../shared/round-life.js';
const GAME='path',el=id=>document.getElementById(id),life=createRoundLife();let state,token,size,bunnyAt,goal,hops,phase;
const rand=n=>Math.floor(Math.random()*n);
function paint(){el('stickers').textContent='⭐️'.repeat(state.stickers);}
function save(){S.writeLocal(GAME,state);paint();}
async function setup(){token=life.begin();const own=token;phase='prompt';el('gameplay').setAttribute('aria-busy','true');hops=0;el('reaction').textContent='';size=state.level===1?5:10;bunnyAt=state.level===3?2+rand(size-4):1;goal=bunnyAt+1+rand(Math.min(4,size-bunnyAt));draw();for(const [id,text] of [['bunny-on','The bunny is on'],[`num-${bunnyAt}`,String(bunnyAt)],['hop-to','Hop to'],[`num-${goal}`,String(goal)]]){await say(id,text);if(!life.valid(own))return;}phase='hopping';el('gameplay').setAttribute('aria-busy','false');}
function draw(focus=false){el('path').replaceChildren();for(let n=1;n<=size;n++){const b=document.createElement('button');b.className='pad';b.type='button';b.dataset.n=n;b.textContent=n;b.setAttribute('aria-label',`${n}${n===bunnyAt?', bunny is here':''}${n===goal?', carrot':''}`);if(n===bunnyAt)b.insertAdjacentHTML('beforeend','<span class="bunny" aria-hidden="true">🐰</span>');if(n===goal)b.insertAdjacentHTML('beforeend','<span class="goal" aria-hidden="true">🥕</span>');if(n===bunnyAt+1)b.classList.add('next');if(n<bunnyAt)b.classList.add('done');b.addEventListener('click',()=>tapped(n));el('path').append(b);}const next=el('path').querySelector(`[data-n="${Math.min(bunnyAt+1,goal)}"]`);if(focus)next?.focus({preventScroll:true});const region=el('path').parentElement,here=el('path').querySelector(`[data-n="${bunnyAt}"]`),end=el('path').querySelector(`[data-n="${goal}"]`);if(here&&end){const left=here.offsetLeft-el('path').offsetLeft,right=end.offsetLeft-el('path').offsetLeft+end.offsetWidth;if(right>region.scrollLeft+region.clientWidth)region.scrollLeft=right-region.clientWidth+8;if(left<region.scrollLeft)region.scrollLeft=Math.max(0,left-8);}}
async function tapped(n){if(phase!=='hopping'||!life.valid(token))return;phase='feedback';el('gameplay').setAttribute('aria-busy','true');const own=token;
 if(n!==bunnyAt+1){chime('soft');el('path').querySelector('.next')?.classList.add('wobble');await say('next-one','The next one.');if(life.valid(own)){el('path').querySelector('.next')?.classList.remove('wobble');phase='hopping';el('gameplay').setAttribute('aria-busy','false');}return;}
 bunnyAt=n;hops++;draw(true);
 // Store the full completed transition before its spoken feedback can be interrupted.
 if(bunnyAt===goal){state=score(GAME,state,`to${goal}`,true);save();}
 await say(`num-${bunnyAt}`,String(bunnyAt));if(!life.valid(own))return;
 if(bunnyAt!==goal){phase='hopping';el('gameplay').setAttribute('aria-busy','false');return;}
 chime('good');el('reaction').textContent='🥕';await say(`hops-${hops}`,`${hops} hops!`);if(!life.valid(own))return;
 if(state.finished)return finish();life.later(own,setup,700);
}
function finish(){phase='finished';el('reaction').textContent='🏆';el('again').setAttribute('aria-label','Play another bunny session');say('all-done','All done! Lovely work.');}
function load(){state=S.readLocal(GAME);token=life.begin();paint();if(state.finished){el('path').replaceChildren();finish();}else setup();}
el('again').addEventListener('click',()=>{if(!life.valid(token))return;if(state.finished){state=restartSession(GAME,state);save();}el('again').setAttribute('aria-label','Start another bunny journey');setup();});
installUnlock();S.initProgress(GAME).then(()=>{document.addEventListener('progress-loaded',load);load();}).catch(e=>el('reaction').textContent=e.message);
