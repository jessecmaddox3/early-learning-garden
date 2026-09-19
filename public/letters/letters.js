/* Eighteen letters, five editorial waves, weakest-item practice and sound contrast. */
import {installUnlock,say,chime,stretch,cancelAudio} from '../shared/audio.js';
import * as S from '../shared/progress.js';
import {WAVES,ANCHORS} from '../shared/bank.js';
import {score,restartSession,shuffled} from '../shared/game-model.js';
import {createRoundLife} from '../shared/round-life.js';
const GAME='letters',FLOWERS=['🌻','🌷','🌺'],el=id=>document.getElementById(id),life=createRoundLife();let state,token,target,phase;
function paint(){el('stickers').textContent='⭐️'.repeat(state.stickers);}
function save(){S.writeLocal(GAME,state);paint();}
function newRound(){token=life.begin();phase='answer';el('reaction').textContent='';el('again').hidden=true;const pool=WAVES.slice(0,state.wave+1).flat(),weak=Math.min(...pool.map(l=>state.items[l]?.streak||0)),weakest=pool.filter(l=>(state.items[l]?.streak||0)===weak);target=weakest[Math.floor(Math.random()*weakest.length)];const n=(state.items[target]?.streak||0)===0?2:3,opts=shuffled([target,...shuffled(pool.filter(l=>l!==target)).slice(0,n-1)]);el('blooms').replaceChildren();for(const [i,l] of opts.entries()){const b=document.createElement('button');b.type='button';b.className='bloom grown';b.dataset.l=l;b.setAttribute('aria-label',l);b.innerHTML=`<span class="petals">${FLOWERS[i]}</span><span class="letter">${l}</span>`;b.addEventListener('click',()=>chose(l));el('blooms').append(b);}say(`snd-${target}`,stretch(target));if(!document.querySelector('dialog')?.open)el('speaker').focus({preventScroll:true});}
async function chose(l){if(phase!=='answer'||!life.valid(token))return;phase='feedback';const own=token,asked=target,correct=l===asked;state=score(GAME,state,asked,correct);save();
 if(correct){chime('good');el('reaction').textContent=ANCHORS[asked][1];await say(`anchor-${asked}`,`${ANCHORS[asked][0]}.`);if(!life.valid(own))return;if(state.finished)return finish();life.later(own,newRound,650);}
 else{chime('soft');el('reaction').textContent='🤔';await say(`snd-${l}`,stretch(l));if(!life.valid(own))return;await say(`snd-${asked}`,stretch(asked));if(life.valid(own))phase='answer';}
}
function finish(){phase='finished';el('reaction').textContent='🌈';el('blooms').replaceChildren();el('again').hidden=false;say('all-done','All done! Lovely work.');}
function load(){state=S.readLocal(GAME);token=life.begin();paint();if(state.finished)finish();else newRound();}
el('speaker').addEventListener('click',()=>{if(phase!=='answer'||!life.valid(token))return;cancelAudio();say(`snd-${target}`,stretch(target));if(!document.querySelector('dialog')?.open)el('speaker').focus({preventScroll:true});});
el('again').addEventListener('click',()=>{if(phase!=='finished'||!life.valid(token))return;state=restartSession(GAME,state);save();newRound();});
installUnlock();S.initProgress(GAME).then(()=>{document.addEventListener('progress-loaded',load);load();}).catch(e=>el('reaction').textContent=e.message);
