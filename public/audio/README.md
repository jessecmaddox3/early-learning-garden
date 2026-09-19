# Optional local voice recordings

No personal recordings are included. Use the in-game Sound and grown-up help panel to select a local folder of MP3 files named with IDs from clips.json. This imports them into page memory only. Choose them again after reopening. A progress backup never includes recordings.

The optional scripts/record_audio.py tool prints the complete script, detects silence, lets you review an editable alignment plan and exports a new folder. Numbers and IDs are visual labels: do not speak them. See the project recording guide for pronunciation and setup. Never commit personal voice files.

Hosted maintainers can supply audio/manifest.json and the corresponding ID.mp3 files. A file alone is not activated unless its ID is in the manifest. The builder can embed reviewed local clips in offline downloads. Empty manifest means no supplied sound pack; sound modeling is adult-led.
