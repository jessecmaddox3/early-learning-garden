#!/usr/bin/env python3
"""Saved game remains usable after normal Back and a persisted history restoration."""
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
 b=pw.chromium.launch();c=b.new_context(viewport={'width':390,'height':844});outside=[];errors=[];c.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') else (outside.append(r.request.url),r.abort()))
 p=c.new_page();p.on('pageerror',lambda e:errors.append(str(e)));p.goto(origin+'/blend/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for();p.get_by_role('button',name='Learners and backups',exact=True).click();p.get_by_label('New learner nickname',exact=True).fill('Comet');p.get_by_role('button',name='Add learner',exact=True).click();p.get_by_text('Robot Words learner: Comet.',exact=False).wait_for()
 def playable():
  p.locator('#rail').focus();p.locator('#rail').press('End');p.get_by_role('button',name='Sound modelled, continue',exact=True).wait_for();p.locator('#again').click();assert p.locator('#wordOut').inner_text()==''
 playable();p.goto(origin+'/');p.go_back();p.get_by_text('Robot Words learner: Comet.',exact=False).wait_for();playable()
 # Chromium may decline BFCache under automation. Explicitly exercise that real event branch too.
 with p.expect_navigation(wait_until='load'):p.evaluate("window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:true}));window.dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true}));")
 p.get_by_text('Robot Words learner: Comet.',exact=False).wait_for();playable();assert not outside,outside;assert not errors,errors;b.close()
server.shutdown();server.server_close();print('PASS real navigate-away/Back and explicit persisted-restoration event reopen the saved learner with usable controls.')
