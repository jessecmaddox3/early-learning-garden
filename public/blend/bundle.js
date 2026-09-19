(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

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
    function say3(payload) {
      const parent = scope.signal;
      const next = tail.then(async () => {
        if (parent.aborted) return false;
        const current2 = new AbortController();
        let abort;
        const aborted = new Promise((resolve) => {
          abort = () => {
            current2.abort();
            resolve(false);
          };
          parent.addEventListener("abort", abort, { once: true });
        });
        const timeout = maxMs === null ? null : setTimeout(abort, maxMs);
        try {
          return await Promise.race([Promise.resolve().then(() => play(payload, current2.signal)).then((v) => !current2.signal.aborted && v !== false).catch(() => false), aborted]);
        } finally {
          clearTimeout(timeout);
          parent.removeEventListener("abort", abort);
        }
      });
      tail = next.catch(() => {
      });
      return next;
    }
    return { say: say3, cancel };
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
      const finish2 = (ok) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        signal.removeEventListener("abort", abort);
        resolve(ok);
      };
      const abort = () => {
        globalThis.speechSynthesis?.cancel();
        finish2(false);
      };
      signal.addEventListener("abort", abort, { once: true });
      utterance.onend = () => finish2(true);
      utterance.onerror = () => finish2(false);
      timer = setTimeout(abort, 1e4);
      if (signal.aborted) return abort();
      globalThis.speechSynthesis.speak(utterance);
    });
  }
  function manualSound(signal) {
    return new Promise((resolve) => {
      continueButton.hidden = false;
      continueButton.disabled = false;
      const finish2 = (ok) => {
        continueButton.hidden = true;
        continueButton.removeEventListener("click", next);
        signal.removeEventListener("abort", abort);
        resolve(ok);
      };
      const next = () => finish2(true), abort = () => finish2(false);
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
  var stretch = (letter) => clips_default["snd-" + letter]?.text || letter;
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
  var audioContext;
  function chime(kind = "good") {
    if (!unlocked || muted) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioContext ??= new Ctx();
      if (audioContext.state === "suspended") void audioContext.resume();
      for (const [i, hz] of (kind === "good" ? [523.25, 659.25, 783.99] : [329.63]).entries()) {
        const t = audioContext.currentTime + i * 0.09, osc = audioContext.createOscillator(), gain = audioContext.createGain();
        osc.frequency.setValueAtTime(hz, t);
        gain.gain.setValueAtTime(1e-4, t);
        gain.gain.exponentialRampToValueAtTime(0.08, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(1e-4, t + 0.32);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(t);
        osc.stop(t + 0.34);
      }
    } catch {
    }
  }

  // public/shared/progress-store.js
  var MAX_PROFILES = 8;
  var MAX_SNAPSHOT_BYTES = 1048576;
  var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var clone = (value) => structuredClone(value);
  var sameBinding = (a, b) => !!a && !!b && a.backend === b.backend && a.ownerId === b.ownerId && a.profileId === b.profileId;
  function validateBinding(value) {
    if (!value || !UUID.test(value.ownerId) || !UUID.test(value.profileId)) throw new TypeError("Invalid cloud profile.");
    const url = new URL(value.backend);
    if (url.protocol !== "https:" || url.origin !== value.backend || url.username || url.password) throw new TypeError("Invalid cloud destination.");
    return { backend: url.origin, ownerId: value.ownerId, profileId: value.profileId };
  }
  async function openProgressStore({ indexedDB = globalThis.indexedDB, dbName = "color-learning-v1", gameId, curriculumId, normalize }) {
    if (!indexedDB) throw new Error("This browser cannot save progress on this device.");
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const next = request.result;
        next.createObjectStore("profiles", { keyPath: "id" });
        next.createObjectStore("records", { keyPath: "key" });
        const recovery = next.createObjectStore("recovery", { keyPath: "id" });
        recovery.createIndex("profileId", "profileId");
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Close older tabs before updating saved progress."));
      request.onsuccess = () => resolve(request.result);
    });
    db.onversionchange = () => db.close();
    const keyFor = (id) => JSON.stringify([id, gameId, curriculumId]);
    const clean = (value) => {
      const next = normalize(clone(value));
      if (new TextEncoder().encode(JSON.stringify(next)).length > MAX_SNAPSHOT_BYTES) throw new Error("Progress is too large to save.");
      return next;
    };
    const remoteValue = (remote) => {
      if (remote === null) return null;
      if (!remote || !remote.snapshot || typeof remote.snapshot !== "object" || Array.isArray(remote.snapshot) || !Number.isSafeInteger(remote.revision) || remote.revision < 1 || !UUID.test(remote.writeId)) throw new TypeError("Invalid cloud progress.");
      return { snapshot: clean(remote.snapshot), revision: remote.revision, writeId: remote.writeId };
    };
    function transaction(names, mode, run) {
      return new Promise((resolve, reject) => {
        let tx, result, failure;
        try {
          tx = db.transaction(names, mode);
        } catch (error) {
          reject(error);
          return;
        }
        const fail = (error) => {
          failure = error;
          try {
            tx.abort();
          } catch {
          }
        };
        const guard = (fn) => (...args) => {
          try {
            fn(...args);
          } catch (error) {
            fail(error);
          }
        };
        const get = (name, id, then) => {
          const req = id === void 0 ? tx.objectStore(name).getAll() : tx.objectStore(name).get(id);
          req.onsuccess = guard(() => then(req.result));
        };
        tx.oncomplete = () => resolve(result);
        tx.onabort = () => reject(failure ?? tx.error ?? new Error("Progress was not saved."));
        tx.onerror = () => {
        };
        guard(run)({ tx, get, done: (value) => {
          result = value;
        }, guard });
      });
    }
    function preserve(tx, record2, snapshot, reason) {
      tx.objectStore("recovery").put({
        id: crypto.randomUUID(),
        profileId: record2.profileId,
        gameId,
        curriculumId,
        snapshot: clone(snapshot),
        reason,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function change(profileId, run) {
      return transaction(["records", "recovery"], "readwrite", ({ tx, get, done }) => {
        get("records", keyFor(profileId), (record2) => run(record2 ?? null, tx, done));
      });
    }
    const write = (tx, record2, done, status2 = "saved") => {
      tx.objectStore("records").put(record2);
      done({ status: status2, record: clone(record2) });
    };
    const requireRecord = (record2) => {
      if (!record2) throw new Error("This local profile no longer exists.");
    };
    function choose(record2, tx, remote, choice) {
      if (!["cloud", "device"].includes(choice)) throw new Error("Choose this device or cloud progress.");
      if (choice === "cloud") {
        if (!remote) throw new Error("There is no cloud progress to restore.");
        preserve(tx, record2, record2.snapshot, "Before restoring cloud progress");
        record2.snapshot = remote.snapshot;
      } else if (remote) preserve(tx, record2, remote.snapshot, "Cloud progress before keeping this device");
      record2.localRevision++;
      record2.remoteRevision = remote?.revision ?? 0;
      record2.inflight = null;
      record2.conflict = null;
      record2.needsUpload = choice === "device";
    }
    const api = {
      close: () => db.close(),
      listProfiles: () => transaction(["profiles"], "readonly", ({ get, done }) => get("profiles", void 0, (rows) => done(rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt))))),
      async createProfile(label, initialSnapshot) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new TypeError("Use a nickname of 1 to 60 characters.");
        const snapshot = clean(initialSnapshot);
        return transaction(["profiles", "records"], "readwrite", ({ tx, get, done }) => {
          get("profiles", void 0, (profiles) => {
            if (profiles.length >= MAX_PROFILES) throw new Error("This device has eight profiles. Export and remove one before adding another.");
            const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
            tx.objectStore("profiles").put(profile2);
            tx.objectStore("records").put({ key: keyFor(profile2.id), profileId: profile2.id, gameId, curriculumId, snapshot, localRevision: 1, binding: null, remoteRevision: 0, inflight: null, conflict: null, needsUpload: false });
            done(profile2);
          });
        });
      },
      load: (profileId) => transaction(["records"], "readonly", ({ get, done }) => get("records", keyFor(profileId), (record2) => done(record2 ?? null))),
      save(profileId, snapshot, expectedRevision) {
        const value = clean(snapshot);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            preserve(tx, record2, value, "Another tab saved first");
            done({ status: "local-conflict", record: record2 });
            return;
          }
          record2.snapshot = value;
          record2.localRevision++;
          record2.needsUpload = !!record2.binding;
          write(tx, record2, done);
        });
      },
      attach(profileId, binding, expectedRevision, remote, choice) {
        const safeBinding = validateBinding(binding);
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          choose(record2, tx, safeRemote, choice);
          record2.binding = safeBinding;
          write(tx, record2, done);
        });
      },
      beginFlush(profileId, binding) {
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.conflict || !record2.inflight && !record2.needsUpload) {
            done(null);
            return;
          }
          if (!record2.inflight) record2.inflight = {
            writeId: crypto.randomUUID(),
            localRevision: record2.localRevision,
            expectedRemoteRevision: record2.remoteRevision,
            snapshot: clone(record2.snapshot)
          };
          tx.objectStore("records").put(record2);
          done(clone(record2));
        });
      },
      acknowledge(profileId, binding, writeId, remoteRevision) {
        if (!Number.isSafeInteger(remoteRevision) || remoteRevision < 1) throw new TypeError("Invalid saved revision.");
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (remoteRevision !== record2.inflight.expectedRemoteRevision + 1) throw new Error("Unexpected cloud revision. Progress remains queued.");
          record2.remoteRevision = remoteRevision;
          record2.needsUpload = record2.localRevision !== record2.inflight.localRevision;
          record2.inflight = null;
          record2.conflict = null;
          write(tx, record2, done);
        });
      },
      markConflict(profileId, binding, writeId, remote) {
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (safeRemote && record2.conflict?.remote && safeRemote.revision < record2.conflict.remote.revision) {
            done({ status: "stale" });
            return;
          }
          if (JSON.stringify(record2.conflict?.remote) === JSON.stringify(safeRemote)) {
            done({ status: "cloud-conflict", record: record2 });
            return;
          }
          record2.conflict = { id: crypto.randomUUID(), remote: safeRemote };
          write(tx, record2, done, "cloud-conflict");
        });
      },
      resolveConflict(profileId, binding, expectedRevision, choice, expectedConflictId) {
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (!sameBinding(record2.binding, binding) || !record2.conflict) {
            done({ status: "stale" });
            return;
          }
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          if (!expectedConflictId || record2.conflict.id !== expectedConflictId) {
            done({ status: "stale", record: record2 });
            return;
          }
          choose(record2, tx, record2.conflict.remote, choice);
          write(tx, record2, done);
        });
      },
      listRecovery: (profileId) => transaction(["recovery"], "readonly", ({ tx, done, guard }) => {
        const request = tx.objectStore("recovery").index("profileId").getAll(profileId);
        request.onsuccess = guard(() => done(request.result.filter((row) => row.gameId === gameId && row.curriculumId === curriculumId).sort((a, b) => b.createdAt.localeCompare(a.createdAt))));
      }),
      removeProfile: (profileId) => transaction(["profiles", "records", "recovery"], "readwrite", ({ tx, get, done }) => {
        tx.objectStore("profiles").delete(profileId);
        get("records", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("records").delete(row.key);
        });
        get("recovery", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("recovery").delete(row.id);
        });
        done(void 0);
      })
    };
    return api;
  }

  // public/shared/memory-store.js
  function createMemoryStore(normalize) {
    const profiles = /* @__PURE__ */ new Map(), records = /* @__PURE__ */ new Map();
    return {
      close() {
      },
      async listProfiles() {
        return [...profiles.values()].map((value) => structuredClone(value));
      },
      async createProfile(label, snapshot) {
        if (profiles.size >= 8) throw new Error("There are already eight profiles in this session.");
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new Error("Use a nickname of 1 to 60 characters.");
        const value = normalize(snapshot);
        const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        profiles.set(profile2.id, profile2);
        records.set(profile2.id, { profileId: profile2.id, snapshot: value, localRevision: 1, binding: null, needsUpload: false, conflict: null });
        return structuredClone(profile2);
      },
      async load(id) {
        return structuredClone(records.get(id) ?? null);
      },
      async save(id, snapshot, expectedRevision) {
        const record2 = records.get(id);
        if (!record2) throw new Error("This local profile no longer exists.");
        if (record2.localRevision !== expectedRevision) return { status: "local-conflict", record: structuredClone(record2) };
        record2.snapshot = normalize(snapshot);
        record2.localRevision++;
        return { status: "saved", record: structuredClone(record2) };
      },
      async listRecovery() {
        return [];
      },
      async removeProfile(id) {
        profiles.delete(id);
        records.delete(id);
      }
    };
  }

  // public/shared/cloud-config.js
  var CloudError = class extends Error {
    constructor(code, message2) {
      super(message2);
      this.name = "CloudError";
      this.code = code;
    }
  };
  function parseCloudConfig(raw) {
    if (!raw || raw.enabled !== true) return null;
    let url;
    try {
      url = new URL(raw.url);
    } catch {
      throw new CloudError("configuration", "Cloud saves need a valid HTTPS address in the host configuration.");
    }
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
      throw new CloudError("configuration", "Cloud saves need an HTTPS origin without a path, password or query.");
    }
    if (typeof raw.publishableKey !== "string" || !/^sb_publishable_[A-Za-z0-9_-]{20,}$/.test(raw.publishableKey)) {
      throw new CloudError("configuration", "Cloud saves need a Supabase publishable key. Secret keys and legacy keys are not accepted.");
    }
    const label = typeof raw.label === "string" && raw.label.trim() ? raw.label.trim().slice(0, 60) : "This host\u2019s cloud saves";
    return Object.freeze({ backend: url.origin, publishableKey: raw.publishableKey, label });
  }

  // public/shared/cloud-transport.js
  var UUID2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var PROFILE_FIELDS = "owner_id,id,label";
  var SAVE_FIELDS = "owner_id,profile_id,game_id,curriculum_id,format_version,snapshot,revision,write_id";
  var stale = () => new CloudError("disconnected", "Cloud saves are disconnected. Your device progress stays here.");
  function safeError(error) {
    if (error instanceof CloudError) return error;
    if (error?.code === "otp_expired") return new CloudError("invalid-code", "That code is incorrect or expired. Check it or request a new code.");
    if (Number(error?.status) === 429) return new CloudError("rate-limit", "Too many sign-in attempts. Wait a little before trying again.");
    if ([401, 403].includes(Number(error?.status))) return new CloudError("auth-required", "Sign in again to finish saving. Your device progress is safe.");
    return new CloudError("unavailable", "Cloud saves are unavailable. Your device progress is still saved here; try again later.");
  }
  function createCloudConnection(config, {
    gameId,
    curriculumId,
    normalize,
    loadSDK = () => import("../vendor/supabase.js"),
    nativeFetch = globalThis.fetch.bind(globalThis),
    onStatus = () => {
    }
  } = {}) {
    config = parseCloudConfig({ enabled: true, url: config?.backend, publishableKey: config?.publishableKey, label: config?.label });
    let active = true, client = null, subscription = null, ownerId = null, email = null;
    let loginBusy = false, resendAfter = 0, authLost = false;
    const lifetime = new AbortController();
    const assertActive = () => {
      if (!active) throw stale();
    };
    const publishStatus = (status2) => {
      if (active) {
        try {
          onStatus(status2);
        } catch {
        }
      }
    };
    const dispose = () => {
      subscription?.unsubscribe();
      client?.auth.dispose();
    };
    const disconnect = () => {
      if (!active) return;
      active = false;
      lifetime.abort();
      ownerId = null;
      email = null;
      dispose();
    };
    const guardedFetch = async (input, init = {}) => {
      assertActive();
      const target = new URL(typeof input === "string" || input instanceof URL ? input : input.url);
      if (target.origin !== config.backend || !/^\/(auth|rest)\/v1\//.test(target.pathname)) {
        throw new CloudError("configuration", "Cloud request destination was rejected.");
      }
      const signals = [lifetime.signal, init.signal, typeof input === "object" ? input.signal : null].filter(Boolean);
      const response = await nativeFetch(input, { ...init, signal: AbortSignal.any(signals), credentials: "omit", redirect: "error" });
      assertActive();
      return response;
    };
    const ready = (async () => {
      try {
        const { createClient } = await loadSDK();
        assertActive();
        client = createClient(config.backend, config.publishableKey, {
          auth: { persistSession: false, detectSessionInUrl: false, autoRefreshToken: false, debug: false, storageKey: `learning-cloud-${crypto.randomUUID()}` },
          db: { retry: false },
          global: { fetch: guardedFetch }
        });
        const result = await client.auth.initialize();
        assertActive();
        if (result.error) throw result.error;
        await client.auth.stopAutoRefresh();
        assertActive();
        subscription = client.auth.onAuthStateChange((_event, session) => {
          if (!active || !ownerId) return;
          if (session && session.user.id !== ownerId) {
            disconnect();
            return;
          }
          if (!session) {
            authLost = true;
            publishStatus("auth-required");
          }
        }).data.subscription;
      } catch (error) {
        if (!active) {
          dispose();
          throw stale();
        }
        disconnect();
        throw safeError(error);
      }
    })();
    ready.catch(() => {
    });
    async function call(operation, requiresOwner = true) {
      try {
        await ready;
        assertActive();
        if (requiresOwner && (!ownerId || authLost)) throw new CloudError("auth-required", "Sign in to use cloud saves.");
        const result = await operation(client);
        assertActive();
        if (result?.error) throw result.error;
        return result?.data;
      } catch (error) {
        if (!active) throw stale();
        throw safeError(error);
      }
    }
    const owned = (binding) => {
      const value = validateBinding(binding);
      assertActive();
      if (value.backend !== config.backend || value.ownerId !== ownerId || authLost) throw new CloudError("auth-required", "Sign in to the original account and cloud destination for this profile.");
      return value;
    };
    const profileValue = (row) => {
      if (!row || row.owner_id !== ownerId || !UUID2.test(row.id) || typeof row.label !== "string" || !row.label.trim() || row.label.length > 60) throw new CloudError("invalid", "The cloud returned an invalid learner profile.");
      return { id: row.id, label: row.label };
    };
    const cleanSnapshot = (snapshot) => {
      let clean;
      try {
        clean = normalize(structuredClone(snapshot));
      } catch {
        throw new CloudError("invalid", "This cloud progress needs a different app version or a recovery export.");
      }
      if (new TextEncoder().encode(JSON.stringify(clean)).length > 1048576) throw new CloudError("invalid", "Cloud progress is too large to load safely.");
      return clean;
    };
    function remoteValue(row, binding) {
      if (row === null) return null;
      if (!row || !row.snapshot || typeof row.snapshot !== "object" || Array.isArray(row.snapshot) || !Number.isInteger(row.format_version) || row.owner_id !== binding.ownerId || row.profile_id !== binding.profileId || row.game_id !== gameId || row.curriculum_id !== curriculumId || !Number.isSafeInteger(row.revision) || row.revision < 1 || !UUID2.test(row.write_id) || row.format_version !== row.snapshot.formatVersion) throw new CloudError("invalid", "The cloud returned an unexpected learning record.");
      return { snapshot: cleanSnapshot(row.snapshot), revision: row.revision, writeId: row.write_id };
    }
    const filtered = (query, binding) => query.eq("owner_id", binding.ownerId).eq("profile_id", binding.profileId).eq("game_id", gameId).eq("curriculum_id", curriculumId);
    async function read(binding) {
      owned(binding);
      const data = await call((sdk) => filtered(sdk.from("learning_saves").select(SAVE_FIELDS), binding).maybeSingle());
      owned(binding);
      return remoteValue(data, binding);
    }
    function reconcile(remote, inflight) {
      if (remote?.writeId === inflight.writeId) {
        if (remote.revision !== inflight.expectedRemoteRevision + 1 || JSON.stringify(remote.snapshot) !== JSON.stringify(inflight.snapshot)) throw new CloudError("invalid", "The cloud acknowledgement does not match this saved attempt.");
        return { status: "saved", remote };
      }
      if ((remote?.revision ?? 0) !== inflight.expectedRemoteRevision) return { status: "conflict", remote };
      return null;
    }
    return {
      ready,
      disconnect,
      get active() {
        return active;
      },
      get ownerId() {
        return ownerId;
      },
      get backend() {
        return config.backend;
      },
      owns: (binding) => active && !authLost && !!ownerId && binding?.backend === config.backend && binding.ownerId === ownerId,
      async sendCode(address) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (typeof address !== "string" || address.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.trim())) throw new CloudError("invalid", "Enter an adult email address.");
        const next = address.trim();
        if (email && email !== next) throw new CloudError("new-connection", "Cancel this sign-in before changing the email address.");
        if (ownerId) throw new CloudError("new-connection", "Disconnect before signing in to another account.");
        if (Date.now() < resendAfter) throw new CloudError("cooldown", "Wait one minute before requesting another code.");
        loginBusy = true;
        email = next;
        try {
          await call((sdk) => sdk.auth.signInWithOtp({ email: next, options: { shouldCreateUser: true } }), false);
          resendAfter = Date.now() + 6e4;
        } finally {
          loginBusy = false;
        }
      },
      async verifyCode(code) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (!email || !/^\d{6,10}$/.test(code)) throw new CloudError("invalid", "Enter the code from your email.");
        loginBusy = true;
        const sentTo = email;
        try {
          const data = await call((sdk) => sdk.auth.verifyOtp({ email: sentTo, token: code, type: "email" }), false);
          if (!data?.session || !UUID2.test(data.user?.id) || data.session.user?.id !== data.user.id) throw new CloudError("invalid", "Sign-in did not return a valid account.");
          ownerId = data.user.id;
          authLost = false;
          email = null;
          return ownerId;
        } finally {
          loginBusy = false;
        }
      },
      async listProfiles() {
        const data = await call((sdk) => sdk.from("learning_profiles").select(PROFILE_FIELDS).eq("owner_id", ownerId).order("created_at"));
        if (!Array.isArray(data)) throw new CloudError("invalid", "The cloud returned an invalid learner list.");
        return data.map(profileValue);
      },
      async createProfile(label) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new CloudError("invalid", "Use a nickname of 1 to 60 characters.");
        const data = await call((sdk) => sdk.from("learning_profiles").insert({ owner_id: ownerId, label: label.trim() }).select(PROFILE_FIELDS).single());
        return profileValue(data);
      },
      read,
      async write(binding, inflight) {
        owned(binding);
        if (!inflight || !UUID2.test(inflight.writeId) || !Number.isSafeInteger(inflight.expectedRemoteRevision) || inflight.expectedRemoteRevision < 0) throw new CloudError("invalid", "Invalid pending cloud save.");
        const snapshot = cleanSnapshot(inflight.snapshot);
        const attempt = { ...inflight, snapshot };
        const existing = await read(binding);
        const recovered = reconcile(existing, attempt);
        if (recovered) return recovered;
        const payload = { snapshot, format_version: snapshot.formatVersion, write_id: attempt.writeId };
        const outcome = await call(async (sdk) => {
          const result2 = attempt.expectedRemoteRevision === 0 ? await sdk.from("learning_saves").insert({ ...payload, owner_id: binding.ownerId, profile_id: binding.profileId, game_id: gameId, curriculum_id: curriculumId }).select(SAVE_FIELDS) : await filtered(sdk.from("learning_saves").update(payload), binding).eq("revision", attempt.expectedRemoteRevision).select(SAVE_FIELDS);
          if (result2.error?.code === "23505") return { data: [] };
          return result2;
        });
        owned(binding);
        if (!Array.isArray(outcome) || outcome.length > 1) throw new CloudError("invalid", "The cloud returned an unexpected save response.");
        const remote = outcome.length === 1 ? remoteValue(outcome[0], binding) : await read(binding);
        const result = reconcile(remote, attempt);
        if (result) return result;
        throw new CloudError("unavailable", "This save was not acknowledged. It stays queued on this device.");
      }
    };
  }
  async function flushOne(store2, profileId, connection) {
    const record2 = await store2.load(profileId);
    if (!record2 || !connection.owns(record2.binding)) return { status: "disconnected" };
    const pending2 = await store2.beginFlush(profileId, record2.binding);
    if (!pending2) return { status: record2.conflict ? "cloud-conflict" : "idle" };
    if (!connection.owns(pending2.binding)) return { status: "disconnected" };
    const result = await connection.write(pending2.binding, pending2.inflight);
    if (!connection.owns(pending2.binding)) return { status: "disconnected" };
    if (result.status === "saved") return store2.acknowledge(profileId, pending2.binding, pending2.inflight.writeId, result.remote.revision);
    return store2.markConflict(profileId, pending2.binding, pending2.inflight.writeId, result.remote);
  }

  // public/shared/cloud-panel.js
  function createCloudPanel(root2, options) {
    const { store: store2, durable: durable2, normalize, curriculumId, gameId, configURL, helpURL, getProfile, isBusy, onChange, onRestore, onProfilesCleared, onMessage, describe } = options;
    let config = null, connection = null, generation = 0, view = 0, timer = null, failures = 0, running = null;
    const status2 = document.createElement("p");
    status2.setAttribute("role", "status");
    status2.className = "cloud-status";
    const content = document.createElement("div");
    root2.append(content, status2);
    const say3 = (text) => {
      status2.textContent = text;
    };
    const paragraph = (text) => {
      const p = document.createElement("p");
      p.textContent = text;
      content.append(p);
      return p;
    };
    function button2(label, action, parent = content) {
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.textContent = label;
      button3.addEventListener("click", async () => {
        if (button3.disabled) return;
        button3.disabled = true;
        try {
          await action();
        } catch (error) {
          if (error.code !== "disconnected") say3(error.message || "That action could not be completed. Your progress is still here.");
        } finally {
          button3.disabled = false;
        }
      });
      parent.append(button3);
      return button3;
    }
    function retire2() {
      generation++;
      view++;
      clearTimeout(timer);
      timer = null;
      failures = 0;
      running = null;
      connection?.disconnect();
      connection = null;
    }
    const alive = (original, token2) => connection === original && generation === token2 && original.active;
    function localActionsAllowed() {
      if (isBusy()) {
        say3("Finish the current answer or export unsaved progress before changing cloud profiles.");
        return false;
      }
      return true;
    }
    async function flush() {
      const selected = getProfile(), original = connection, token2 = generation;
      if (!selected || !original?.ownerId) return;
      if (running?.token === token2) {
        running.again = true;
        return;
      }
      const work = { token: token2 };
      running = work;
      try {
        for (let i = 0; i < 8 && alive(original, token2); i++) {
          const result = await flushOne(store2, selected.id, original);
          if (!alive(original, token2)) return;
          if (result.status !== "saved") break;
        }
        if (!alive(original, token2)) return;
        failures = 0;
        await onChange();
        const record2 = await store2.load(selected.id);
        if (!alive(original, token2)) return;
        if (record2?.conflict) say3("Another device changed this learner. Choose which progress to keep below.");
        else if (record2 && original.owns(record2.binding) && !record2.needsUpload) say3("Cloud saved. Your copy also stays on this device.");
        if (root2.closest("dialog")?.open) await renderConnected();
        if (record2?.needsUpload && !record2.conflict && original.owns(record2.binding)) queue2(1e3);
      } catch (error) {
        if (!alive(original, token2)) return;
        say3(error.message);
        await onChange();
        if (error.code === "unavailable" && failures < 5) {
          failures++;
          queue2(Math.min(6e4, 2e3 * 2 ** failures) + Math.floor(Math.random() * 500));
        }
      } finally {
        if (running === work) {
          running = null;
          if (work.again && alive(original, token2)) queue2();
        }
      }
    }
    function queue2(delay = 0) {
      if (!connection?.ownerId) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        void flush();
      }, delay);
    }
    function initial() {
      content.replaceChildren();
      paragraph("Cloud saves are optional. Play and save on this device without an account.");
      if (!durable2) {
        paragraph("Cloud saves need working browser storage. This session can be exported instead.");
        return;
      }
      if (location.protocol === "file:") {
        paragraph("This downloaded copy works offline. To save across devices, use a hosted copy whose owner has set up cloud saves. You can also move progress with Export and Import.");
        return;
      }
      button2("Explore cloud saves", async () => {
        const token2 = ++view;
        say3("Checking this host\u2019s cloud configuration\u2026");
        try {
          const response = await fetch(configURL, { credentials: "omit", redirect: "error", cache: "no-store" });
          if (token2 !== view) return;
          if (!response.ok) {
            say3("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          const text = await response.text();
          if (text.length > 16384) throw new Error("This host\u2019s cloud configuration is too large.");
          config = parseCloudConfig(JSON.parse(text));
          if (token2 !== view) return;
          if (!config) {
            say3("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          renderLogin();
        } catch (error) {
          say3(error.code === "configuration" ? error.message : "This host\u2019s cloud configuration could not be loaded. Device saves still work.");
        }
      });
      const help = document.createElement("a");
      help.href = helpURL;
      help.textContent = "Cloud setup instructions for the host";
      content.append(help);
    }
    function renderLogin() {
      content.replaceChildren();
      view++;
      paragraph(`${config.label}: ${config.backend}`);
      paragraph("An adult can sign in by email code. Continuing creates an account if needed. Only learner nicknames and learning progress you choose are uploaded. Your email goes to this cloud provider for sign-in.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Adult email";
      label.htmlFor = "cloud-email";
      const input = document.createElement("input");
      input.id = "cloud-email";
      input.type = "email";
      input.required = true;
      input.maxLength = 254;
      input.autocomplete = "email";
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Email me a code";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled) return;
        submit.disabled = true;
        retire2();
        const token2 = generation;
        const original = createCloudConnection(config, { gameId, curriculumId, normalize, onStatus: (value) => {
          if (value === "auth-required") say3("Sign in again to finish saving.");
        } });
        connection = original;
        const address = input.value.trim();
        try {
          await original.sendCode(address);
          if (alive(original, token2)) renderCode(original, token2, address);
        } catch (error) {
          if (alive(original, token2)) say3(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button2("Cancel cloud sign-in", () => {
        retire2();
        config = null;
        initial();
        say3("Cloud sign-in cancelled. Local progress stays on this device.");
      });
      say3("No cloud account is needed to play locally.");
    }
    function renderCode(original, token2, address) {
      content.replaceChildren();
      view++;
      paragraph("Check the adult email inbox for a sign-in code. Leave this page open while you check.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Email code";
      label.htmlFor = "cloud-code";
      const input = document.createElement("input");
      input.id = "cloud-code";
      input.required = true;
      input.inputMode = "numeric";
      input.autocomplete = "one-time-code";
      input.pattern = "[0-9]{6,10}";
      input.maxLength = 10;
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Sign in";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled || !alive(original, token2)) return;
        submit.disabled = true;
        try {
          await original.verifyCode(input.value.trim());
          if (alive(original, token2)) {
            input.value = "";
            await renderConnected();
            queue2();
          }
        } catch (error) {
          if (alive(original, token2)) say3(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button2("Send a new code", async () => {
        await original.sendCode(address);
        if (alive(original, token2)) say3("A new code was requested. Check your email.");
      });
      button2("Cancel or change email", () => {
        retire2();
        renderLogin();
      });
      say3("Codes may take a moment to arrive. You can request another after one minute.");
      input.focus();
    }
    async function renderConnected() {
      if (!connection?.ownerId) return;
      const original = connection, token2 = generation, rendering = ++view;
      content.replaceChildren();
      paragraph(`Connected to ${config.label} (${config.backend}).`);
      paragraph("Disconnect ends this browser connection. Downloaded progress stays on this device until you remove it. Sign in again when you want to resume cloud saving.");
      button2("Disconnect cloud saves", () => {
        retire2();
        initial();
        say3("Disconnected. Downloaded progress and waiting saves remain on this device.");
      });
      button2("Retry cloud saving", async () => {
        failures = 0;
        queue2();
      });
      button2("Remove this account\u2019s downloaded learners", async () => {
        if (!localActionsAllowed() || !confirm("Remove this account\u2019s downloaded learners and recovery copies from this device? Cloud copies will remain. Export any backups first.")) return;
        const profiles = await store2.listProfiles();
        for (const profile2 of profiles) {
          const record2 = await store2.load(profile2.id);
          if (!alive(original, token2)) return;
          if (original.owns(record2?.binding)) await store2.removeProfile(profile2.id);
        }
        if (!alive(original, token2)) return;
        await onProfilesCleared();
        await renderConnected();
        say3("Downloaded learners for this account were removed from this device. Cloud copies remain.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token2) || rendering !== view) return;
        paragraph(`Current local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        if (local.conflict && original.owns(local.binding)) {
          const remote = local.conflict.remote;
          paragraph(remote ? `Another device saved: ${describe(remote.snapshot)}. No versions have been merged.` : "The cloud copy is missing. Your device copy remains available.");
          for (const choice of remote ? ["device", "cloud"] : ["device"]) {
            button2(choice === "device" ? "Keep this device\u2019s progress" : "Use the cloud progress shown above", async () => {
              if (!localActionsAllowed()) return;
              const result = await store2.resolveConflict(selected.id, local.binding, local.localRevision, choice, local.conflict.id);
              if (!alive(original, token2)) return;
              await onChange({ source: "cloud-action" });
              await renderConnected();
              if (result.status === "saved") {
                say3("Your choice was saved. A recovery copy keeps the other version.");
                queue2();
              } else say3("Progress changed while this choice was open. Review the latest versions before choosing again.");
            });
          }
        }
        button2(`Save ${selected.label} as a new cloud learner`, async () => {
          if (!localActionsAllowed()) return;
          const current2 = await store2.load(selected.id);
          if (!alive(original, token2)) return;
          const remoteProfile = await original.createProfile(selected.label);
          if (!alive(original, token2)) return;
          const result = await store2.attach(selected.id, { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id }, current2.localRevision, null, "device");
          if (!alive(original, token2)) return;
          await onChange({ source: "cloud-action" });
          await renderConnected();
          if (result.status === "saved") queue2();
          else say3("The local learner changed during setup. Select the new cloud learner below to review and attach it.");
        });
      }
      try {
        const profiles = await original.listProfiles();
        if (!alive(original, token2) || rendering !== view) return;
        paragraph(profiles.length ? "Choose an existing cloud learner to preview or restore. Matching nicknames do not merge learners." : "This account has no cloud learners yet. Choose a local learner, then save it to cloud.");
        for (const remoteProfile of profiles) button2(`Preview ${remoteProfile.label}`, () => preview(original, token2, remoteProfile));
      } catch (error) {
        if (alive(original, token2)) say3(error.message);
      }
    }
    async function preview(original, token2, remoteProfile) {
      const rendering = ++view;
      const binding = { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id };
      const remote = await original.read(binding);
      if (!alive(original, token2) || rendering !== view) return;
      content.replaceChildren();
      paragraph(`Cloud learner: ${remoteProfile.label}.`);
      paragraph(remote ? `${describe(remote.snapshot)}. Local progress is replaced only if you choose that below.` : "This cloud learner has no saved progress yet.");
      if (remote) button2("Restore as a new local learner", async () => {
        if (!localActionsAllowed()) return;
        const learner = await store2.createProfile(remoteProfile.label, remote.snapshot);
        if (!alive(original, token2)) {
          await store2.removeProfile(learner.id);
          return;
        }
        await store2.attach(learner.id, binding, 1, remote, "cloud");
        if (!alive(original, token2)) return;
        await onRestore(learner);
        say3("Cloud progress restored. A copy now lives on this device too.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token2) || rendering !== view) return;
        paragraph(`Local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        for (const choice of remote ? ["cloud", "device"] : ["device"]) {
          button2(choice === "cloud" ? `Use cloud progress for ${selected.label}` : `Use ${selected.label}\u2019s progress for this cloud learner`, async () => {
            if (!localActionsAllowed()) return;
            const result = await store2.attach(selected.id, binding, local.localRevision, remote, choice);
            if (!alive(original, token2)) return;
            await onChange({ source: "cloud-action" });
            await renderConnected();
            if (result.status === "saved") {
              say3("Your choice was saved. The other version is available in a recovery export.");
              queue2();
            } else say3("The local learner changed. Preview again before choosing a version.");
          });
        }
      }
      button2("Back to cloud learners", renderConnected);
      button2("Disconnect cloud saves", () => {
        retire2();
        initial();
        say3("Disconnected. Local copies remain on this device.");
      });
    }
    initial();
    window.addEventListener("online", () => {
      failures = 0;
      queue2();
    });
    return { queue: queue2, renderConnected, disconnect: () => {
      retire2();
      initial();
    } };
  }

  // public/shared/bank.js
  var WORDS = [
    {
      "w": "sun",
      "letters": [
        "s",
        "u",
        "n"
      ],
      "pic": "\u2600\uFE0F",
      "stage": 1
    },
    {
      "w": "man",
      "letters": [
        "m",
        "a",
        "n"
      ],
      "pic": "\u{1F9CD}",
      "stage": 1
    },
    {
      "w": "fan",
      "letters": [
        "f",
        "a",
        "n"
      ],
      "pic": "\u{1FAAD}",
      "stage": 1
    },
    {
      "w": "mom",
      "letters": [
        "m",
        "o",
        "m"
      ],
      "pic": "\u{1F469}",
      "stage": 1
    },
    {
      "w": "net",
      "letters": [
        "n",
        "e",
        "t"
      ],
      "pic": "\u{1F945}",
      "stage": 2
    },
    {
      "w": "sat",
      "letters": [
        "s",
        "a",
        "t"
      ],
      "pic": "\u{1FA91}",
      "stage": 2
    },
    {
      "w": "map",
      "letters": [
        "m",
        "a",
        "p"
      ],
      "pic": "\u{1F5FA}\uFE0F",
      "stage": 2
    },
    {
      "w": "fox",
      "letters": [
        "f",
        "o",
        "x"
      ],
      "pic": "\u{1F98A}",
      "stage": 2
    },
    {
      "w": "pig",
      "letters": [
        "p",
        "i",
        "g"
      ],
      "pic": "\u{1F437}",
      "stage": 3
    },
    {
      "w": "bug",
      "letters": [
        "b",
        "u",
        "g"
      ],
      "pic": "\u{1F41B}",
      "stage": 3
    },
    {
      "w": "cat",
      "letters": [
        "c",
        "a",
        "t"
      ],
      "pic": "\u{1F408}",
      "stage": 3
    },
    {
      "w": "dog",
      "letters": [
        "d",
        "o",
        "g"
      ],
      "pic": "\u{1F415}",
      "stage": 3
    }
  ];
  var WAVES = [["m", "s", "a", "t"], ["n", "p", "i"], ["f", "d", "o"], ["l", "h", "e", "g"], ["r", "b", "u", "c"]];

  // public/shared/snapshot.js
  var CURRICULA = Object.freeze({ subitize: "quantities-6-v1", blend: "words-12-v1", letters: "letters-18-v1", path: "path-10-v1" });
  var SESSION_ROUNDS = Object.freeze({ subitize: 8, blend: 6, letters: 8, path: 6 });
  var object = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  var count = (v) => Number.isSafeInteger(v) && v >= 0 && v <= 1e6 ? v : 0;
  var bounded = (v, min, max, fallback) => Number.isInteger(v) && v >= min && v <= max ? v : fallback;
  var keys = { subitize: Array.from({ length: 6 }, (_, i) => `n${i + 1}`), blend: WORDS.map((w) => w.w), letters: WAVES.flat(), path: Array.from({ length: 9 }, (_, i) => `to${i + 2}`) };
  function cleanProgress(game2, value) {
    if (!CURRICULA[game2]) throw new TypeError("Unknown game.");
    const raw = object(value) ? value : {};
    const items = {};
    for (const key of Object.keys(object(raw.items) ? raw.items : {}).sort()) {
      if (!keys[game2].includes(key) || !object(raw.items[key])) continue;
      const v = raw.items[key], attempts = count(v.attempts), correct = Math.min(attempts, count(v.correct)), streak = Math.min(correct, count(v.streak));
      items[key] = { attempts, correct, streak, mastered: streak >= (game2 === "path" ? 2 : 3) };
    }
    const round = bounded(raw.round, 0, SESSION_ROUNDS[game2], 0);
    return { formatVersion: 1, level: bounded(raw.level, 1, 3, 1), stage: bounded(raw.stage, 1, 3, 1), wave: bounded(raw.wave, 0, 4, 0), round, stickers: Math.min(count(raw.stickers), SESSION_ROUNDS[game2]), streak: count(raw.streak), finished: raw.finished === true || round === SESSION_ROUNDS[game2], items };
  }
  function normalizeSnapshot(game2, value) {
    if (!object(value) || value.formatVersion !== 1) throw new TypeError("This saved progress needs a different app version. Keep a recovery export.");
    return cleanProgress(game2, value);
  }
  function exportSnapshot(game2, label, snapshot) {
    return { app: "early-learning-garden", game: game2, curriculum: CURRICULA[game2], version: 1, label, snapshot: normalizeSnapshot(game2, snapshot) };
  }
  function importSnapshot(game2, value) {
    if (!object(value) || value.app !== "early-learning-garden" || value.game !== game2 || value.curriculum !== CURRICULA[game2] || value.version !== 1) throw new TypeError("That backup belongs to another game or app version.");
    if (typeof value.label !== "string" || !value.label.trim() || value.label.trim().length > 60) throw new TypeError("A backup needs a nickname of 1 to 60 characters.");
    return { label: value.label.trim(), snapshot: normalizeSnapshot(game2, value.snapshot) };
  }

  // public/shared/progress.js
  var game;
  var store;
  var profile;
  var record;
  var live;
  var cloud;
  var durable = true;
  var pending = 0;
  var retired = false;
  var saveTail = Promise.resolve();
  var message;
  var dialog;
  var profileList;
  var loading = false;
  var selectionEpoch = 0;
  var importEpoch = 0;
  var recoveryMode = false;
  var recoveryRaw = null;
  var exportButton;
  var modalMessage;
  var lastMessage = "";
  var title = { subitize: "How Many?", blend: "Robot Words", letters: "Letter Garden", path: "Bunny Hops" };
  var el = (tag, text) => {
    const n = document.createElement(tag);
    if (text) n.textContent = text;
    return n;
  };
  function download(value, name) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
    const a = el("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function retire(text) {
    retired = true;
    cloud?.disconnect();
    document.querySelector("#gameplay").inert = true;
    document.dispatchEvent(new Event("progress-retired"));
    say2(text);
  }
  function remember(id) {
    try {
      sessionStorage.setItem(`early-learning-garden-${game}-profile`, id);
    } catch {
    }
  }
  function remembered() {
    try {
      return sessionStorage.getItem(`early-learning-garden-${game}-profile`);
    } catch {
      return null;
    }
  }
  function say2(text) {
    lastMessage = text;
    if (dialog?.open) {
      message.textContent = "";
      modalMessage.textContent = text;
    } else {
      message.textContent = text;
      if (modalMessage) modalMessage.textContent = "";
    }
  }
  function status() {
    if (recoveryMode) {
      say2("This learner\u2019s saved version cannot be opened here. Export the unreadable data or choose another learner; the original save is unchanged.");
      return;
    }
    if (!retired) say2(pending ? "Saving on this device\u2026" : durable ? `${title[game]} learner: ${profile.label}. Saved on this device.` : "Temporary session: browser storage is unavailable. Export progress before leaving.");
  }
  function button(parent, text, action, { needsIdle = true } = {}) {
    const b = el("button", text);
    b.type = "button";
    b.className = "ghost";
    b.addEventListener("click", async () => {
      if (b.disabled) return;
      if (needsIdle && (pending || loading || retired)) {
        say2("Export unsaved progress or reload before changing learners.");
        return;
      }
      b.disabled = true;
      try {
        await action();
      } catch (error) {
        say2(error.message || "That action could not be completed.");
      } finally {
        b.disabled = false;
      }
    });
    parent.append(b);
    return b;
  }
  async function showProfiles() {
    profileList.replaceChildren();
    for (const p of await store.listProfiles()) button(profileList, `Play as ${p.label}`, () => selectProfile(p));
  }
  async function selectProfile(next) {
    if (pending || loading || retired) return;
    loading = true;
    importEpoch++;
    const epoch = ++selectionEpoch;
    document.dispatchEvent(new Event("progress-retired"));
    document.querySelector("#gameplay").inert = true;
    try {
      const loaded = await store.load(next.id);
      if (epoch !== selectionEpoch) return;
      if (!loaded) throw new Error("That learner was removed in another tab. Choose another one.");
      let snapshot;
      try {
        snapshot = normalizeSnapshot(game, loaded.snapshot);
        recoveryMode = false;
        recoveryRaw = null;
      } catch {
        snapshot = cleanProgress(game, {});
        recoveryMode = true;
        recoveryRaw = structuredClone(loaded.snapshot);
      }
      profile = next;
      record = loaded;
      live = snapshot;
      remember(profile.id);
      exportButton.textContent = recoveryMode ? "Export unreadable saved data" : "Export this learner\u2019s progress";
      document.querySelector("#gameplay").hidden = recoveryMode;
      document.dispatchEvent(new Event("progress-loaded"));
      document.querySelector("#gameplay").inert = false;
      await showProfiles();
      dialog.close();
      cloud?.queue();
      void cloud?.renderConnected().catch((error) => say2(error.message));
      status();
    } catch (error) {
      retire(`${error.message} Export this tab\u2019s copy if needed, then reload.`);
    } finally {
      if (epoch === selectionEpoch) loading = false;
    }
  }
  async function refreshActive({ source } = {}) {
    if (pending || loading || retired || recoveryMode || !profile) return;
    const expected = record.localRevision, id = profile.id, epoch = selectionEpoch, loaded = await store.load(id);
    if (pending || loading || retired || profile.id !== id || selectionEpoch !== epoch || record.localRevision !== expected) return;
    if (!loaded) {
      retire("This learner was removed in another tab. Export this tab\u2019s older copy if needed, then reload.");
      return;
    }
    if (loaded.localRevision !== record.localRevision && source === "cloud-action") {
      const changed = JSON.stringify(loaded.snapshot) !== JSON.stringify(record.snapshot);
      record = loaded;
      live = normalizeSnapshot(game, loaded.snapshot);
      if (changed) {
        document.dispatchEvent(new Event("progress-retired"));
        document.dispatchEvent(new Event("progress-loaded"));
      }
      status();
      return;
    }
    if (loaded.localRevision !== record.localRevision) {
      retire("Saved progress changed in another tab or cloud action. Export this tab\u2019s copy if needed, then reload to use the current save.");
      return;
    }
    record = loaded;
  }
  async function initProgress(which) {
    game = which;
    const normalize = (value) => normalizeSnapshot(game, value);
    const controls2 = el("section");
    controls2.className = "progress-controls";
    controls2.setAttribute("aria-label", "Learners and saved progress");
    message = el("p", "Opening saved progress\u2026");
    message.setAttribute("role", "status");
    controls2.append(message);
    document.querySelector(".wrap").append(controls2);
    try {
      store = await openProgressStore({ dbName: `early-learning-garden-${game}-v1`, gameId: game, curriculumId: CURRICULA[game], normalize });
    } catch {
      durable = false;
      store = createMemoryStore(normalize);
    }
    let profiles;
    try {
      profiles = await store.listProfiles();
    } catch {
      throw new Error("Saved learner records could not be opened. Keep this browser\u2019s data for recovery.");
    }
    if (!profiles.length) profiles = [await store.createProfile("Player 1", cleanProgress(game, {}))];
    profile = profiles.find((p) => p.id === remembered()) || profiles[0];
    record = await store.load(profile.id);
    if (!record) throw new Error("The selected learner was removed. Reload to choose another learner.");
    try {
      live = normalize(record.snapshot);
    } catch {
      recoveryMode = true;
      recoveryRaw = structuredClone(record.snapshot);
      live = cleanProgress(game, {});
    }
    document.querySelector("#gameplay").hidden = recoveryMode;
    remember(profile.id);
    dialog = el("dialog");
    dialog.className = "settings";
    dialog.setAttribute("aria-labelledby", "settings-title");
    const heading = el("h2", `${title[game]}: learners and backups`);
    heading.id = "settings-title";
    modalMessage = el("p");
    modalMessage.setAttribute("role", "status");
    dialog.append(heading, modalMessage);
    dialog.addEventListener("close", () => say2(lastMessage));
    dialog.append(el("p", "Learners have their own progress. Nicknames are labels, not accounts. Anyone using this browser can see local learners and exports."));
    button(controls2, "Learners and backups", async () => {
      dialog.showModal();
      say2(lastMessage);
      await cloud.renderConnected();
    }, { needsIdle: false });
    button(dialog, "Close", () => dialog.close(), { needsIdle: false });
    profileList = el("div");
    profileList.className = "learner-list";
    dialog.append(profileList);
    await showProfiles();
    const form = el("form");
    const label = el("label", "New learner nickname");
    label.htmlFor = "new-learner";
    const input = el("input");
    input.id = "new-learner";
    input.required = true;
    input.maxLength = 60;
    const add = el("button", "Add learner");
    add.type = "submit";
    form.append(label, input, add);
    dialog.append(form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (pending || loading || retired || add.disabled) return;
      add.disabled = true;
      const epoch = selectionEpoch;
      try {
        const next = await store.createProfile(input.value, cleanProgress(game, {}));
        if (epoch === selectionEpoch) await selectProfile(next);
        else await showProfiles();
      } catch (error) {
        say2(error.message);
      } finally {
        add.disabled = false;
      }
    });
    const backups = el("section");
    backups.append(el("h3", "Backups for this game"), el("p", "Export saves the current learner\u2019s progress and nickname in readable JSON. Keep it private. Import creates a new, separate learner and does not replace an existing one or connect a cloud account."));
    exportButton = button(backups, recoveryMode ? "Export unreadable saved data" : "Export this learner\u2019s progress", () => download(recoveryMode ? { app: "early-learning-garden-raw-recovery", game, label: profile.label, snapshot: recoveryRaw } : exportSnapshot(game, profile.label, live), `early-learning-garden-${game}-${recoveryMode ? "raw-recovery" : "backup"}.json`), { needsIdle: false });
    const importLabel = el("label", "Import a backup for this game");
    const upload = el("input");
    upload.type = "file";
    upload.accept = ".json,application/json";
    importLabel.append(upload);
    backups.append(importLabel);
    upload.addEventListener("change", async () => {
      const file = upload.files[0];
      const epoch = ++importEpoch;
      upload.value = "";
      if (!file) return;
      if (pending || loading || retired) {
        say2("Export unsaved progress or reload before importing.");
        return;
      }
      try {
        if (file.size > 1048576) throw new Error("Choose a backup smaller than 1 MB.");
        const value = importSnapshot(game, JSON.parse(await file.text()));
        if (epoch !== importEpoch) return;
        if (pending || loading || retired) throw new Error("Progress changed while reading the file. Try again.");
        const p = await store.createProfile(value.label, value.snapshot);
        if (epoch === importEpoch) await selectProfile(p);
        else await showProfiles();
      } catch (error) {
        say2(`Import failed: ${error.message}`);
      }
    });
    button(backups, "Export recovery copies", async () => {
      const copies = await store.listRecovery(profile.id);
      download({ app: "early-learning-garden-recovery", game, curriculum: CURRICULA[game], version: 1, copies: copies.map((c) => ({ reason: c.reason, createdAt: c.createdAt, backup: exportSnapshot(game, profile.label, c.snapshot) })) }, `early-learning-garden-${game}-recovery.json`);
    }, { needsIdle: false });
    button(backups, "Remove this learner from this game", async () => {
      if (!confirm("Remove this learner and recovery copies from this game on this device? Other games and cloud copies remain. Export a backup first if needed.")) return;
      await store.removeProfile(profile.id);
      cloud.disconnect();
      const remaining = await store.listProfiles();
      await selectProfile(remaining[0] || await store.createProfile("Player 1", cleanProgress(game, {})));
      cloud.renderConnected();
    });
    dialog.append(backups);
    const cloudRoot = el("section");
    cloudRoot.append(el("h3", "Optional cloud saves for this game"));
    dialog.append(cloudRoot);
    cloud = createCloudPanel(cloudRoot, {
      store,
      durable,
      normalize,
      gameId: game,
      curriculumId: CURRICULA[game],
      configURL: new URL("../cloud-config.local.json", document.baseURI),
      helpURL: "https://github.com/jessecmaddox3/early-learning-garden/blob/main/docs/cloud-setup.md",
      getProfile: () => profile,
      isBusy: () => pending > 0 || loading || retired || recoveryMode,
      onChange: refreshActive,
      onRestore: selectProfile,
      onProfilesCleared: async () => {
        const remaining = await store.listProfiles();
        await selectProfile(remaining.find((p) => p.id === profile.id) || remaining[0] || await store.createProfile("Player 1", cleanProgress(game, {})));
      },
      onMessage: say2,
      describe: (s) => `${Object.values(s.items).reduce((n, x) => n + x.attempts, 0)} attempts; ${Object.values(s.items).filter((x) => x.mastered).length} practiced items`
    });
    document.body.append(dialog);
    button(controls2, "Reload saved progress", () => {
      if ((pending || retired) && !confirm("Reload the saved copy? Export this tab\u2019s unsaved progress first if you need it.")) return;
      location.reload();
    }, { needsIdle: false });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") void refreshActive().catch(() => retire("Saved progress could not be checked. Export a copy before reloading."));
    });
    window.addEventListener("beforeunload", (e) => {
      if (pending || retired) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    window.addEventListener("pagehide", () => cloud.disconnect());
    status();
  }
  var readLocal = () => structuredClone(live);
  function writeLocal(which, value) {
    if (which !== game) throw new TypeError("Wrong game save.");
    if (retired || recoveryMode) return;
    live = cleanProgress(game, value);
    const snapshot = structuredClone(live), id = profile.id;
    pending++;
    status();
    saveTail = saveTail.then(async () => {
      if (retired || profile.id !== id) return;
      try {
        const result = await store.save(id, snapshot, record.localRevision);
        if (result.status !== "saved") {
          retire("Another tab saved first. Your attempted save is in recovery. Export this tab\u2019s latest progress if needed, then reload.");
          return;
        }
        record = result.record;
        cloud.queue();
      } catch {
        retire("This change could not be saved. Export this learner\u2019s progress before reloading.");
      }
    }).finally(() => {
      pending--;
      status();
    });
  }

  // public/shared/game-model.js
  function score(game2, value, key, correct) {
    const s = cleanProgress(game2, value);
    if (s.finished) return s;
    const prev = s.items[key] || { attempts: 0, correct: 0, streak: 0, mastered: false };
    prev.attempts = Math.min(1e6, prev.attempts + 1);
    prev.correct = Math.min(prev.attempts, prev.correct + (correct ? 1 : 0));
    prev.streak = correct ? Math.min(prev.correct, prev.streak + 1) : 0;
    prev.mastered = prev.streak >= (game2 === "path" ? 2 : 3);
    s.items[key] = prev;
    if (correct) {
      s.streak++;
      s.round++;
      s.stickers++;
      if (game2 === "subitize" && s.streak >= 4 && s.level < 3) {
        s.level++;
        s.streak = 0;
      }
      if (game2 === "blend" && s.streak >= 3 && s.stage < 3) {
        s.stage++;
        s.streak = 0;
      }
      if (game2 === "path" && s.round % 2 === 0 && s.level < 3) s.level++;
      if (game2 === "letters") {
        const letters = WAVES.slice(0, s.wave + 1).flat();
        if (s.wave < 4 && letters.filter((l) => s.items[l]?.mastered).length >= letters.length - 1) s.wave++;
      }
    } else s.streak = 0;
    s.finished = s.round >= SESSION_ROUNDS[game2];
    return cleanProgress(game2, s);
  }
  function restartSession(game2, s) {
    return cleanProgress(game2, { ...s, round: 0, stickers: 0, streak: 0, finished: false });
  }
  function shuffled(values, rng = Math.random) {
    const out = [...values];
    for (let i = out.length - 1; i > 0; i--) {
      const v = rng();
      const j = Math.floor((Number.isFinite(v) ? Math.max(0, Math.min(0.999999999, v)) : 0) * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  // public/shared/round-life.js
  function createRoundLife() {
    let epoch = 0, active = false;
    const timers = /* @__PURE__ */ new Set();
    function cancel() {
      epoch++;
      active = false;
      for (const timer of timers) clearTimeout(timer);
      timers.clear();
      cancelAudio();
    }
    function begin() {
      cancel();
      active = true;
      return epoch;
    }
    const valid = (token2) => active && token2 === epoch;
    function later(token2, fn, ms) {
      const timer = setTimeout(() => {
        timers.delete(timer);
        if (valid(token2)) fn();
      }, ms);
      timers.add(timer);
    }
    document.addEventListener("progress-retired", cancel);
    window.addEventListener("pagehide", cancel);
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) location.reload();
    });
    return { cancel, begin, valid, later };
  }

  // public/blend/blend.js
  var GAME = "blend";
  var el2 = (id) => document.getElementById(id);
  var life = createRoundLife();
  var state;
  var token;
  var current;
  var lit = -1;
  var fraction = 0;
  var phase = "start";
  var dragging = false;
  function paint() {
    el2("stickers").textContent = "\u2B50\uFE0F".repeat(state.stickers);
  }
  function save() {
    writeLocal(GAME, state);
    paint();
  }
  function position(f) {
    fraction = Math.max(0, Math.min(1, f));
    const radius = el2("puck").offsetWidth / 2, w = el2("rail").clientWidth;
    el2("puck").style.left = `${radius + fraction * Math.max(0, w - radius * 2)}px`;
    el2("rail").setAttribute("aria-valuenow", String(Math.round(fraction * 100)));
  }
  function setup(same = false) {
    token = life.begin();
    dragging = false;
    phase = "rail";
    lit = -1;
    const pool = WORDS.filter((w) => w.stage <= state.stage);
    if (!same || !current) current = pool[Math.floor(Math.random() * pool.length)];
    el2("wordOut").textContent = "";
    el2("pics").hidden = true;
    el2("reaction").textContent = "";
    el2("letters").style.gridTemplateColumns = `repeat(${current.letters.length},1fr)`;
    el2("letters").innerHTML = current.letters.map((l, i) => `<div class="slot" data-i="${i}">${l}</div>`).join("");
    position(0);
    say("slide-robot", "Slide the robot.");
  }
  function crossed(f) {
    if (phase !== "rail" || !life.valid(token)) return;
    const zone = Math.min(current.letters.length - 1, Math.floor(f * current.letters.length));
    for (let i = lit + 1; i <= zone; i++) {
      el2("letters").children[i].classList.add("lit");
      say(`snd-${current.letters[i]}`, stretch(current.letters[i]));
    }
    lit = Math.max(lit, zone);
    if (f > 0.94) snap();
  }
  async function snap() {
    if (phase !== "rail") return;
    phase = "blending";
    const own = token, word = current;
    el2("wordOut").textContent = word.w;
    await say(`word-${word.w}`, word.w);
    if (!life.valid(own)) return;
    offer();
  }
  function offer() {
    phase = "answer";
    const choices = shuffled([current, ...shuffled(WORDS.filter((w) => w.w !== current.w)).slice(0, 2)]);
    el2("pics").replaceChildren();
    for (const w of choices) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "pic";
      b.dataset.w = w.w;
      b.setAttribute("aria-label", w.w);
      b.textContent = w.pic;
      b.addEventListener("click", () => chose(w.w));
      el2("pics").append(b);
    }
    el2("pics").hidden = false;
    say("which-picture", "Which picture?");
  }
  async function chose(w) {
    if (phase !== "answer" || !life.valid(token)) return;
    phase = "feedback";
    const own = token, word = current, correct = w === word.w;
    state = score(GAME, state, word.w, correct);
    save();
    if (correct) {
      chime("good");
      el2("reaction").textContent = "\u{1F389}";
      await say(`yes-${word.w}`, `Yes! ${word.w}.`);
      if (!life.valid(own)) return;
      if (state.finished) return finish();
      life.later(own, setup, 600);
    } else {
      chime("soft");
      el2("reaction").textContent = "\u{1F914}";
      await say(`word-${word.w}`, word.w);
      if (!life.valid(own)) return;
      await say("try-again", "Try again.");
      if (life.valid(own)) phase = "answer";
    }
  }
  function finish() {
    phase = "finished";
    el2("reaction").textContent = "\u{1F44F}";
    el2("pics").hidden = true;
    el2("wordOut").textContent = "";
    el2("again").setAttribute("aria-label", "Play another blending session");
    say("all-done", "All done! Lovely work.");
  }
  function load() {
    state = readLocal(GAME);
    token = life.begin();
    paint();
    if (state.finished) finish();
    else setup();
  }
  function eventFraction(e) {
    const r = el2("rail").getBoundingClientRect(), radius = el2("puck").offsetWidth / 2;
    return Math.max(0, Math.min(1, (e.clientX - r.left - radius) / Math.max(1, r.width - radius * 2)));
  }
  el2("puck").addEventListener("pointerdown", (e) => {
    if (phase !== "rail") return;
    dragging = true;
    el2("puck").setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  el2("puck").addEventListener("pointermove", (e) => {
    if (!dragging || phase !== "rail") return;
    const f = eventFraction(e);
    position(f);
    crossed(f);
  });
  for (const name of ["pointerup", "pointercancel"]) el2("puck").addEventListener(name, () => dragging = false);
  el2("rail").addEventListener("pointerdown", (e) => {
    if (e.target === el2("puck") || phase !== "rail") return;
    const f = eventFraction(e);
    position(f);
    crossed(f);
  });
  el2("rail").addEventListener("keydown", (e) => {
    if (phase !== "rail") return;
    let f;
    if (e.key === "Home") f = 0;
    else if (e.key === "End") f = 1;
    else if (["ArrowRight", "ArrowUp"].includes(e.key)) f = Math.min(1, (lit + 1.5) / current.letters.length);
    else if (["ArrowLeft", "ArrowDown"].includes(e.key)) f = Math.max(0, fraction - 1 / current.letters.length);
    else return;
    e.preventDefault();
    position(f);
    crossed(f);
  });
  el2("again").addEventListener("click", () => {
    if (!life.valid(token)) return;
    if (state.finished) {
      state = restartSession(GAME, state);
      save();
    }
    el2("again").setAttribute("aria-label", "Replay this blending round");
    setup(phase !== "finished");
  });
  window.addEventListener("resize", () => position(fraction));
  document.addEventListener("progress-retired", () => dragging = false);
  installUnlock();
  initProgress(GAME).then(() => {
    document.addEventListener("progress-loaded", load);
    load();
  }).catch((e) => el2("reaction").textContent = e.message);
})();
