# Funktionelles Training – Übungen zum Nachschlagen

Eine kleine, moderne Web-App zum Nachschlagen der isometrischen Grundlagen-Übungen aus dem
Workshop **„Funktionelles Training in der Praxis“** von **Michael Lierke** (AG Sportphysiotherapie).

Die App zeigt die **Grundregeln** sowie die **6 Übungen** (Teil 1 – Isometrisches Grundlagen-Training)
übersichtlich, mit klaren Schritt-für-Schritt-Anleitungen und eigenen Illustrationen.

## Verwenden

- **Online:** Über GitHub Pages (siehe unten).
- **Lokal:** Einfach die Datei `index.html` im Browser öffnen – es ist keine Installation nötig.

## Funktionen

- 📖 Übersichtliche Übungskarten mit Illustration
- 🔎 Suche nach Übung oder Muskel
- 🏷️ Filter nach Körperregion (Brust, Rumpf, Schulter, Hüfte)
- 📱 Für Handy & Desktop optimiert – auch als App zum Homescreen hinzufügbar

## GitHub Pages aktivieren

1. In diesem Repository auf **Settings → Pages** gehen.
2. Bei *Build and deployment* unter *Source* **„Deploy from a branch“** wählen.
3. Branch **`main`** und Ordner **`/ (root)`** auswählen, dann **Save**.
4. Nach ein bis zwei Minuten ist die App unter
   `https://tinaschickle.github.io/LierkeFunktionellesTraining/` erreichbar.

## Aufbau

| Datei | Inhalt |
|-------|--------|
| `index.html` | Seitenstruktur (Intro, Filter, Übungsraster, Detail-Dialog) |
| `styles.css` | Modernes Design, responsiv |
| `app.js` | Übungsdaten, Illustrationen (SVG), Such-/Filterlogik, Detailansicht |

## Hinweis

Diese App ersetzt **keine** individuelle physiotherapeutische Beratung.
Bei Beschwerden bitte Fachpersonal fragen. Inhalte nach der Präsentation von Michael Lierke (2014).
