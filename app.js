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
