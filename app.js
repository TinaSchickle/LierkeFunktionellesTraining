/* Funktionelles Training – Übungen zum Nachschlagen
   Inhalte nach der Präsentation von Michael Lierke (AG Sportphysiotherapie). */

/* ---------- Übungsdaten ----------
   Fotos: Originalaufnahmen aus der Präsentation von Michael Lierke,
   direkt aus dem PDF extrahiert (freigestellt vor schwarzem Hintergrund). */

const EXERCISES = [
  {
    id: 1,
    name: "Vertikaler Frontaldruck",
    aka: "Übung 1",
    img: "images/u1.jpg",
    regions: ["Brust", "Rumpf"],
    muscles: ["Pectoralis major et minor", "Rectus abdominis", "Latissimus dorsi", "Deltoideus (pars dorsalis)", "Triceps brachii"],
    highlight: ["pec", "abs", "delt_f", "lat", "triceps", "delt_b"],
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
    illu: `<svg viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration: diagonaler Frontaldruck">
      <defs>
        <linearGradient id="u2body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f6f7f1"/><stop offset="1" stop-color="#c9cfc0"/>
        </linearGradient>
        <linearGradient id="u2arm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ff9166"/><stop offset="1" stop-color="#ee5c2c"/>
        </linearGradient>
        <marker id="u2arr" markerUnits="userSpaceOnUse" markerWidth="26" markerHeight="26" refX="9" refY="13" orient="auto">
          <path d="M2,2 L24,13 L2,24 L9,13 Z" fill="#ee5c2c"/>
        </marker>
      </defs>
      <ellipse cx="176" cy="430" rx="116" ry="13" fill="#ffffff" opacity="0.07"/>
      <g fill="none" stroke="url(#u2body)" stroke-linecap="round" stroke-linejoin="round">
        <path d="M150,292 L116,344 L84,404" stroke-width="26"/>
        <path d="M150,292 L178,350 L206,408" stroke-width="26"/>
        <path d="M150,298 L228,204" stroke-width="42"/>
        <path d="M212,214 L258,232 L296,256" stroke-width="22"/>
      </g>
      <circle cx="252" cy="170" r="27" fill="url(#u2body)"/>
      <path d="M228,206 L274,226 L308,252" fill="none" stroke="url(#u2arm)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="299" cy="254" r="15" fill="#c9cfc0"/>
      <circle cx="309" cy="251" r="12" fill="url(#u2arm)"/>
      <path d="M314,268 L345,321" fill="none" stroke="#ee5c2c" stroke-width="11" stroke-linecap="round" marker-end="url(#u2arr)"/>
    </svg>`,
    photoNote: "Für diese Übung gibt es in der Vorlage kein Foto – deshalb zeigt diese Illustration die Bewegung: Ein Arm drückt diagonal nach vorne, die andere Hand fasst das Handgelenk und zieht mit.",
    regions: ["Brust", "Rumpf"],
    muscles: ["Pectoralis major", "Diagonale Bauchmuskulatur", "Latissimus dorsi"],
    highlight: ["pec", "oblique", "lat"],
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
    img: "images/u3.jpg",
    regions: ["Rumpf"],
    muscles: ["Rotatores", "Multifidii", "Transverse Bauchmuskulatur", "Lumbale Rückenstrecker"],
    highlight: ["abs", "oblique", "lumbar"],
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
    img: "images/u4.jpg",
    regions: ["Rumpf", "Hüfte"],
    muscles: ["Lumbo-sacraler Übergang", "Gluteus maximus", "Ilio-psoas / Adduktoren", "Pelvi-trochantäre Muskulatur"],
    highlight: ["hipflex", "glute", "lumbar"],
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
    img: "images/u5.jpg",
    regions: ["Schulter", "Rumpf"],
    muscles: ["Intrascapuläre Muskulatur", "Pectoralis major / minor", "Schultergürtelmuskulatur"],
    highlight: ["pec", "delt_f", "scapula", "traps", "delt_b"],
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
    img: "images/u6.jpg",
    regions: ["Schulter"],
    muscles: ["Schultergürtel", "Rotatorenmanschette (gelenksichernd)"],
    highlight: ["delt_f", "traps", "delt_b", "scapula"],
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
      <div class="card-illu"><span class="card-num">${ex.id}</span>${ex.illu ? ex.illu : `<img src="${ex.img}" alt="${ex.name}" loading="lazy" />`}</div>
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

/* ---------- Muskel-Landkarte ----------
   Schematische, frei gezeichnete Figur (keine reale Person / kein Foto).
   Die für eine Übung trainierten Muskelgruppen werden farbig hervorgehoben. */

/* Grund-Silhouette (lokale Koordinaten 0..180 breit, 0..470 hoch) –
   für Vorder- und Rückansicht identisch verwendet. */
function silhouette() {
  return `
    <g class="mm-body">
      <circle cx="90" cy="42" r="24"/>
      <rect x="79" y="60" width="22" height="18" rx="8"/>
      <path d="M62,84 Q90,77 118,84 L124,142 Q126,182 114,214 L110,220 Q90,227 70,220 L66,214 Q54,182 56,142 Z"/>
      <path class="mm-limb" d="M60,90 L45,150 L49,208"/>
      <path class="mm-limb" d="M120,90 L135,150 L131,208"/>
      <path d="M68,214 Q90,222 112,214 L118,252 Q90,264 62,252 Z"/>
      <path class="mm-leg" d="M80,250 L74,342 L78,432"/>
      <path class="mm-leg" d="M100,250 L106,342 L102,432"/>
    </g>`;
}

function muscleMap(highlight) {
  const on = new Set(highlight || []);
  const c = (k) => (on.has(k) ? "mm-zone on" : "mm-zone");

  // Vorderansicht-Zonen
  const front = `
    <ellipse class="${c("delt_f")}" cx="60"  cy="98"  rx="13" ry="11"/>
    <ellipse class="${c("delt_f")}" cx="120" cy="98"  rx="13" ry="11"/>
    <ellipse class="${c("pec")}"    cx="78"  cy="116" rx="13" ry="10"/>
    <ellipse class="${c("pec")}"    cx="102" cy="116" rx="13" ry="10"/>
    <rect    class="${c("abs")}"    x="80" y="128" width="20" height="56" rx="7"/>
    <ellipse class="${c("oblique")}" cx="70"  cy="168" rx="8"  ry="20"/>
    <ellipse class="${c("oblique")}" cx="110" cy="168" rx="8"  ry="20"/>
    <ellipse class="${c("hipflex")}" cx="80"  cy="250" rx="10" ry="17"/>
    <ellipse class="${c("hipflex")}" cx="100" cy="250" rx="10" ry="17"/>`;

  // Rückansicht-Zonen
  const back = `
    <ellipse class="${c("delt_b")}" cx="60"  cy="98"  rx="13" ry="11"/>
    <ellipse class="${c("delt_b")}" cx="120" cy="98"  rx="13" ry="11"/>
    <path    class="${c("traps")}"  d="M72,90 Q90,84 108,90 L104,116 Q90,122 76,116 Z"/>
    <ellipse class="${c("scapula")}" cx="78"  cy="128" rx="9"  ry="11"/>
    <ellipse class="${c("scapula")}" cx="102" cy="128" rx="9"  ry="11"/>
    <ellipse class="${c("triceps")}" cx="46"  cy="140" rx="8"  ry="16"/>
    <ellipse class="${c("triceps")}" cx="134" cy="140" rx="8"  ry="16"/>
    <ellipse class="${c("lat")}"    cx="72"  cy="162" rx="12" ry="22"/>
    <ellipse class="${c("lat")}"    cx="108" cy="162" rx="12" ry="22"/>
    <ellipse class="${c("lumbar")}" cx="90"  cy="200" rx="18" ry="15"/>
    <ellipse class="${c("glute")}"  cx="80"  cy="242" rx="13" ry="15"/>
    <ellipse class="${c("glute")}"  cx="100" cy="242" rx="13" ry="15"/>`;

  return `
    <div class="mm-wrap">
      <svg class="mm-svg" viewBox="0 0 400 470" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Schematische Figur mit hervorgehobenen, trainierten Muskelgruppen">
        <g transform="translate(10,10)">${silhouette()}${front}
          <text class="mm-caption" x="90" y="462" text-anchor="middle">Vorderseite</text>
        </g>
        <g transform="translate(210,10)">${silhouette()}${back}
          <text class="mm-caption" x="90" y="462" text-anchor="middle">Rückseite</text>
        </g>
      </svg>
      <p class="mm-legend"><span class="mm-key"></span> orange markiert = bei dieser Übung beanspruchte Muskeln
        <em>(schematische Darstellung, keine reale Person)</em></p>
    </div>`;
}

/* ---------- Modal ---------- */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(ex) {
  modalBody.innerHTML = `
    <div class="m-illu"><span class="m-num">${ex.id}</span>${ex.illu ? ex.illu : `<img src="${ex.img}" alt="${ex.name} – Ausführung" />`}</div>
    <div class="m-content">
      <p class="m-sub">${ex.aka}</p>
      <h2>${ex.name}</h2>
      ${ex.photoNote ? `<p class="m-photonote">📷 ${ex.photoNote}</p>` : ""}

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
        ${ex.highlight ? muscleMap(ex.highlight) : ""}
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
