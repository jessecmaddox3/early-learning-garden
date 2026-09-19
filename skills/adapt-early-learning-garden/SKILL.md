---
name: adapt-early-learning-garden
description: Adapt the Early Learning Garden games, practice banks, local recording workflow or progress system while preserving their full mechanics and privacy boundaries.
---

# Adapt Early Learning Garden

Read README.md, docs/design.md and docs/recording.md. Preserve all four games and their full original word/letter banks unless the user requests a content change. Use public/shared/bank.js for content, game-model.js for scored transitions, snapshot.js for bounded persisted data and each game controller for interactions.

Keep scored transitions synchronous and saved before awaited feedback. Every timer/audio continuation belongs to a round identity. Preserve replay, learner-switch and persisted-history recovery. Use meaningful regression cases for changed behavior.

Sound prompts require accurate modeling. Never silently use letter-name speech as phoneme instruction. Default adult-led prompts wait for explicit continuation. Recordings use the canonical clips.json registry; personal audio stays outside source, backups and cloud. User-added audio rights and listening quality are separate checks.

Keep optional cloud disabled by default, show its destination, require adult sign-in and preserve owner/game/curriculum boundaries. Use invented learners in tests. Build with npm run build; run npm test and the relevant Python/browser suites. Inspect exact downloadable HTML/archives before redistribution. Keep MIT and dependency notices with copies.
