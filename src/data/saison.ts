// Fiktive Saison 2026/27 der 1. Herren in der Kreisliga A Musterkreis.
// Was „nächstes Spiel“ ist, entscheidet der Build: Jeder Deploy rückt den Spielplan weiter.

export const saison = '2026/27';
export const liga = 'Kreisliga A Musterkreis';
export const heimspielort = 'Sportpark Am Mühlbach';

export interface Spiel {
  spieltag: number;
  anstoss: Date;
  heim: boolean;
  gegner: string;
  /** Tore aus Sicht des SV: [eigene, gegnerische] */
  ergebnis?: [number, number];
}

const spiel = (spieltag: number, anstoss: string, heim: boolean, gegner: string, ergebnis?: [number, number]): Spiel => ({
  spieltag,
  anstoss: new Date(anstoss),
  heim,
  gegner,
  ergebnis,
});

export const spiele: Spiel[] = [
  spiel(1, '2026-08-16T15:00:00+02:00', true, 'TSV Beispielfeld', [3, 1]),
  spiel(2, '2026-08-23T15:00:00+02:00', false, 'FC Musterhausen 09', [1, 1]),
  spiel(3, '2026-08-30T15:00:00+02:00', true, 'SpVgg Testingen', [4, 0]),
  spiel(4, '2026-09-06T15:00:00+02:00', false, 'Eintracht Probstadt', [0, 2]),
  spiel(5, '2026-09-13T15:00:00+02:00', true, 'SV Exempelbach', [2, 1]),
  spiel(6, '2026-09-20T15:00:00+02:00', false, 'TuS Mustertal', [3, 2]),
  spiel(7, '2026-09-27T15:00:00+02:00', true, 'Germania Skizzingen', [2, 2]),
  spiel(8, '2026-10-04T15:00:00+02:00', false, 'SC Demoheim', [1, 0]),
  spiel(9, '2026-10-11T15:00:00+02:00', true, 'VfL Vorlage', [4, 1]),
  spiel(10, '2026-10-18T15:00:00+02:00', false, 'FSV Entwurfsdorf', [1, 3]),
  spiel(11, '2026-10-25T14:30:00+01:00', true, 'BSC Rohfassung', [5, 0]),
  spiel(12, '2026-11-01T14:30:00+01:00', false, 'Sportfreunde Musterdorf'),
  spiel(13, '2026-11-08T14:30:00+01:00', true, 'TSG Schablonen'),
  spiel(14, '2026-11-15T14:00:00+01:00', false, 'SV Platzhalter 1946'),
  spiel(15, '2026-11-22T14:00:00+01:00', true, 'SG Kladdenau'),
];

export interface Tabellenzeile {
  verein: string;
  s: number;
  u: number;
  n: number;
  tore: number;
  gegentore: number;
}

const zeile = (verein: string, s: number, u: number, n: number, tore: number, gegentore: number): Tabellenzeile => ({
  verein,
  s,
  u,
  n,
  tore,
  gegentore,
});

const tabelleRoh: Tabellenzeile[] = [
  zeile('FC Musterhausen 09', 8, 1, 2, 29, 12),
  zeile('SV Musterstadt 1921', 7, 2, 2, 26, 13),
  zeile('Eintracht Probstadt', 7, 1, 3, 22, 14),
  zeile('FSV Entwurfsdorf', 6, 3, 2, 24, 15),
  zeile('Germania Skizzingen', 5, 4, 2, 20, 16),
  zeile('TuS Mustertal', 5, 2, 4, 21, 19),
  zeile('SC Demoheim', 5, 1, 5, 16, 17),
  zeile('Sportfreunde Musterdorf', 4, 3, 4, 18, 18),
  zeile('TSG Schablonen', 4, 2, 5, 17, 20),
  zeile('VfL Vorlage', 4, 1, 6, 19, 21),
  zeile('SV Exempelbach', 3, 4, 4, 15, 17),
  zeile('SG Kladdenau', 3, 3, 5, 14, 19),
  zeile('TSV Beispielfeld', 3, 2, 6, 13, 21),
  zeile('SV Platzhalter 1946', 2, 4, 5, 12, 20),
  zeile('SpVgg Testingen', 2, 2, 7, 11, 22),
  zeile('BSC Rohfassung', 1, 3, 7, 9, 22),
];

export const eigenerVerein = 'SV Musterstadt 1921';

export const punkte = (z: Tabellenzeile) => z.s * 3 + z.u;
export const differenz = (z: Tabellenzeile) => z.tore - z.gegentore;

export const tabelle = [...tabelleRoh]
  .sort((a, b) => punkte(b) - punkte(a) || differenz(b) - differenz(a) || b.tore - a.tore)
  .map((z, i) => ({ ...z, platz: i + 1, spiele: z.s + z.u + z.n, punkte: punkte(z), differenz: differenz(z) }));

export const eigeneZeile = tabelle.find((z) => z.verein === eigenerVerein)!;

export type Ausgang = 'S' | 'U' | 'N';
export const ausgang = ([eigene, gegner]: [number, number]): Ausgang => (eigene > gegner ? 'S' : eigene < gegner ? 'N' : 'U');

export const gespielt = spiele.filter((s) => s.ergebnis);
export const offen = spiele.filter((s) => !s.ergebnis);

/** Nächstes ungespieltes Spiel nach dem Build-Zeitpunkt. Ist die Hinrunde vorbei, das letzte angesetzte. */
export const naechstesSpiel = offen.find((s) => s.anstoss > new Date()) ?? offen.at(-1) ?? spiele.at(-1)!;
export const letztesSpiel = gespielt.at(-1)!;
export const form = gespielt.slice(-5).map((s) => ausgang(s.ergebnis!));

const zeitzone = 'Europe/Berlin';
export const wochentag = (d: Date) => new Intl.DateTimeFormat('de-DE', { weekday: 'short', timeZone: zeitzone }).format(d);
export const tagMonat = (d: Date) => new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', timeZone: zeitzone }).format(d);
export const uhrzeit = (d: Date) => new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: zeitzone }).format(d);
export const langesDatum = (d: Date) =>
  new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric', month: 'long', timeZone: zeitzone }).format(d);

export const heimTeam = (s: Spiel) => (s.heim ? eigenerVerein : s.gegner);
export const gastTeam = (s: Spiel) => (s.heim ? s.gegner : eigenerVerein);
export const tore = (s: Spiel) => (s.ergebnis ? (s.heim ? s.ergebnis : ([s.ergebnis[1], s.ergebnis[0]] as const)) : undefined);
