#!/usr/bin/env python3
"""Actual game controllers and IndexedDB with invented learners and no external requests."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
import json
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
CURRICULA={'subitize':'quantities-6-v1','blend':'words-12-v1','letters':'letters-18-v1','path':'path-10-v1'}
TITLES={'subitize':'How Many?','blend':'Robot Words','letters':'Letter Garden','path':'Bunny Hops'}
CLIPS=json.loads((ROOT/'public/audio/clips.json').read_text())
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
 def translate_path(self,path):
  if path.startswith('/nested/garden/'):path=path.removeprefix('/nested/garden')
  return super().translate_path(path)
def settings(p):
 if not p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Learners and backups',exact=True).click()
def close(p):
 if p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Close',exact=True).click()
def records(p,game):return p.evaluate("""game=>new Promise((resolve,reject)=>{const r=indexedDB.open(`early-learning-garden-${game}-v1`);r.onsuccess=()=>{const db=r.result;const tx=db.transaction('records');tx.objectStore('records').getAll().onsuccess=e=>resolve(e.target.result);tx.oncomplete=()=>db.close()};r.onerror=()=>reject(r.error)})""",game)
def exported(p):
 settings(p)
 with p.expect_download() as d:p.get_by_role('button',name='Export this learner’s progress',exact=True).click()
 return json.loads(Path(d.value.path()).read_text())
def seed(p,game,**snapshot):
 settings(p);value={'app':'early-learning-garden','game':game,'curriculum':CURRICULA[game],'version':1,'label':'Comet','snapshot':{'formatVersion':1,**snapshot}}
 p.get_by_label('Import a backup for this game',exact=True).set_input_files({'name':'invented.json','mimeType':'application/json','buffer':json.dumps(value).encode()});p.get_by_text(TITLES[game]+' learner: Comet.',exact=False).wait_for();close(p)
def model_sounds(p,n):
 for i in range(n):
  b=p.get_by_role('button',name='Sound modelled, continue',exact=True);b.wait_for();cue=p.locator('#audio-cue').inner_text();p.wait_for_timeout(80);assert p.locator('#audio-cue').inner_text()==cue;b.click();p.wait_for_timeout(30)
def saved(p):p.get_by_text('Saved on this device.',exact=False).wait_for()
def rapid_click(locator):locator.evaluate('(e)=>{e.click();e.click();e.click()}')
def main():
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT/'public')));Thread(target=server.serve_forever,daemon=True).start();origin=f'http://127.0.0.1:{server.server_port}';failures=[]
 with sync_playwright() as pw:
  browser=pw.chromium.launch()
  def check(name,game,action):
   ctx=browser.new_context(viewport={'width':390,'height':844});outside=[];errors=[];ctx.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') else (outside.append(r.request.url),r.abort()));p=ctx.new_page();p.on('pageerror',lambda e:errors.append(str(e)));p.goto(origin+'/'+game+'/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for()
   try:action(p,ctx);assert not outside,outside;assert not errors,errors;print('PASS',name,flush=True)
   except Exception as e:
    import traceback;traceback.print_exc();failures.append(name+': '+str(e));print('FAIL',name,str(e),flush=True)
   ctx.close()
  def count_game(p,c):
   seed(p,'subitize',level=2);p.get_by_role('button',name='Tap the jar to start',exact=True).click();p.wait_for_selector('.bug');n=p.locator('.bug').count();positions=p.locator('.bug').evaluate_all('(es)=>es.map(e=>[e.style.left,e.style.top])');p.locator('#choices').wait_for(state='visible');p.get_by_role('button',name='Look again at the same bugs',exact=True).click();assert p.locator('.bug').count()==n;assert p.locator('.bug').evaluate_all('(es)=>es.map(e=>[e.style.left,e.style.top])')==positions
   for i in range(8):
    if i:p.wait_for_selector('.bug');n=p.locator('.bug').count()
    p.locator('#choices').wait_for(state='visible');rapid_click(p.locator(f'#choices button[data-n="{n}"]'));saved(p);assert sum(x['attempts'] for x in next(r for r in records(p,'subitize') if r['profileId']==p.evaluate("sessionStorage.getItem('early-learning-garden-subitize-profile')"))['snapshot']['items'].values())==i+1
   p.get_by_role('button',name='Play another counting session',exact=True).wait_for();data=exported(p);assert data['snapshot']['finished'] and data['snapshot']['level']==3;close(p);p.reload();p.get_by_role('button',name='Play another counting session',exact=True).wait_for();p.get_by_role('button',name='Play another counting session',exact=True).click();p.wait_for_selector('.bug');assert p.locator('#jar .bug').count()>0
  check('How Many preserves replays, scores once, finishes and saves promoted state', 'subitize',count_game)
  def robot(p,c):
   for i in range(6):
    p.locator('#rail').focus();p.locator('#rail').press('End');model_sounds(p,3);p.locator('#pics').wait_for(state='visible');word=p.locator('#wordOut').inner_text();rapid_click(p.locator(f'#pics [data-w="{word}"]'));saved(p);assert sum(x['attempts'] for x in records(p,'blend')[0]['snapshot']['items'].values())==i+1
    if i<5:p.wait_for_function("document.querySelector('#wordOut').textContent===''")
   p.get_by_role('button',name='Play another blending session',exact=True).wait_for();p.reload();p.get_by_role('button',name='Play another blending session',exact=True).wait_for();data=exported(p);assert data['snapshot']['stage']==3 and data['snapshot']['finished'];close(p);p.get_by_role('button',name='Play another blending session',exact=True).click();p.locator('#rail').focus();p.locator('#rail').press('ArrowRight');value=p.locator('#rail').get_attribute('aria-valuenow');p.set_viewport_size({'width':320,'height':844});assert p.locator('#rail').get_attribute('aria-valuenow')==value;assert p.locator('#puck').bounding_box()['x']>=0
  check('Robot Words keyboard full session, rapid answers, durable promotion and resized puck', 'blend',robot)
  def letters(p,c):
   for i in range(8):
    p.wait_for_function("document.querySelector('#audio-cue').textContent.includes('Say the sound')")
    cue=p.locator('#audio-cue').inner_text();model_sounds(p,1);target=next(id[4:] for id,v in CLIPS.items() if id.startswith('snd-') and v['guidance']==cue);rapid_click(p.locator(f'.bloom[data-l="{target}"]'));saved(p)
    if i<7:p.wait_for_timeout(1550)
   p.get_by_role('button',name='Play another letter session',exact=True).wait_for();data=exported(p);assert data['snapshot']['round']==8 and data['snapshot']['finished'];assert sum(x['attempts'] for x in data['snapshot']['items'].values())==8
  check('Letter Garden full weak-item session scores each answer once', 'letters',letters)
  def bunny(p,c):
   seed(p,'path',level=3);p.wait_for_timeout(100);p.evaluate("window.cues=[];new MutationObserver(rs=>{for(const r of rs)for(const n of r.addedNodes)window.cues.push(n.textContent)}).observe(document.querySelector('#audio-cue'),{childList:true})")
   for trip in range(6):
    p.locator('#gameplay[aria-busy=false]').wait_for();start=int(p.locator('.pad:has(.bunny)').get_attribute('data-n'));goal=int(p.locator('.pad:has(.goal)').get_attribute('data-n'))
    for n in range(start+1,goal+1):
     p.locator('#gameplay[aria-busy=false]').wait_for();p.locator(f'.pad[data-n="{n}"]').click();p.wait_for_timeout(850)
    saved(p);assert str(goal) in p.evaluate('window.cues');assert p.evaluate('document.documentElement.scrollWidth<=innerWidth')
    if trip<5:p.wait_for_timeout(1900)
   p.get_by_role('button',name='Play another bunny session',exact=True).wait_for();data=exported(p);assert data['snapshot']['finished'] and data['snapshot']['round']==6
  check('Bunny Hops speaks destination numerals and completes six saved journeys', 'path',bunny)
  def learner_switch(p,c):
   p.locator('#rail').focus();p.locator('#rail').press('End');model_sounds(p,3);p.locator('#pics').wait_for(state='visible');word=p.locator('#wordOut').inner_text();p.locator(f'#pics [data-w="{word}"]').click();saved(p);settings(p);p.get_by_label('New learner nickname',exact=True).fill('Orion');p.get_by_role('button',name='Add learner',exact=True).click();p.get_by_text('Robot Words learner: Orion.',exact=False).wait_for();p.wait_for_timeout(800);assert exported(p)['snapshot']['round']==0;assert sorted(r['snapshot']['round'] for r in records(p,'blend'))==[0,1]
  check('switching learners during delayed feedback cancels the old continuation','blend',learner_switch)
  browser.close()
 server.shutdown();server.server_close()
 if failures:raise SystemExit('\n'.join(failures))
if __name__=='__main__':main()
