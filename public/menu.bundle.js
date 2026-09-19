(() => {
  // public/audio/clips.json
  var clips_default = {
    "menu-count": {
      text: "How many?",
      kind: "speech",
      guidance: ""
    },
    "menu-blend": {
      text: "Robot words.",
      kind: "speech",
      guidance: ""
    },
    "menu-letters": {
      text: "Letter garden.",
      kind: "speech",
      guidance: ""
    },
    "menu-path": {
      text: "Bunny hops.",
      kind: "speech",
      guidance: ""
    },
    "ask-how-many": {
      text: "How many?",
      kind: "speech",
      guidance: ""
    },
    "ask-tap-jar": {
      text: "Tap the jar to start.",
      kind: "speech",
      guidance: ""
    },
    "lets-count": {
      text: "Let's count them.",
      kind: "speech",
      guidance: ""
    },
    "all-done": {
      text: "All done! Lovely work.",
      kind: "speech",
      guidance: ""
    },
    "try-again": {
      text: "Try again.",
      kind: "speech",
      guidance: ""
    },
    "which-picture": {
      text: "Which picture?",
      kind: "speech",
      guidance: ""
    },
    "slide-robot": {
      text: "Slide the robot.",
      kind: "speech",
      guidance: ""
    },
    "next-one": {
      text: "The next one.",
      kind: "speech",
      guidance: ""
    },
    "bunny-on": {
      text: "The bunny is on",
      kind: "speech",
      guidance: ""
    },
    "hop-to": {
      text: "Hop to",
      kind: "speech",
      guidance: ""
    },
    "num-1": {
      text: "1",
      kind: "speech",
      guidance: ""
    },
    "num-2": {
      text: "2",
      kind: "speech",
      guidance: ""
    },
    "num-3": {
      text: "3",
      kind: "speech",
      guidance: ""
    },
    "num-4": {
      text: "4",
      kind: "speech",
      guidance: ""
    },
    "num-5": {
      text: "5",
      kind: "speech",
      guidance: ""
    },
    "num-6": {
      text: "6",
      kind: "speech",
      guidance: ""
    },
    "num-7": {
      text: "7",
      kind: "speech",
      guidance: ""
    },
    "num-8": {
      text: "8",
      kind: "speech",
      guidance: ""
    },
    "num-9": {
      text: "9",
      kind: "speech",
      guidance: ""
    },
    "num-10": {
      text: "10",
      kind: "speech",
      guidance: ""
    },
    "total-1": {
      text: "1 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-2": {
      text: "2 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-3": {
      text: "3 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-4": {
      text: "4 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-5": {
      text: "5 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-6": {
      text: "6 altogether.",
      kind: "speech",
      guidance: ""
    },
    "total-7": {
      text: "7 altogether.",
      kind: "speech",
      guidance: ""
    },
    "hops-1": {
      text: "1 hops!",
      kind: "speech",
      guidance: ""
    },
    "hops-2": {
      text: "2 hops!",
      kind: "speech",
      guidance: ""
    },
    "hops-3": {
      text: "3 hops!",
      kind: "speech",
      guidance: ""
    },
    "hops-4": {
      text: "4 hops!",
      kind: "speech",
      guidance: ""
    },
    "hops-5": {
      text: "5 hops!",
      kind: "speech",
      guidance: ""
    },
    "snd-m": {
      text: "The sound of m in moon",
      kind: "sound",
      guidance: "Say the sound at the start of moon, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-m": {
      text: "moon.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say moon."
    },
    "snd-s": {
      text: "The sound of s in sun",
      kind: "sound",
      guidance: "Say the sound at the start of sun, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-s": {
      text: "sun.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say sun."
    },
    "snd-a": {
      text: "The sound of a in apple",
      kind: "sound",
      guidance: "Say the sound at the start of apple, not the letter name. Use the short vowel in this word."
    },
    "anchor-a": {
      text: "apple.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say apple."
    },
    "snd-t": {
      text: "The sound of t in tree",
      kind: "sound",
      guidance: "Say the sound at the start of tree, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-t": {
      text: "tree.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say tree."
    },
    "snd-n": {
      text: "The sound of n in nose",
      kind: "sound",
      guidance: "Say the sound at the start of nose, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-n": {
      text: "nose.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say nose."
    },
    "snd-p": {
      text: "The sound of p in pie",
      kind: "sound",
      guidance: "Say the sound at the start of pie, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-p": {
      text: "pie.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say pie."
    },
    "snd-i": {
      text: "The sound of i in insect",
      kind: "sound",
      guidance: "Say the sound at the start of insect, not the letter name. Use the short vowel in this word."
    },
    "anchor-i": {
      text: "insect.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say insect."
    },
    "snd-f": {
      text: "The sound of f in fish",
      kind: "sound",
      guidance: "Say the sound at the start of fish, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-f": {
      text: "fish.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say fish."
    },
    "snd-d": {
      text: "The sound of d in dog",
      kind: "sound",
      guidance: "Say the sound at the start of dog, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-d": {
      text: "dog.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say dog."
    },
    "snd-o": {
      text: "The sound of o in octopus",
      kind: "sound",
      guidance: "Say the sound at the start of octopus, not the letter name. Use the short vowel in this word."
    },
    "anchor-o": {
      text: "octopus.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say octopus."
    },
    "snd-l": {
      text: "The sound of l in lion",
      kind: "sound",
      guidance: "Say the sound at the start of lion, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-l": {
      text: "lion.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say lion."
    },
    "snd-h": {
      text: "The sound of h in hat",
      kind: "sound",
      guidance: "Say the sound at the start of hat, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-h": {
      text: "hat.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say hat."
    },
    "snd-e": {
      text: "The sound of e in egg",
      kind: "sound",
      guidance: "Say the sound at the start of egg, not the letter name. Use the short vowel in this word."
    },
    "anchor-e": {
      text: "egg.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say egg."
    },
    "snd-g": {
      text: "The sound of g in goat",
      kind: "sound",
      guidance: "Say the sound at the start of goat, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-g": {
      text: "goat.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say goat."
    },
    "snd-r": {
      text: "The sound of r in robot",
      kind: "sound",
      guidance: "Say the sound at the start of robot, not the letter name. Hold the sound gently without adding a vowel."
    },
    "anchor-r": {
      text: "robot.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say robot."
    },
    "snd-b": {
      text: "The sound of b in bee",
      kind: "sound",
      guidance: "Say the sound at the start of bee, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-b": {
      text: "bee.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say bee."
    },
    "snd-u": {
      text: "The sound of u in umbrella",
      kind: "sound",
      guidance: "Say the sound at the start of umbrella, not the letter name. Use the short vowel in this word."
    },
    "anchor-u": {
      text: "umbrella.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say umbrella."
    },
    "snd-c": {
      text: "The sound of c in cat",
      kind: "sound",
      guidance: "Say the sound at the start of cat, not the letter name. Keep the sound short; do not add an exaggerated uh."
    },
    "anchor-c": {
      text: "cat.",
      kind: "speech",
      guidance: "Optional: model the intended sound, then say cat."
    },
    "snd-x": {
      text: "The sound of x in fox",
      kind: "sound",
      guidance: "Say the final /k/ then /s/ in fox together. This letter represents two sounds."
    },
    "word-sun": {
      text: "sun",
      kind: "speech",
      guidance: ""
    },
    "yes-sun": {
      text: "Yes! sun.",
      kind: "speech",
      guidance: ""
    },
    "word-man": {
      text: "man",
      kind: "speech",
      guidance: ""
    },
    "yes-man": {
      text: "Yes! man.",
      kind: "speech",
      guidance: ""
    },
    "word-fan": {
      text: "fan",
      kind: "speech",
      guidance: ""
    },
    "yes-fan": {
      text: "Yes! fan.",
      kind: "speech",
      guidance: ""
    },
    "word-mom": {
      text: "mom",
      kind: "speech",
      guidance: ""
    },
    "yes-mom": {
      text: "Yes! mom.",
      kind: "speech",
      guidance: ""
    },
    "word-net": {
      text: "net",
      kind: "speech",
      guidance: ""
    },
    "yes-net": {
      text: "Yes! net.",
      kind: "speech",
      guidance: ""
    },
    "word-sat": {
      text: "sat",
      kind: "speech",
      guidance: ""
    },
    "yes-sat": {
      text: "Yes! sat.",
      kind: "speech",
      guidance: ""
    },
    "word-map": {
      text: "map",
      kind: "speech",
      guidance: ""
    },
    "yes-map": {
      text: "Yes! map.",
      kind: "speech",
      guidance: ""
    },
    "word-fox": {
      text: "fox",
      kind: "speech",
      guidance: ""
    },
    "yes-fox": {
      text: "Yes! fox.",
      kind: "speech",
      guidance: ""
    },
    "word-pig": {
      text: "pig",
      kind: "speech",
      guidance: ""
    },
    "yes-pig": {
      text: "Yes! pig.",
      kind: "speech",
      guidance: ""
    },
    "word-bug": {
      text: "bug",
      kind: "speech",
      guidance: ""
    },
    "yes-bug": {
      text: "Yes! bug.",
      kind: "speech",
      guidance: ""
    },
    "word-cat": {
      text: "cat",
      kind: "speech",
      guidance: ""
    },
    "yes-cat": {
      text: "Yes! cat.",
      kind: "speech",
      guidance: ""
    },
    "word-dog": {
      text: "dog",
      kind: "speech",
      guidance: ""
    },
    "yes-dog": {
      text: "Yes! dog.",
      kind: "speech",
      guidance: ""
    }
  };

  // public/shared/audio-queue.js
  function createAudioQueue({ play, maxMs = 15e3 }) {
    let tail = Promise.resolve(), scope = new AbortController();
    function cancel() {
      scope.abort();
      scope = new AbortController();
      tail = Promise.resolve();
    }
    function say2(payload) {
      const parent = scope.signal;
      const next = tail.then(async () => {
        if (parent.aborted) return false;
        const current = new AbortController();
        let abort;
        const aborted = new Promise((resolve) => {
          abort = () => {
            current.abort();
            resolve(false);
          };
          parent.addEventListener("abort", abort, { once: true });
        });
        const timeout = maxMs === null ? null : setTimeout(abort, maxMs);
        try {
          return await Promise.race([Promise.resolve().then(() => play(payload, current.signal)).then((v) => !current.signal.aborted && v !== false).catch(() => false), aborted]);
        } finally {
          clearTimeout(timeout);
          parent.removeEventListener("abort", abort);
        }
      });
      tail = next.catch(() => {
      });
      return next;
    }
    return { say: say2, cancel };
  }

  // public/shared/audio.js
  var root = new URL(document.querySelector('meta[name="app-root"]')?.content || "../", document.baseURI);
  var unlocked = false;
  var deviceVoice = false;
  var muted = false;
  var activeMedia = null;
  var manifestPromise;
  var controls;
  var cue;
  var details;
  var notice;
  var continueButton;
  try {
    const saved = JSON.parse(localStorage.getItem("early-learning-sound-v1") || "{}");
    deviceVoice = saved.deviceVoice === true;
    muted = saved.muted === true;
  } catch {
  }
  var savePrefs = () => {
    try {
      localStorage.setItem("early-learning-sound-v1", JSON.stringify({ deviceVoice, muted }));
    } catch {
    }
  };
  var imported = /* @__PURE__ */ new Map();
  var pack = () => globalThis.__EARLY_AUDIO_PACK__ || {};
  var voices = () => globalThis.speechSynthesis?.getVoices?.().filter((v) => v.localService && /^en(?:-|$)/i.test(v.lang)) || [];
  async function manifest() {
    if (location.protocol === "file:") return new Set(Object.keys(pack()));
    if (!manifestPromise) manifestPromise = (async () => {
      const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 3e3);
      try {
        const r = await fetch(new URL("audio/manifest.json", root), { signal: controller.signal, credentials: "omit", redirect: "error" });
        if (!r.ok) return /* @__PURE__ */ new Set();
        const value = await r.json();
        return new Set(Array.isArray(value) ? value.filter((id) => Object.hasOwn(clips_default, id)) : []);
      } catch {
        return /* @__PURE__ */ new Set();
      } finally {
        clearTimeout(timer);
      }
    })();
    return manifestPromise;
  }
  function recorded(url, signal) {
    return new Promise((resolve) => {
      const media = new Audio(url);
      activeMedia = media;
      let finished = false, timer;
      const done = (ok) => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        media.pause();
        media.removeAttribute("src");
        media.load();
        signal.removeEventListener("abort", abort);
        media.onended = null;
        media.onerror = null;
        if (activeMedia === media) activeMedia = null;
        resolve(ok);
      };
      const abort = () => done(false);
      signal.addEventListener("abort", abort, { once: true });
      media.onended = () => done(true);
      media.onerror = () => done(false);
      timer = setTimeout(() => done(false), 1e4);
      if (signal.aborted) return done(false);
      media.play().catch(() => done(false));
    });
  }
  function speak(text, signal) {
    return new Promise((resolve) => {
      const voice = voices()[0];
      if (!unlocked || !voice || !globalThis.SpeechSynthesisUtterance) return resolve(false);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      let done = false, timer;
      const finish = (ok) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        signal.removeEventListener("abort", abort);
        resolve(ok);
      };
      const abort = () => {
        globalThis.speechSynthesis?.cancel();
        finish(false);
      };
      signal.addEventListener("abort", abort, { once: true });
      utterance.onend = () => finish(true);
      utterance.onerror = () => finish(false);
      timer = setTimeout(abort, 1e4);
      if (signal.aborted) return abort();
      globalThis.speechSynthesis.speak(utterance);
    });
  }
  function manualSound(signal) {
    return new Promise((resolve) => {
      continueButton.hidden = false;
      continueButton.disabled = false;
      const finish = (ok) => {
        continueButton.hidden = true;
        continueButton.removeEventListener("click", next);
        signal.removeEventListener("abort", abort);
        resolve(ok);
      };
      const next = () => finish(true), abort = () => finish(false);
      continueButton.addEventListener("click", next, { once: true });
      signal.addEventListener("abort", abort, { once: true });
      if (signal.aborted) return abort();
    });
  }
  function readingPause(text, signal) {
    return new Promise((resolve) => {
      const abort = () => {
        clearTimeout(timer);
        resolve(false);
      };
      const timer = setTimeout(() => {
        signal.removeEventListener("abort", abort);
        resolve(true);
      }, Math.min(2200, Math.max(800, text.length * 45)));
      signal.addEventListener("abort", abort, { once: true });
      if (signal.aborted) abort();
    });
  }
  var queue = createAudioQueue({ maxMs: null, play: async ({ id, text }, signal) => {
    const clip = clips_default[id];
    if (!clip) return false;
    if (cue) cue.textContent = clip.kind === "sound" ? clip.guidance : text || clip.text;
    if (muted) return true;
    let url = imported.get(id) || pack()[id];
    if (!url && unlocked && (await manifest()).has(id)) url = new URL(`audio/${id}.mp3`, root).href;
    if (signal.aborted) return false;
    if (url && unlocked && await recorded(url, signal)) return true;
    if (signal.aborted) return false;
    if (clip.kind === "sound") {
      if (details) details.open = true;
      if (notice) notice.textContent = "Model this sound aloud, then press Sound modelled. Each queued sound waits for you.";
      return manualSound(signal);
    }
    if (deviceVoice) {
      const ok = await speak(text || clip.text, signal);
      if (!ok && notice) notice.textContent = "No working local English voice is available. Read the cue aloud or add recordings.";
      if (ok) return true;
      return readingPause(text || clip.text, signal);
    }
    return readingPause(text || clip.text, signal);
  } });
  var cancelAudio = () => queue.cancel();
  var say = (id, text) => queue.say({ id, text });
  function installUnlock() {
    if (controls) return;
    controls = document.createElement("section");
    controls.className = "audio-controls";
    controls.setAttribute("aria-label", "Sound and adult help");
    details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = "Sound and grown-up help";
    details.append(summary);
    cue = document.createElement("p");
    cue.id = "audio-cue";
    cue.textContent = "Play together: an adult models letter sounds. Optional recordings can speak them for you.";
    details.append(cue);
    const note = document.createElement("p");
    note.textContent = "This copy has no recorded sound pack. Computer speech is optional for instructions and whole words; it cannot reliably model letter sounds. The cue below is for the grown-up.";
    details.insertBefore(note, cue);
    continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.textContent = "Sound modelled, continue";
    continueButton.hidden = true;
    details.append(continueButton);
    notice = document.createElement("p");
    notice.setAttribute("role", "status");
    details.append(notice);
    const label = document.createElement("label"), check = document.createElement("input");
    check.type = "checkbox";
    check.checked = deviceVoice;
    label.append(check, " Use a local device voice for instructions and words");
    check.addEventListener("change", () => {
      cancelAudio();
      deviceVoice = check.checked;
      savePrefs();
      unlocked = true;
      notice.textContent = deviceVoice ? voices().length ? "Local device voice enabled." : "No local English voice is currently available." : "Adult-led prompts enabled.";
    });
    details.append(label);
    const muteLabel = document.createElement("label"), mute = document.createElement("input");
    mute.type = "checkbox";
    mute.checked = muted;
    muteLabel.append(mute, " Mute sounds");
    mute.addEventListener("change", () => {
      muted = mute.checked;
      savePrefs();
      cancelAudio();
    });
    details.append(muteLabel);
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Choose your local recordings folder";
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.setAttribute("webkitdirectory", "");
    input.accept = ".mp3";
    inputLabel.append(input);
    details.append(inputLabel);
    input.addEventListener("change", () => {
      const files = [...input.files], chosen = /* @__PURE__ */ new Map();
      let bytes = 0;
      for (const file of files) {
        const id = file.name.replace(/\.mp3$/i, "");
        if (!/\.mp3$/i.test(file.name) || !Object.hasOwn(clips_default, id)) continue;
        if (chosen.has(id)) {
          notice.textContent = `Two files use the same clip ID: ${id}. Keep one and try again.`;
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          notice.textContent = "Keep each clip under 5 MB.";
          return;
        }
        bytes += file.size;
        chosen.set(id, file);
      }
      if (bytes > 100 * 1024 * 1024) {
        notice.textContent = "Keep the complete pack under 100 MB.";
        return;
      }
      cancelAudio();
      for (const url of imported.values()) URL.revokeObjectURL(url);
      imported.clear();
      for (const [id, file] of chosen) imported.set(id, URL.createObjectURL(file));
      unlocked = true;
      notice.textContent = `${imported.size} local clips loaded for this page only. Choose them again after reopening. Progress backups do not include recordings.`;
      input.value = "";
    });
    controls.append(details);
    document.body.append(controls);
    const unlock = () => {
      unlocked = true;
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("pagehide", () => {
      cancelAudio();
      for (const url of imported.values()) URL.revokeObjectURL(url);
      imported.clear();
    });
  }

  // <stdin>
  var GAMES = [{ href: "subitize/", icon: "\u{1F41E}", tint: "a", id: "menu-count", label: "How many?" }, { href: "blend/", icon: "\u{1F916}", tint: "b", id: "menu-blend", label: "Robot words" }, { href: "letters/", icon: "\u{1F33B}", tint: "c", id: "menu-letters", label: "Letter garden" }, { href: "path/", icon: "\u{1F430}", tint: "d", id: "menu-path", label: "Bunny hops" }];
  installUnlock();
  var navigating = false;
  var alive = true;
  window.addEventListener("pagehide", () => {
    alive = false;
    cancelAudio();
  });
  for (const game of GAMES) {
    const a = document.createElement("a");
    a.className = `tile tint-${game.tint}`;
    a.href = game.href;
    a.textContent = game.icon;
    a.setAttribute("aria-label", game.label);
    a.addEventListener("click", async (e) => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      if (navigating) return;
      navigating = true;
      await say(game.id, game.label);
      if (alive) location.href = game.href;
    });
    document.getElementById("menu").append(a);
  }
})();
