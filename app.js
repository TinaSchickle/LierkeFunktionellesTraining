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

/* ---------- Muskel-Landkarte (anatomische Illustration) ----------
   Frei gezeichnete Écorché-Figur im Stil einer anatomischen Muskeltafel
   (keine reale Person, kein Foto). Alle Muskeln sind angelegt; die bei
   der jeweiligen Übung trainierten bleiben kräftig und leuchten,
   die übrigen treten gedämpft in den Hintergrund.

   Aufbau: Nur die linke Körperhälfte + Mittellinie werden gezeichnet und
   per Transform gespiegelt. Jede Muskelgruppe trägt ein data-zone-Attribut;
   die Hervorhebung wird über einen String-Replace als Klasse eingesetzt. */

/* Fasertexturen und Sehnenlinien einer Muskelgruppe. */
const AN_DEFS = `
  <defs>
    <radialGradient id="anRed" cx="34%" cy="26%" r="85%">
      <stop offset="0" stop-color="#c85f47"/>
      <stop offset="52%" stop-color="#a53a2d"/>
      <stop offset="100%" stop-color="#761f1b"/>
    </radialGradient>
    <linearGradient id="anSkull" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#efe2c6"/><stop offset="1" stop-color="#d8c39c"/>
    </linearGradient>
  </defs>`;

/* Vorderansicht – linke Körperhälfte (x ≤ 100); wird gespiegelt. */
const AN_FRONT_SIDE = `
    <g data-zone="neck"><path d="M93,71 C90,82 92,95 99,106 L99,97 C95,87 95,79 96,71 Z"/></g>
    <g data-zone="delt_f">
      <path d="M80,100 C65,96 51,105 46,123 C43,138 50,151 62,152 C74,153 82,142 83,125 C84,112 84,104 80,100 Z"/>
      <path class="an-fib" d="M60,150 C58,133 62,117 74,106"/>
      <path class="an-fib" d="M66,151 C64,135 67,120 79,110"/>
    </g>
    <g data-zone="pec">
      <path d="M99,108 L99,151 C87,153 75,150 69,141 C63,132 65,119 74,113 C82,108 92,107 99,108 Z"/>
      <path class="an-fib" d="M98,113 C85,116 77,124 71,138"/>
      <path class="an-fib" d="M98,125 C87,127 79,132 72,140"/>
      <path class="an-fib" d="M98,139 C89,141 83,143 74,146"/>
    </g>
    <g data-zone="serr">
      <path d="M70,150 L80,147 L82,156 L71,159 Z"/>
      <path d="M69,161 L79,159 L80,168 L70,171 Z"/>
      <path d="M68,173 L77,172 L77,180 L68,182 Z"/>
    </g>
    <g data-zone="oblique">
      <path d="M84,150 L84,236 C77,238 70,234 68,225 L66,177 C66,161 74,152 84,150 Z"/>
      <path class="an-fib" d="M82,158 C74,170 70,192 70,220"/>
      <path class="an-fib" d="M83,171 C77,183 74,201 74,224"/>
    </g>
    <g data-zone="biceps">
      <path d="M60,150 C50,154 44,167 45,183 C46,193 54,196 60,190 C65,181 66,161 63,151 Z"/>
      <path class="an-fib" d="M55,157 C50,170 50,183 55,190"/>
    </g>
    <g data-zone="forearm">
      <path d="M58,191 C50,197 44,215 46,233 C47,241 54,242 58,236 C63,224 64,205 61,193 Z"/>
      <path class="an-fib" d="M54,199 C50,215 51,229 56,236"/>
    </g>
    <g data-zone="hand"><path class="an-ten" d="M46,237 C42,243 44,253 50,255 C56,256 58,249 57,241 Z"/></g>
    <g data-zone="hipflex">
      <path d="M99,250 L99,320 C93,322 88,316 86,306 L86,268 C88,256 94,250 99,250 Z"/>
      <path class="an-fib" d="M97,258 C92,278 90,298 90,314"/>
    </g>
    <g data-zone="quad">
      <path d="M96,250 C102,272 100,318 90,350 C86,351 80,349 78,344 C74,315 76,281 82,260 C85,251 91,249 96,250 Z"/>
      <path class="an-fib" d="M92,259 C86,287 84,320 84,346"/>
      <path class="an-fib" d="M86,263 C82,291 82,320 82,344"/>
      <path class="an-ten" d="M97,253 C90,282 82,320 79,347 L82,348 C87,320 94,283 100,255 Z"/>
    </g>
    <g data-zone="leg">
      <path d="M86,352 C92,371 92,401 88,430 C86,436 80,436 78,430 C76,402 78,372 82,355 Z"/>
      <path class="an-fib" d="M85,361 C82,389 82,413 84,428"/>
    </g>`;

/* Vorderansicht – Mittellinie / einzelne mediane Strukturen. */
const AN_FRONT_CENTER = `
    <ellipse class="an-skull" cx="100" cy="42" rx="23" ry="29"/>
    <path class="an-tenl" d="M100,101 L74,105"/>
    <path class="an-tenl" d="M100,101 L126,105"/>
    <g data-zone="abs">
      <path d="M100,131 C110,131 116,140 116,151 L116,231 C116,241 108,245 100,245 C92,245 84,241 84,231 L84,151 C84,140 90,131 100,131 Z"/>
      <path class="an-tenl" d="M100,133 L100,243"/>
      <path class="an-tenl" d="M85,161 L115,161"/>
      <path class="an-tenl" d="M85,183 L115,183"/>
      <path class="an-tenl" d="M86,205 L114,205"/>
    </g>`;

/* Rückansicht – linke Körperhälfte (x ≤ 100); wird gespiegelt. */
const AN_BACK_SIDE = `
    <g data-zone="delt_b">
      <path d="M78,102 C64,98 50,107 46,125 C43,140 50,152 62,152 C73,152 82,142 82,125 C82,112 82,105 78,102 Z"/>
      <path class="an-fib" d="M60,150 C58,134 62,118 74,108"/>
    </g>
    <g data-zone="scapula">
      <path d="M84,122 C72,120 63,128 63,140 C63,151 73,156 84,152 C92,148 93,130 84,122 Z"/>
      <path class="an-fib" d="M82,128 L68,140"/>
      <path class="an-fib" d="M84,136 L69,147"/>
    </g>
    <g data-zone="triceps">
      <path d="M60,142 C50,147 44,165 46,183 C47,192 55,195 61,189 C66,180 66,158 63,146 Z"/>
      <path class="an-fib" d="M55,150 C51,166 52,180 57,188"/>
    </g>
    <g data-zone="forearm">
      <path d="M58,191 C50,197 45,215 47,233 C48,241 55,242 59,236 C63,224 64,205 61,193 Z"/>
    </g>
    <g data-zone="lat">
      <path d="M99,150 L99,215 C86,214 72,205 65,192 C58,179 60,163 71,156 C81,151 91,150 99,150 Z"/>
      <path class="an-fib" d="M96,157 C82,163 72,177 66,191"/>
      <path class="an-fib" d="M97,171 C86,175 78,183 70,193"/>
      <path class="an-fib" d="M98,187 C90,191 84,195 75,199"/>
    </g>
    <g data-zone="glute">
      <path d="M99,246 L99,304 C84,306 72,297 68,282 C64,267 71,252 84,247 C90,245 95,245 99,246 Z"/>
      <path class="an-fib" d="M95,252 C82,258 74,270 71,284"/>
      <path class="an-fib" d="M97,266 C88,270 80,278 74,288"/>
    </g>
    <g data-zone="leg">
      <path d="M96,306 C101,325 99,338 91,354 C87,355 82,352 80,346 C77,328 80,315 86,306 Z"/>
      <path d="M88,356 C94,374 94,402 89,430 C87,436 81,436 79,430 C77,402 80,374 84,358 Z"/>
      <path class="an-fib" d="M87,364 C84,390 84,414 86,428"/>
    </g>`;

/* Rückansicht – Mittellinie / einzelne mediane Strukturen. */
const AN_BACK_CENTER = `
    <ellipse class="an-skull" cx="100" cy="42" rx="23" ry="29"/>
    <g data-zone="traps">
      <path d="M100,90 C118,95 132,108 141,121 C130,131 116,150 100,208 C84,150 70,131 59,121 C68,108 82,95 100,90 Z"/>
      <path class="an-fib" d="M100,100 L136,122"/>
      <path class="an-fib" d="M100,100 L64,122"/>
      <path class="an-fib" d="M100,120 L120,182"/>
      <path class="an-fib" d="M100,120 L80,182"/>
    </g>
    <path class="an-tenl" d="M100,92 L100,208"/>
    <g data-zone="lumbar">
      <path d="M99,206 L99,258 C95,260 90,258 88,252 L88,220 C90,210 95,206 99,206 Z"/>
      <path d="M101,206 L101,258 C105,260 110,258 112,252 L112,220 C110,210 105,206 101,206 Z"/>
      <path class="an-fib" d="M96,212 L94,254"/>
      <path class="an-fib" d="M104,212 L106,254"/>
    </g>`;

/* Setzt eine Ansicht aus gespiegelter Seite + Mitte zusammen. */
function anatomyView(side, center) {
  return `
    <g class="an-side">${side}</g>
    <g class="an-side" transform="translate(200,0) scale(-1,1)">${side}</g>
    <g class="an-center">${center}</g>`;
}

function muscleMap(highlight) {
  const on = new Set(highlight || []);
  const front = anatomyView(AN_FRONT_SIDE, AN_FRONT_CENTER);
  const back = anatomyView(AN_BACK_SIDE, AN_BACK_CENTER);

  // Hervorhebungs-Klassen anhand der data-zone eintragen.
  const light = (svg) =>
    svg.replace(/data-zone="([^"]+)"/g, (_, z) => `data-zone="${z}" class="an-m ${on.has(z) ? "on" : "off"}"`);

  return `
    <div class="mm-wrap">
      <svg class="mm-svg" viewBox="0 0 440 480" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Anatomische Muskelfigur; die bei dieser Übung trainierten Muskeln sind hervorgehoben">
        ${AN_DEFS}
        <g transform="translate(10,12)">
          ${light(front)}
          <text class="mm-caption" x="100" y="466" text-anchor="middle">Vorderseite</text>
        </g>
        <g transform="translate(220,12)">
          ${light(back)}
          <text class="mm-caption" x="100" y="466" text-anchor="middle">Rückseite</text>
        </g>
      </svg>
      <p class="mm-legend"><span class="mm-key"></span> hervorgehoben = bei dieser Übung trainierte Muskeln
        <em>(anatomische Illustration, keine reale Person)</em></p>
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
