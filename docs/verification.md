# Verification

> **TL;DR:** Checks use invented learners, fresh browser contexts, generated test tones and disposable local services. A public release is gated on the exact commit passing all CI jobs and an artifact review.

Core checks cover bounded snapshots, original content retention, complete promotion transitions, exact item mastery rules, finite choices, spaced layouts, sequential/cancellable audio and the shared durable/cloud storage engine. Storage tests include local revision conflicts, recovery, interrupted acknowledgments, account/backend binding and database object-key reordering.

The actual built-game browser suite completes full sessions of all four games, checks repeated clicks, preserved counting replays, durable promotions, robot keyboard/resize behavior, counting-on numerals and learner changes during feedback. Audio checks hold manual sound cues, cancel a queued sequence on replay and verify readable fallback when a device voice is unavailable. History checks perform normal navigate-away/Back and explicitly exercise the persisted-restoration event branch, because browser automation does not guarantee BFCache eligibility.

The storage browser suite uses real IndexedDB and actual JSON export/import. It checks unavailable storage, future-version recovery, competing tabs, failed writes, separate games, nested hosting, the offline picture menu and all four exact standalone files at 320/390/768/1440 widths. Requests outside isolated local resources are blocked.

Python checks exercise leading/trailing/no silence, malformed plans, sound registry coverage and duration limits. Where FFmpeg is installed, synthetic generated tones verify actual segmentation, complete MP3 export, refusal to replace existing files, changed-recording rejection and cleanup after an interrupted second encoding. No real voice recording is used.

The separate provider workflow starts Supabase CLI2.117.0 Auth, PostgREST, Kong and local Mailpit in a disposable Ubuntu runner. It verifies email-code sign-in, actual owner isolation, concurrent revisions, explicit conflict choices, lost-response reconciliation, two-browser restore and account/learner switching. Its harness refuses nonloopback services. Local SQL or HTTP doubles do not substitute for that job; inspect the Checks run for the exact release commit.

Automated browser verification uses Chromium. Physical phones, Safari/iOS audio, every browser/voice, real SMTP delivery, pronunciation of user recordings and educational efficacy remain unverified. Adult-led sound modeling is intentional; no independent prerecorded phonics pack is claimed. A homescreen manifest is included, but no service worker or automatic offline cache is promised. Downloaded HTML provides the supported fresh offline route.

Cloud actions include deterministic real-browser regressions for an initial flush racing attachment and a refresh racing intentional learner removal. Each exercises the real local adapter, IndexedDB store and upload loop with a synthetic connection; the provider job separately checks actual email-code authentication and remote saves. Successful mutations adopt their exact returned record, while passive reads from before the action are discarded.
