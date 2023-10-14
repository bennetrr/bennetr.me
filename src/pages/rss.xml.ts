import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'bennetr',
    description: 'bennetr\'s homepage and blog',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md}'),
    ),
  });
}
