import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url)),read=name=>readFile(path.join(root,name),'utf8'),write=(name,value)=>writeFile(path.join(root,name),value);
await mkdir(path.join(root,'artifacts'),{recursive:true});await mkdir(path.join(root,'public/vendor'),{recursive:true});
const license=await read('LICENSE'),manifest=JSON.parse(await read('licenses/npm/SOURCES.json')),notices=['Early Learning Garden dependency notices. Original application and teaching bank are MIT licensed.'];
for(const item of manifest){notices.push(`${item.package} ${item.version} (${item.license})`);for(const file of item.notices)notices.push(await read(file));}
await write('public/LICENSE.txt',license);await write('public/THIRD_PARTY_NOTICES.txt',notices.join('\n\n'));
await build({stdin:{contents:"export {createClient} from '@supabase/supabase-js'",resolveDir:root},bundle:true,format:'esm',target:['es2022'],outfile:path.join(root,'public/vendor/supabase.js'),legalComments:'inline'});
const registry=JSON.parse(await read('public/audio/clips.json')),ids=JSON.parse(await read('public/audio/manifest.json')),pack={};
if(!Array.isArray(ids)||new Set(ids).size!==ids.length)throw Error('Audio manifest must list unique clip IDs.');
for(const id of ids){if(!Object.hasOwn(registry,id))throw Error('Unknown audio clip ID.');const bytes=await readFile(path.join(root,'public/audio',id+'.mp3'));if(bytes.length>5*1024*1024)throw Error('Audio clip exceeds 5 MB.');pack[id]='data:audio/mpeg;base64,'+bytes.toString('base64');}
const escape=t=>t.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const credits=`<details class="audio-controls"><summary>Credits and licenses</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">${escape(license+'\n\n'+notices.join('\n\n'))}</pre></details>`;
const games={subitize:'How-Many.html',blend:'Robot-Words.html',letters:'Letter-Garden.html',path:'Bunny-Hops.html'};
for(const [game,filename] of Object.entries(games)){
 const result=await build({entryPoints:[path.join(root,`public/${game}/${game}.js`)],bundle:true,format:'iife',target:['es2022'],write:false,external:['../vendor/supabase.js'],legalComments:'inline'}),script=result.outputFiles[0].text;
 await write(`public/${game}/bundle.js`,script);let html=await read(`public/${game}/index.html`);html=html.replace(`<script type="module" src="./${game}.js"></script>`,'<script src="./bundle.js" defer></script>');await write(`public/${game}/index.html`,html);
 html=html.replace('<link rel="stylesheet" href="../shared/kids.css">',`<style>${await read('public/shared/kids.css')}</style>`).replace('href="../"','href="./Early-Learning-Garden.html"').replace('<script src="./bundle.js" defer></script>',`<script>globalThis.__EARLY_AUDIO_PACK__=${JSON.stringify(pack)};\n${script.replaceAll('</script','<\\/script')}</script>`).replace('</body>',credits+'</body>');
 await write('artifacts/'+filename,html);
}
const menu=await read('public/menu.js');const result=await build({stdin:{contents:menu,resolveDir:path.join(root,'public')},bundle:true,format:'iife',target:['es2022'],write:false});await write('public/menu.bundle.js',result.outputFiles[0].text);
let offline=menu;for(const [game,name] of Object.entries(games))offline=offline.replace(`href:'${game}/'`,`href:'${name}'`);
const bundle=await build({stdin:{contents:offline,resolveDir:path.join(root,'public')},bundle:true,format:'iife',target:['es2022'],write:false});
let html=await read('public/index.html');html=html.replace('<link rel="manifest" href="./manifest.webmanifest">','').replace('<link rel="stylesheet" href="./shared/kids.css">',`<style>${await read('public/shared/kids.css')}</style>`).replace('<link rel="stylesheet" href="./garden.css">',`<style>${await read('public/garden.css')}</style>`).replace('<script src="./menu.bundle.js" defer></script>',`<script>globalThis.__EARLY_AUDIO_PACK__=${JSON.stringify(pack)};\n${bundle.outputFiles[0].text.replaceAll('</script','<\\/script')}</script>`).replace('</body>',credits+'</body>');await write('artifacts/Early-Learning-Garden.html',html);
console.log('Built four complete offline games, picture menu and hosted bundles.');
