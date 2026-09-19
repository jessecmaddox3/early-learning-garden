# Design notes

> **TL;DR:** Preserve four distinct games, short sessions and encouraging retries. Score once, save the whole transition, and cancel stale work before changing learners or rounds.

The picture menu and large controls support shared play without requiring the learner to read instructions. The original system-font styling, generated chimes, native emoji, word bank and letter order remain. The games are original practice activities, not an independently validated educational intervention.

How Many flashes for 1,150 milliseconds. Levels use patterned 1–3, scattered 1–4, then clustered 5–6. Four consecutive correct answers promote; eight successes finish. Incorrect answers reveal the same arrangement and count it. Scatter uses a finite spaced grid with bounded jitter, and three unique ascending answer choices come from a finite pool. Look again keeps the question identity.

Robot Words retains all 12 words and three stages: continuous beginnings/endings, stop endings, then stop beginnings. These are editorial groupings, with fox an explicit more complex ending. Three consecutive correct answers promote; six successes finish. Drag, tap and keyboard controls share the same inset puck geometry. Replaying retains the current word and cancels queued sound or feedback. Letter sounds precede the whole word and picture choices.

Letter Garden keeps all 18 letters in five waves. The lowest item streak determines the next target; a zero streak gets two choices, otherwise three. Three consecutive successes mark an item practiced. All but one currently introduced letter must meet that threshold before another wave opens. Earlier waves remain available, so letters introduced separately can later appear together. Eight successes finish with a rainbow and an explicit restart.

Bunny Hops keeps a straight, equally spaced path. Level 1 uses five spaces; level 2 uses ten; level 3 begins later on the same ten-space path. Only the next square moves the bunny. Every second journey promotes, and six finish. Hops name the square reached; a separate arrival cue counts the hops. Pads stay at least 48 pixels wide in a scrollable single row, with the current-to-goal span kept visible.

## Transactions and recovery

`shared/game-model.js` computes the complete scored transition before any asynchronous feedback. Per-item attempts, correct counts, streaks, promotion, stickers and session completion are saved together. `snapshot.js` keeps known items only, bounds counters and versions each curriculum. Object keys are canonicalized for JSONB round trips. Future formats stay recoverable rather than silently becoming fresh progress.

Every round has an identity. Replay, learner changes, restores and page departure cancel timers and audio; awaited continuations check that identity before changing the screen. Browser Back from a persisted page reloads and validates the current saved learner. Local profiles, conflict recovery and optional authenticated cloud use the public Morphology Forge storage architecture, with a separate database and game/curriculum binding for each game. No source household backend is included.

## Sound is part of the task

Default sound modeling is adult-led. A sound cue remains until the adult continues; ordinary text cues have reading time. Optional device speech uses local English voices only and falls back to readable pacing on failure. Phoneme prompts never rely on the pronunciation of a letter-name string. Clip and speech playback time out after ten seconds and stop; manual cues instead wait for a deliberate continuation or cancellation.

The canonical recording registry includes 19 sound IDs, because the 18-letter garden and the x in fox need different coverage. Short i uses insect rather than ice. Bunny instructions compose position and destination from separate clips. Imported recordings remain page-memory only and never enter learner snapshots. See [recording guidance](recording.md).

Background reading informed some choices but does not establish this app's effectiveness. The [Department for Education reading framework](https://assets.publishing.service.gov.uk/media/664f600c05e5fe28788fc437/The_reading_framework_.pdf) discusses sound modeling and letters that represent multiple phonemes. The [National Reading Panel report](https://www.nichd.nih.gov/sites/default/files/publications/pubs/nrp/Documents/report.pdf) reviews training studies, not this slider or its thresholds. The [Web Speech specification](https://webaudio.github.io/web-speech-api/) distinguishes local and remote voices. No particular browser's pronunciation quality is promised.
