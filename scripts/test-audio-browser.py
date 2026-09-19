#!/usr/bin/env python3
"""Audio fallback and manual pacing in the actual build, with synthetic browser capabilities."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT/'public')));Thread(target=server.serve_forever,daemon=True).start();origin=f'http://127.0.0.1:{server.server_port}'
with sync_playwright() as pw:
 browser=pw.chromium.launch()
 for mode in ['adult','unavailable-device-voice']:
  c=browser.new_context(viewport={'width':320,'height':844});outside=[];errors=[];c.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') else (outside.append(r.request.url),r.abort()))
  if mode!='adult':c.add_init_script("localStorage.setItem('early-learning-sound-v1',JSON.stringify({deviceVoice:true}));Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>[],cancel(){},speak(){throw Error('No voice must not speak')}}})")
  p=c.new_page();p.on('pageerror',lambda e:errors.append(str(e)))
  if mode=='adult':
   p.goto(origin+'/blend/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for();word=''.join(p.locator('.slot').all_text_contents());p.locator('#rail').focus();p.locator('#rail').press('End');cont=p.get_by_role('button',name='Sound modelled, continue',exact=True);cont.wait_for();cue=p.locator('#audio-cue').inner_text();p.wait_for_timeout(1000);assert p.locator('#audio-cue').inner_text()==cue;assert p.locator('#pics').is_hidden();p.locator('#again').click();assert ''.join(p.locator('.slot').all_text_contents())==word;p.wait_for_timeout(100);assert p.locator('#pics').is_hidden() and cont.is_hidden();p.locator('#rail').focus();p.locator('#rail').press('End')
   for i in range(3):cont.wait_for();cont.click();p.wait_for_timeout(40)
   p.locator('#pics').wait_for(state='visible');print('PASS manual sounds hold, replay cancels the old sequence, full blending resumes',flush=True)
  else:
   p.goto(origin+'/path/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for();p.wait_for_function("document.querySelector('#audio-cue').textContent==='The bunny is on'");start=p.evaluate('performance.now()');p.wait_for_function("document.querySelector('#audio-cue').textContent==='1'");elapsed=p.evaluate('performance.now()')-start;assert elapsed>=650,elapsed;p.wait_for_function("document.querySelector('#audio-cue').textContent==='Hop to'");elapsed2=p.evaluate('performance.now()')-start;assert elapsed2>=1400,elapsed2;print('PASS unavailable device voice falls back to readable, paced adult cues',flush=True)
  assert not outside,outside;assert not errors,errors;c.close()
 browser.close()
server.shutdown();server.server_close()
