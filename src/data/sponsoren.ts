// Fiktive Sponsoren. Einzige echte Verbindung: die Tischlerei Mustermann, die zweite Beispielseite.
export interface Sponsor {
  name: string;
  branche: string;
  url?: string;
  /** Typografischer Stil der Wortmarke */
  stil: 'block' | 'kursiv' | 'gesperrt' | 'klein';
}

export const hauptsponsor = {
  name: 'Tischlerei Mustermann',
  branche: 'Möbel und Innenausbau aus Musterstadt',
  url: 'https://tischlerei-mustermann.hschaletzky.com/',
  text: 'Seit 2019 steht die Tischlerei Mustermann auf der Brust unserer Ersten. Max Mustermann hat selbst zwölf Jahre in der Abwehr des SV gespielt. Die Trainerbänke am Rasenplatz hat seine Werkstatt aus heimischer Eiche gebaut.',
};

export const premium: Sponsor[] = [
  { name: 'Stadtwerke Musterstadt', branche: 'Energie und Wasser', stil: 'block' },
  { name: 'Musterbräu', branche: 'Privatbrauerei seit 1868', stil: 'kursiv' },
  { name: 'Autohaus Krämer', branche: 'Werkstatt und Verkauf', stil: 'gesperrt' },
  { name: 'Musterbank eG', branche: 'Genossenschaftsbank', stil: 'klein' },
];

export const partner: Sponsor[] = [
  { name: 'Bäckerei Kornfeld', branche: 'Bäckerei', stil: 'kursiv' },
  { name: 'Physio am Markt', branche: 'Physiotherapie', stil: 'klein' },
  { name: 'Elektro Brenner', branche: 'Elektroinstallation', stil: 'block' },
  { name: 'Gasthaus Zur Linde', branche: 'Gastronomie', stil: 'gesperrt' },
  { name: 'Druckerei Blattwerk', branche: 'Druck und Werbetechnik', stil: 'block' },
  { name: 'Apotheke am Mühlbach', branche: 'Apotheke', stil: 'klein' },
  { name: 'Fahrschule Spurwechsel', branche: 'Fahrschule', stil: 'kursiv' },
  { name: 'Malerbetrieb Farbton', branche: 'Maler und Lackierer', stil: 'gesperrt' },
];
