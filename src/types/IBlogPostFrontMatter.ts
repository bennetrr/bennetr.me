import type {Page, MarkdownInstance} from 'astro';

export interface IBlogPostFrontMatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

export type BlogPostMarkdownInstance = MarkdownInstance<IBlogPostFrontMatter>;
export type BlogPostPage = Page<BlogPostMarkdownInstance>;

export const comparePosts = (a: BlogPostMarkdownInstance, b: BlogPostMarkdownInstance) => (
      new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
);
