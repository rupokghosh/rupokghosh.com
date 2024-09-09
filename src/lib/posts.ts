// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

type PostMetaData = {
  title: string;
  date: string;
  description?: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
};

export function getSortedPostsData(): PostMetaData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract the first 150 characters as an excerpt
    const excerpt = content.slice(0, 150) + ' ...';

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      excerpt,
      coverImage: data.coverImage,
    } as PostMetaData;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Extract the first 150 characters as an excerpt
  const excerpt = content.slice(0, 150) + ' ...';

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    contentHtml,
    excerpt,
    coverImage: data.coverImage, 
  };
}
