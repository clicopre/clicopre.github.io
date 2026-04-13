import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('updates', ({ data }) => !data.draft);
  const items = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/${post.slug}/`,
    }));

  return rss({
    title: 'CLICOPRE — Updates',
    description: 'News from the CLICOPRE project: working papers, data releases, dashboards, and events.',
    site: context.site,
    items,
    customData: '<language>en</language>',
  });
}
