#!/usr/bin/env python3
"""Real built storage and offline downloads, synthetic learners only."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
import json
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
READ_RECORDS="""()=>new Promise((resolve,reject)=>{const r=indexedDB.open('early-learning-garden-blend-v1');r.onerror=()=>reject(r.error);r.onsuccess=()=>{const db=r.result;const tx=db.transaction('records');tx.objectStore('records').getAll().onsuccess=e=>resolve(e.target.result);tx.oncomplete=()=>db.close()}})"""
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
 def translate_path(self,path):
  if path.startswith('/nested/garden/'):path=path.removeprefix('/nested/garden')
  return super().translate_path(path)
def settings(p):
 if not p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Learners and backups',exact=True).click()
def close_settings(p):
 if p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Close',exact=True).click()
def answer_ui(p):
 close_settings(p);p.locator('#again').click();p.locator('#rail').focus();p.locator('#rail').press('End');p.locator('#pics').wait_for(state='visible');word=p.locator('#wordOut').inner_text();p.locator(f'#pics [data-w="{word}"]').click()
def backup(label='Comet'):
 return {'app':'early-learning-garden','version':1,'game':'blend','curriculum':'words-12-v1','label':label,'snapshot':{'formatVersion':1,'stage':2,'round':2,'stickers':2,'items':{'sun':{'attempts':4,'correct':3,'streak':3}}}}
def upload(p,value):p.get_by_label('Import a backup for this game',exact=True).set_input_files({'name':'synthetic.json','mimeType':'application/json','buffer':json.dumps(value).encode()})
def exported(p,label='Export this learner’s progress'):
 settings(p)
 with p.expect_download() as d:p.get_by_role('button',name=label,exact=True).click()
 return json.loads(Path(d.value.path()).read_text())
def main():
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT/'public')));Thread(target=server.serve_forever,daemon=True).start();origin=f'http://127.0.0.1:{server.server_port}';failures=[]
 with sync_playwright() as pw:
  browser=pw.chromium.launch()
  def check(name,action,init=None,url=None):
   c=browser.new_context(viewport={'width':390,'height':844});outside=[];errors=[];c.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') or r.request.url.startswith((ROOT/'artifacts').as_uri()+'/') else (outside.append(r.request.url),r.abort()));c.add_init_script("try{localStorage.setItem('early-learning-sound-v1',JSON.stringify({muted:true}))}catch{}")
   if init:c.add_init_script(init)
   c.on('page',lambda p:p.on('pageerror',lambda e:errors.append(str(e))));p=c.new_page();p.goto(url or origin+'/blend/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for()
   try:action(p,c);assert not outside,outside;assert not errors,errors;print('PASS',name,flush=True)
   except Exception as e:failures.append(name+': '+str(e));print('FAIL',name,str(e),flush=True)
   c.close()
  def local(p,c):
   answer_ui(p);p.get_by_text('Saved on this device.',exact=False).wait_for();p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();data=exported(p);assert data['snapshot']['round']==1;assert 'binding' not in data['snapshot']
   upload(p,backup());p.get_by_text('Robot Words learner: Comet.',exact=False).wait_for();assert exported(p)['snapshot']['stage']==2;settings(p);p.get_by_role('button',name='Play as Player 1',exact=True).click();p.get_by_text('Robot Words learner: Player 1.',exact=False).wait_for();assert exported(p)['snapshot']['round']==1
   upload(p,{**backup(),'game':'letters'});p.get_by_text('Import failed:',exact=False).wait_for();assert exported(p)['snapshot']['round']==1
  check('real save/reload/export/import and independent learners',local)
  def temporary(p,c):
   p.get_by_text('Temporary session:',exact=False).wait_for();settings(p);upload(p,backup());p.wait_for_function("document.querySelector('#stickers').textContent.length>0");settings(p);p.get_by_label('New learner nickname',exact=True).fill('Orion');p.get_by_role('button',name='Add learner',exact=True).click();p.wait_for_function("document.querySelector('#stickers').textContent===''");settings(p);p.get_by_role('button',name='Play as Comet',exact=True).click();p.wait_for_function("document.querySelector('#stickers').textContent.length>0");assert exported(p)['snapshot']['round']==2
  check('temporary session profiles and backups work without IndexedDB',temporary,"Object.defineProperty(window,'indexedDB',{get(){throw Error('Synthetic unavailable')}})")
  def future(p,c):
   p.evaluate("""()=>new Promise(resolve=>{const r=indexedDB.open('early-learning-garden-blend-v1');r.onsuccess=()=>{const db=r.result,tx=db.transaction('records','readwrite'),s=tx.objectStore('records');s.getAll().onsuccess=e=>{const row=e.target.result[0];row.snapshot={formatVersion:99,unknown:{attempts:91}};s.put(row)};tx.oncomplete=()=>{db.close();resolve()}}})""");p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();raw=exported(p,'Export unreadable saved data');assert raw['snapshot']=={'formatVersion':99,'unknown':{'attempts':91}};assert p.locator('#gameplay').is_hidden();p.get_by_label('New learner nickname',exact=True).fill('Orion');p.get_by_role('button',name='Add learner',exact=True).click();p.get_by_text('Robot Words learner: Orion.',exact=False).wait_for();assert p.locator('#gameplay').is_visible()
  check('future versions stay recoverable and other learners remain usable',future)
  def competing(p,c):
   q=c.new_page();q.goto(origin+'/blend/');q.get_by_role('button',name='Learners and backups',exact=True).wait_for();answer_ui(p);p.get_by_text('Saved on this device.',exact=False).wait_for();answer_ui(q);q.get_by_text('Another tab saved first.',exact=False).wait_for();assert q.locator('#gameplay').evaluate('(e)=>e.inert');assert q.evaluate(READ_RECORDS)[0]['snapshot']['round']==1;assert exported(q)['snapshot']['round']==1;assert exported(q,'Export recovery copies')['copies']
  check('competing tabs preserve the losing attempt and freeze stale play',competing)
  def quota(p,c):
   p.evaluate('window.syntheticFail=true');answer_ui(p);p.get_by_text('This change could not be saved.',exact=False).wait_for();assert exported(p)['snapshot']['round']==1;assert p.evaluate(READ_RECORDS)[0]['snapshot']['round']==0
  check('failed durable write exposes exportable unsaved progress',quota,"const native=IDBObjectStore.prototype.put;IDBObjectStore.prototype.put=function(...a){if(window.syntheticFail&&this.name==='records')throw new DOMException('Synthetic quota','QuotaExceededError');return native.apply(this,a)}")
  def offline(p,c):
   settings(p);upload(p,backup());p.get_by_text('Robot Words learner: Comet.',exact=False).wait_for();p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();assert exported(p)['snapshot']['stage']==2;assert not p.get_by_role('button',name='Explore cloud saves',exact=True).count();close_settings(p)
   for game,name in [('blend','Robot-Words'),('subitize','How-Many'),('letters','Letter-Garden'),('path','Bunny-Hops')]:
    p.goto((ROOT/f'artifacts/{name}.html').as_uri());p.get_by_role('button',name='Learners and backups',exact=True).wait_for()
    for width in [320,390,768,1440]:
     p.set_viewport_size({'width':width,'height':844});assert p.evaluate('document.documentElement.scrollWidth<=innerWidth'),(game,width);out=ROOT/'artifacts/browser-checks';out.mkdir(exist_ok=True);p.screenshot(path=str(out/f'{game}-{width}.png'),full_page=True)
   p.goto((ROOT/'artifacts/Early-Learning-Garden.html').as_uri());p.get_by_role('link',name='How many?',exact=True).click();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();assert p.title()=='How Many?'
  check('all four exact offline files, folder menu and phone layouts work without network',offline,url=(ROOT/'artifacts/Robot-Words.html').as_uri())
  check('nested hosting loads the whole game',lambda p,c:answer_ui(p),url=origin+'/nested/garden/blend/')
  def isolation(p,c):
   answer_ui(p);p.get_by_text('Saved on this device.',exact=False).wait_for();p.goto(origin+'/letters/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for();assert exported(p)['snapshot']['round']==0
  check('different games keep separate progress',isolation)
  browser.close()
 server.shutdown();server.server_close()
 if failures:raise SystemExit('\n'.join(failures))
if __name__=='__main__':main()
