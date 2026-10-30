import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const beitraege = (await getCollection('aktuelles')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Aktuelles · SV Musterstadt 1921',
    description: 'Spielberichte, Jugend und Neuigkeiten aus dem Verein.',
    site: context.site!,
    items: beitraege.map((b) => ({
      title: b.data.title,
      description: b.data.description,
      pubDate: b.data.date,
      link: `/aktuelles/${b.id}/`,
    })),
    customData: '<language>de-de</language>',
  });
}
