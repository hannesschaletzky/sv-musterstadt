# SV Musterstadt 1921

Beispielwebsite eines fiktiven Fußballvereins. Sie ist eine Referenz für den Webdesign-Service von
[Hannes Schaletzky](https://hschaletzky.com).

**Live:** https://sv-musterstadt.hschaletzky.com

## Stack

- [Astro 7](https://astro.build), komplett statisch, nur ein paar Zeilen JavaScript (Formular auf „Mitmachen“)
- Inhalte als Markdown in Content Collections: `src/content/{mannschaften,aktuelles}`
- Spielplan und Tabelle als typisierte Daten in `src/data/saison.ts`. Das „nächste Spiel“ ermittelt der Build,
  jeder Deploy rückt den Spielplan also weiter
- Bilder über `astro:assets` → AVIF/WebP in mehreren Größen, Schriften selbst gehostet (Fontsource)
- Strikte Content Security Policy mit Hashes, kein Tracking, keine Cookies, keine Drittanbieter
- Ausgeliefert von Caddy in einem schlanken Container, Deployment über das
  [hschaletzky-infra](https://github.com/hannesschaletzky/hschaletzky-infra)-Repo

## Drei Designs, ein Inhalt

Die Seite gibt es in drei Stilen, umschaltbar in der Demo-Leiste oder per Link:

| Stil        | Link                 | Idee                                                          |
| ----------- | -------------------- | ------------------------------------------------------------- |
| Schlicht    | `/?stil=schlicht`    | Weiß, Systemschrift, normale Größen, feine Linien (Standard)  |
| Flutlicht   | `/?stil=flutlicht`   | Dunkel und sportlich, Trikotstreifen, schmale Sportschrift    |
| Plakat      | `/?stil=plakat`      | Schweizer Plakatstil: hell, eine Grotesk, roter Kreis         |

Alle Stile teilen Markup, Inhalte und Daten. Die Basis in `global.css` und den Komponenten ist der Stil
„Stadionheft“ (Fanzine mit Eintrittskarte, Fanschal und Stickern). Er steht nicht mehr im Schalter, ist aber über
`/?stil=stadionheft` erreichbar. Die drei sichtbaren Stile sind je eine Datei in `src/styles/stile/`, die über
`<html data-stil="…">` greift. Ein kleines Inline-Skript im `<head>` setzt den Stil vor dem ersten Zeichnen und merkt
ihn sich (`localStorage`). Ohne JavaScript gilt Schlicht. Welche Stile es gibt, steht in `stile` in `src/data/verein.ts`.

## Entwicklung

```sh
npm install
npm run dev          # http://localhost:4321
npx astro check      # Typen prüfen
npm run build        # statische Seite nach dist/
```

## Inhalte pflegen

| Was                       | Wo                                                     |
| ------------------------- | ------------------------------------------------------ |
| Vereinsdaten, Menü        | `src/data/verein.ts`                                   |
| Spiele, Ergebnisse, Tabelle | `src/data/saison.ts`                                 |
| Sponsoren                 | `src/data/sponsoren.ts`                                |
| Mannschaften              | `src/content/mannschaften/*.md`                        |
| Meldungen                 | `src/content/aktuelles/*.md`                           |
| Farben, Typografie        | `src/styles/global.css` (`:root`), Stile in `src/styles/stile/` |
| Fotos                     | `src/assets/images/` (+ Bildnachweis in `verein.ts`)   |

Ergebnis eintragen: in `saison.ts` beim Spiel `[eigene, gegnerische]` Tore ergänzen und die Tabellenzeile anpassen.
Die Tabelle sortiert sich selbst.

## Deployment

Jeder Push auf `main` löst `.github/workflows/deploy.yml` aus:

1. `astro check` und Bau des Docker-Images (amd64), Push nach `ghcr.io/hannesschaletzky/sv-musterstadt`
2. `ssh deploy@<server> deploy sv-musterstadt` → Der Server zieht das neue Image und startet den Container neu

Benötigte Secrets (im Environment `production`): `DEPLOY_SSH_KEY`, `DEPLOY_HOST`, `DEPLOY_KNOWN_HOSTS`.
Details stehen im infra-Repo.

## Bildnachweise

Alle Fotos von [Unsplash](https://unsplash.com) (Unsplash-Lizenz). Die Liste steht in `src/data/verein.ts` und auf `/datenschutz/`.
