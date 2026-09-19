# Use your own recordings

> **TL;DR:** This is optional. Play together using the grown-up cues immediately. For recorded sound practice, make a local clip folder and choose it in the game. No recording is uploaded.

The game needs the intended sounds, not spoken letter names. Model short vowels using the registry's example words. Continuous consonants can be held gently; stop sounds stay short, without an exaggerated trailing “uh.” For x in fox, use /k/ followed by /s/. Listen to every clip and all 12 complete words before teaching. Accent and phoneme quality require human judgment.

## The simple import

In **Sound and grown-up help**, choose a local folder containing MP3 files named with the IDs in `public/audio/clips.json`, such as `snd-m.mp3` or `word-sun.mp3`. You can start with only some clips; missing sound clips still use adult-led cues. Each file must be under 5 MB, the pack under 100 MB, and every clip at most ten seconds. Duplicate IDs are rejected.

The files stay in memory for that page only. Choose them again after a reload or changing games. The browser's folder picker may include unrelated files; only recognized MP3 filenames are read. Progress backups and cloud saves contain no audio. Keep voice files private unless you separately have permission to redistribute them.

## Record once, then split

This optional developer workflow requires Python 3 and separately installed [FFmpeg and ffprobe](https://ffmpeg.org/download.html). They are not included in the game and have their own licenses.

From the source folder:

```sh
python3 scripts/record_audio.py script > recording-script.txt
```

Read only each spoken line. Do not say its number, ID or bracketed guidance. Leave a clear pause between entries. The sound rows contain guidance instead of an ordinary text line: model the indicated sound. Save your recording somewhere private.

Create a proposed plan:

```sh
python3 scripts/record_audio.py plan path/to/recording.m4a --output voice-plan.json
```

Open `voice-plan.json` in a text editor. Listen to the recording and check every ID, start and end time. Correct extra takes, missing phrases and boundaries; matching segment counts alone cannot establish alignment. Set `"reviewed": true` only after checking. Keep this plan private, too.

Then export into a new folder:

```sh
python3 scripts/record_audio.py split path/to/recording.m4a --plan voice-plan.json --out audio-packs/my-voice
```

Existing output folders are never replaced. Encoding happens in a temporary sibling folder and the manifest is published only after all clips succeed. A failed export cleans only its temporary folder. Every planned clip, including padding, must fit within the ten-second playback limit. Default padding is 0.03 seconds; adjust `--padding` between 0 and 0.2 if quiet sounds are clipped.

For diagnostics, `split path/to/recording.m4a --dry-run` prints detected boundaries without writing files. `ids` prints the registry. `--noise` and `--gap` tune silence detection. FFmpeg detects volume below a threshold, not words or their meaning; [filter documentation](https://ffmpeg.org/ffmpeg-filters.html#silencedetect).

## Include a pack in your own hosted or offline copy

After reviewing rights and listening quality, copy chosen `ID.mp3` files into `public/audio/` and list their IDs in `public/audio/manifest.json`. Run `npm run build`. The hosted version reads that manifest; offline HTML embeds those clips directly. Dropping a file without listing its ID does not activate it.

Personal MP3s and `audio-packs/` are ignored by Git. The original public release contains no recordings. Do not accidentally distribute your recordings by sharing a locally rebuilt HTML file: embedded audio is part of that file. Keep source and audio permissions distinct.
