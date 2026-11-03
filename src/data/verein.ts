// Fiktive Stammdaten des Beispielvereins. Alles hier ist erfunden.
export const verein = {
  name: 'SV Musterstadt 1921',
  langname: 'SV Musterstadt 1921 e. V.',
  kurzname: 'SV Musterstadt',
  spitzname: 'Die Rot-Weißen',
  claim: 'Hier spielt Musterstadt.',
  gruendung: 1921,
  mitglieder: 640,
  ehrenamtliche: 38,
  sportpark: 'Sportpark Am Mühlbach',
  strasse: 'Mühlbachweg 12',
  plz: '12345',
  ort: 'Musterstadt',
  telefon: '+49 123 456 192 1',
  telefonHref: 'tel:+491234561921',
  email: 'info@sv-musterstadt.example',
  vereinsheim: [
    { tage: 'Dienstag – Freitag', zeit: 'ab 18:00 Uhr' },
    { tage: 'Sonntag (Heimspiel)', zeit: 'ab 11:00 Uhr' },
  ],
};

export const navigation = [
  { href: '/spielplan/', label: 'Spielplan' },
  { href: '/mannschaften/', label: 'Mannschaften' },
  { href: '/aktuelles/', label: 'Aktuelles' },
  { href: '/verein/', label: 'Verein' },
  { href: '/sponsoren/', label: 'Sponsoren' },
];

// Designvarianten auf denselben Inhalten. Umschalten über ?stil=… oder den Schalter in der Demo-Leiste.
// Der erste Eintrag ist der Standard. Stadionheft ist die Basis aller Stile, steht aber nicht mehr im Schalter.
export const stile = [
  { id: 'schlicht', label: 'Schlicht', imSchalter: true },
  { id: 'flutlicht', label: 'Flutlicht', imSchalter: true },
  { id: 'plakat', label: 'Plakat', imSchalter: true },
  { id: 'stadionheft', label: 'Stadionheft', imSchalter: false },
] as const;

export const ersteller = {
  name: 'Hannes Schaletzky',
  url: 'https://hschaletzky.com',
};

export const euro = (wert: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(
    wert,
  );

export const datum = (d: Date) =>
  new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' }).format(d);

// Alle Fotos stammen von Unsplash (Unsplash-Lizenz).
export const bildnachweise = [
  ['Kajetan Sumila', 'LL3XRs7Yvd0'],
  ['Edoardo Busti', 's27f-zECfXc'],
  ['Alfonso Scarpa', 'MFY2M_LtHro'],
  ['Paul Lora', 'xaLBxpT2IVo'],
  ['Nihar Reddy Jangam', 's2JGJT4pEmQ'],
  ['Janosch Jost', 'i8XiabUW3mw'],
  ['Edoardo Busti', '2QwMsZ1TIdI'],
  ['Álvaro Mendoza', '6dRiUBjRvsM'],
  ['Gregorio Cavana', 'T9XlsXKp904'],
  ['Joppe Spaa', 'TsYzva0e2pQ'],
  ['Lars Bo Nielsen', 'zXn5qinCDKg'],
  ['Alliance Football Club', 'hXJ4O3S73gE'],
  ['Felipe Oliveira', 'lAZgYWroBe4'],
  ['Leonardo Evereste', 'ANr8dPT3AdE'],
  ['Quilia', 'AvcBDbR-LWc'],
  ['Matthew Osborn', 'kD5u9TkMCUs'],
  ['Alex', '_AOL4_fDQ3M'],
  ['Connor Coyne', 'OgqWLzWRSaI'],
  ['sporlab', 'ggUrWc5Pg9o'],
  ['Rick Barrett', '7JH2-xHTS-4'],
  ['Daniel van den Berg', '29Jx9qyTW14'],
  ['Maximilian Müller', 'TdjvE-SnB34'],
] as const;
