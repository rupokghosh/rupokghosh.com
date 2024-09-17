import fs from 'fs';
import path from 'path';

export function getBlogPostPaths(): string[] {
  const blogDir = path.join(process.cwd(), 'posts'); // Adjust this path to your Markdown directory
  const fileNames = fs.readdirSync(blogDir);
  return fileNames
    .filter(file => file.endsWith('.md')) // Filter only Markdown files
    .map(file => {
      const slug = file.replace(/\.md$/, ''); // Remove the file extension
      return `/blog/${slug}`; // Generate URL path
    });
}
