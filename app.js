/* Funktionelles Training – Übungen zum Nachschlagen
   Inhalte nach der Präsentation von Michael Lierke (AG Sportphysiotherapie). */

/* ---------- SVG-Illustrationen ---------- */
/* Einheitlicher, freundlicher Stil. Dunkle Figur = Körper, Koralle = Kraftrichtung. */

const F = "#0b4f4a";      // Figur
const A = "#f2683c";      // Aktion / Kraftrichtung
const W = "#f6b73c";      // Hilfsmittel / Wand

function frame(id, body) {
  return `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8f7f2"/><stop offset="1" stop-color="#d3ede6"/>
      </linearGradient>
      <marker id="ar-${id}" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="11" refY="8" orient="auto">
        <path d="M1,1 L15,8 L1,15 Z" fill="${A}"/>
      </marker>
    </defs>
    <rect width="320" height="220" fill="url(#${id})"/>
    <line x1="34" y1="197" x2="286" y2="197" stroke="#b6d9cf" stroke-width="3" stroke-linecap="round"/>
    ${body}
  </svg>`;
}

// gemeinsame Figur-Stilangaben
const limb = `stroke="${F}" stroke-width="13" stroke-linecap="round" fill="none"`;
const limbA = `stroke="${A}" stroke-width="13" stroke-linecap="round" fill="none"`;
const arrow = (d) => `<path d="${d}" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-@)"/>`;

const ILLU = {
  // 1 – Vertikaler Frontaldruck: aufrecht, beide Hände drücken waagerecht gegen die Wand
  vertikal: frame("g1", `
    <rect x="238" y="24" width="16" height="173" rx="4" fill="${W}"/>
    <rect x="212" y="120" width="34" height="26" rx="4" fill="#fff" stroke="${F}" stroke-width="3"/>
    <circle cx="120" cy="52" r="17" fill="${F}"/>
    <path d="M120,70 L120,128" ${limb}/>
    <path d="M120,128 L104,162 L100,194" ${limb}/>
    <path d="M120,128 L138,160 L144,194" ${limb}/>
    <path d="M120,86 L172,90 L214,92" ${limbA}/>
    <path d="M222,88 L238,88" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g1)"/>
    <path d="M222,104 L238,104" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g1)"/>
  `),

  // 2 – Diagonaler Frontaldruck: ein Arm drückt diagonal zur Gegenhüfte, andere Hand am Handgelenk
  diagonal: frame("g2", `
    <circle cx="150" cy="50" r="17" fill="${F}"/>
    <path d="M150,68 L150,126" ${limb}/>
    <path d="M150,126 L132,160 L128,194" ${limb}/>
    <path d="M150,126 L168,160 L172,194" ${limb}/>
    <path d="M150,84 L120,120 L108,150" ${limbA}/>
    <path d="M150,86 L128,128" ${limb}/>
    <circle cx="119" cy="127" r="9" fill="${F}"/>
    <path d="M96,138 L78,166" fill="none" stroke="${A}" stroke-width="6" stroke-linecap="round" marker-end="url(#ar-g2)"/>
  `),

  // 3 – Gebets-Übung: Hände vor der Brust gegeneinander, mit Rotation
  gebet: frame("g3", `
    <circle cx="160" cy="48" r="17" fill="${F}"/>
    <path d="M160,66 L160,128" ${limb}/>
    <path d="M160,128 L143,162 L139,194" ${limb}/>
    <path d="M160,128 L177,162 L181,194" ${limb}/>
    <path d="M160,86 L130,104 L150,110" ${limbA}/>
    <path d="M160,86 L190,104 L170,110" ${limbA}/>
    <path d="M118,104 L142,104" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g3)"/>
    <path d="M202,104 L178,104" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g3)"/>
    <path d="M150,150 A30,30 0 0 1 200,150" fill="none" stroke="${A}" stroke-width="4" stroke-linecap="round" marker-end="url(#ar-g3)"/>
  `),

  // 4 – Der Sprinter: Schrittstellung wie beim Sprintstart, Arme in Laufhaltung
  sprinter: frame("g4", `
    <circle cx="120" cy="62" r="17" fill="${F}"/>
    <path d="M120,80 L150,116" ${limb}/>
    <path d="M150,116 L120,150 L98,180" ${limb}/>
    <path d="M150,116 L196,150 L214,192" ${limb}/>
    <path d="M138,96 L108,120 L96,150" ${limbA}/>
    <path d="M138,96 L176,80 L196,66" ${limbA}/>
    <path d="M214,110 L244,140" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g4)"/>
    <path d="M96,150 L70,176" fill="none" stroke="${A}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar-g4)"/>
  `),

  // 5 – Der Speerwerfer: Wurfstellung, ein Arm nach hinten oben
  speer: frame("g5", `
    <circle cx="150" cy="58" r="17" fill="${F}"/>
    <path d="M150,76 L150,128" ${limb}/>
    <path d="M150,128 L118,152 L100,188" ${limb}/>
    <path d="M150,128 L184,150 L206,186" ${limb}/>
    <path d="M150,90 L120,74 L96,58" ${limbA}/>
    <path d="M150,90 L186,102 L214,110" ${limbA}/>
    <line x1="82" y1="70" x2="128" y2="46" stroke="${F}" stroke-width="4" stroke-linecap="round"/>
    <path d="M118,150 A56,56 0 0 1 214,120" fill="none" stroke="${A}" stroke-width="4" stroke-linecap="round" marker-end="url(#ar-g5)"/>
  `),

  // 6 – Die Schulter-Uhr: Hand drückt Ball gegen Türrahmen, Uhr-Motiv
  schulteruhr: frame("g6", `
    <rect x="244" y="24" width="16" height="173" rx="4" fill="${W}"/>
    <circle cx="120" cy="54" r="17" fill="${F}"/>
    <path d="M120,72 L120,128" ${limb}/>
    <path d="M120,128 L104,162 L100,194" ${limb}/>
    <path d="M120,128 L138,160 L144,194" ${limb}/>
    <path d="M120,88 L176,92 L214,96" ${limbA}/>
    <circle cx="226" cy="96" r="15" fill="#fff" stroke="${A}" stroke-width="4"/>
    <g stroke="${A}" stroke-width="4" stroke-linecap="round" fill="none">
      <path d="M226,60 L226,72" marker-end="url(#ar-g6)"/>
      <path d="M258,96 L246,96" marker-end="url(#ar-g6)"/>
      <path d="M226,132 L226,120" marker-end="url(#ar-g6)"/>
    </g>
  `),
};

/* ---------- Übungsdaten ---------- */

const EXERCISES = [
  {
    id: 1,
    name: "Vertikaler Frontaldruck",
    aka: "Übung 1",
    illu: ILLU.vertikal,
    regions: ["Brust", "Rumpf"],
    muscles: ["Pectoralis major et minor", "Rectus abdominis", "Latissimus dorsi", "Deltoideus (pars dorsalis)", "Triceps brachii"],
    steps: [
      "Aufrecht hinstellen. Beide Handflächen vor der Brust gegen einen festen Widerstand legen – z. B. den Türrahmen, ein festes Polster oder eine Personenwaage.",
      "Mit maximaler Kraft gerade nach vorne drücken. Rücken lang, Schultern locker.",
      "Die Spannung 10 Sekunden halten und dabei ruhig weiteratmen.",
      "Lösen, gleich lange Pause, dann 3–5 Wiederholungen.",
    ],
    goal: "Ziel: mindestens 25 % deines Körpergewichts 10 Sekunden auf die Waage drücken.",
  },
  {
    id: 2,
    name: "Diagonaler Frontaldruck",
    aka: "Übung 2",
    illu: ILLU.diagonal,
    regions: ["Brust", "Rumpf"],
    muscles: ["Pectoralis major", "Diagonale Bauchmuskulatur", "Latissimus dorsi"],
    steps: [
      "Ein Arm drückt diagonal nach vorne unten – in Richtung der gegenüberliegenden Hüfte.",
      "Die andere Hand umgreift das Handgelenk und zieht in dieselbe Richtung. So kommt der Latissimus dieser Seite mit zum Einsatz.",
      "Maximale Kraft aufbauen und 10 Sekunden halten, ruhig weiteratmen.",
      "Pause, dann die Seite wechseln – 3–5 Wiederholungen je Seite.",
    ],
  },
  {
    id: 3,
    name: "Gebets-Übung",
    aka: "Übung 3",
    illu: ILLU.gebet,
    regions: ["Rumpf"],
    muscles: ["Rotatores", "Multifidii", "Transverse Bauchmuskulatur", "Lumbale Rückenstrecker"],
    steps: [
      "Hände vor der Brust zusammenlegen wie zum Gebet.",
      "Die Handflächen mit maximaler Kraft gegeneinander drücken.",
      "Zusätzlich eine leichte Rotation aus dem Rumpf einbauen – dadurch wird nahezu die gesamte Rumpfmuskulatur aktiv.",
      "10 Sekunden halten, ruhig atmen, Pause – 3–5 Wiederholungen (Rotation zu beiden Seiten).",
    ],
    note: "Über die rotatorische Komponente ist mehr oder weniger die gesamte Rumpfmuskulatur beteiligt.",
  },
  {
    id: 4,
    name: "Der Sprinter",
    aka: "Übung 4",
    illu: ILLU.sprinter,
    regions: ["Rumpf", "Hüfte"],
    muscles: ["Lumbo-sacraler Übergang", "Gluteus maximus", "Ilio-psoas / Adduktoren", "Pelvi-trochantäre Muskulatur"],
    steps: [
      "Schrittstellung wie beim Sprintstart einnehmen, Arme in Laufhaltung (ein Arm vor, ein Arm zurück).",
      "Diagonale Körperspannung aufbauen – Rumpf, Hüfte und Beine arbeiten zusammen.",
      "Die Spannung 10 Sekunden isometrisch halten, ruhig weiteratmen.",
      "Pause, Seite wechseln – 3–5 Wiederholungen je Seite.",
    ],
    note: "Über die rotatorische Komponente ist mehr oder weniger die gesamte Rumpfmuskulatur beteiligt.",
    alt: "Alternative: Die rechte Hand drückt nach innen gegen den hinteren Türrahmen. Dadurch bekommt der M. latissimus dorsi dieser Seite einen zusätzlichen, kräftigen Akzent.",
  },
  {
    id: 5,
    name: "Der Speerwerfer",
    aka: "Übung 5",
    illu: ILLU.speer,
    regions: ["Schulter", "Rumpf"],
    muscles: ["Intrascapuläre Muskulatur", "Pectoralis major / minor", "Schultergürtelmuskulatur"],
    steps: [
      "Ausfallschritt in Wurfstellung wie ein Speerwerfer, ein Arm nach hinten oben geführt.",
      "Eine diagonale Rotationsspannung über den ganzen Rumpf aufbauen.",
      "10 Sekunden mit maximaler Kraft halten, ruhig weiteratmen.",
      "Pause, Seite wechseln – 3–5 Wiederholungen je Seite.",
    ],
    note: "Der Großteil der Rumpfmuskulatur verläuft diagonal oder horizontal. Durch rotatorische Kraft wird sie in ihrer Gesamtheit beansprucht.",
  },
  {
    id: 6,
    name: "Die Schulter-Uhr",
    aka: "Übung 6",
    illu: ILLU.schulteruhr,
    regions: ["Schulter"],
    muscles: ["Schultergürtel", "Rotatorenmanschette (gelenksichernd)"],
    equipment: "Griffiger Gymnastikball, ⌀ 10–12 cm",
    steps: [
      "Den Ball zwischen Handfläche und Türrahmen klemmen. Der Ball wirkt wie eine elastische Anbindung und sorgt für höhere neuromuskuläre Aktivität als ein starrer Widerstand.",
      "Isometrisch in verschiedene Richtungen gegen den Ball drücken – vorgegeben durch die Zeigerpositionen einer gedachten Uhr (12, 3, 6, 9 Uhr …).",
      "Dabei in gelenksichernder Ko-Kontraktion innerhalb einer geschlossenen Kette arbeiten – Schulter bleibt stabil geführt.",
      "Jede Richtung 10 Sekunden halten, ruhig atmen, Pausen einhalten.",
    ],
    alt: "Steigerung: Bei zunehmendem Fortschritt die Übung auch in höheren Gelenkwinkeln über Kopf ausführen.",
  },
];

const REGIONS = ["Alle", "Brust", "Rumpf", "Schulter", "Hüfte"];

/* ---------- Rendering ---------- */

const grid = document.getElementById("grid");
const emptyEl = document.getElementById("empty");
const chipsEl = document.getElementById("chips");
const searchEl = document.getElementById("search");

let activeRegion = "Alle";
let query = "";

REGIONS.forEach((r, i) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.textContent = r;
  b.setAttribute("role", "tab");
  b.setAttribute("aria-selected", i === 0 ? "true" : "false");
  b.addEventListener("click", () => {
    activeRegion = r;
    [...chipsEl.children].forEach((c) => c.setAttribute("aria-selected", c === b ? "true" : "false"));
    render();
  });
  chipsEl.appendChild(b);
});

function matches(ex) {
  const regionOk = activeRegion === "Alle" || ex.regions.includes(activeRegion);
  if (!regionOk) return false;
  if (!query) return true;
  const hay = (ex.name + " " + ex.aka + " " + ex.muscles.join(" ")).toLowerCase();
  return hay.includes(query);
}

function render() {
  const list = EXERCISES.filter(matches);
  grid.innerHTML = "";
  emptyEl.hidden = list.length > 0;

  list.forEach((ex, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.style.animationDelay = `${i * 60}ms`;
    card.setAttribute("aria-label", `${ex.name} – Details ansehen`);
    card.innerHTML = `
      <div class="card-illu"><span class="card-num">${ex.id}</span>${ex.illu.replace(/@/g, "g" + ex.id)}</div>
      <div class="card-body">
        <p class="card-sub">${ex.aka}</p>
        <h3>${ex.name}</h3>
        <div class="tags">${ex.regions.map((r) => `<span class="tag">${r}</span>`).join("")}</div>
        <span class="card-cta">So geht's <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>`;
    card.addEventListener("click", () => openModal(ex));
    grid.appendChild(card);
  });
}

/* ---------- Modal ---------- */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(ex) {
  modalBody.innerHTML = `
    <div class="m-illu"><span class="m-num">${ex.id}</span>${ex.illu.replace(/@/g, "m" + ex.id)}</div>
    <div class="m-content">
      <p class="m-sub">${ex.aka}</p>
      <h2>${ex.name}</h2>

      ${ex.equipment ? `<div class="m-block"><div class="m-goal"><span class="ic">🧰</span><div><b>Du brauchst:</b> ${ex.equipment}</div></div></div>` : ""}

      <div class="m-block">
        <h4>So geht's</h4>
        <ol class="m-steps">${ex.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
      </div>

      ${ex.goal ? `<div class="m-block"><div class="m-goal"><span class="ic">🎯</span><div>${ex.goal}</div></div></div>` : ""}
      ${ex.note ? `<div class="m-block"><div class="m-goal"><span class="ic">💡</span><div>${ex.note}</div></div></div>` : ""}
      ${ex.alt ? `<div class="m-block"><div class="m-callout${ex.id === 6 ? "" : " alt"}"><b>${ex.id === 6 ? "Steigerung" : "Variante"}:</b> ${ex.alt.replace(/^(Alternative|Steigerung):\s*/, "")}</div></div>` : ""}

      <div class="m-block">
        <h4>Wirkungsschwerpunkt</h4>
        <div class="m-muscles">${ex.muscles.map((m) => `<span class="m-muscle">${m}</span>`).join("")}</div>
      </div>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

searchEl.addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); render(); });

render();
