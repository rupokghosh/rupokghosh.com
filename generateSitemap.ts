// scripts/generate-sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Define the interface for blog data
interface Blog {
  slug: string;
}

// Type guard to check if the data is Blog[]
function isBlogArray(data: unknown): data is Blog[] {
  return Array.isArray(data) && data.every(item => typeof item === 'object' && 'slug' in item);
}

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.rupokghosh.com' });

  // Fetch dynamic blog data
  const response = await fetch('https:/rupokghosh.com/blog');

  // Validate and cast the response data
  const data: unknown = await response.json();

  if (!isBlogArray(data)) {
    throw new Error('Fetched data is not of the expected format');
  }

  const blogs: Blog[] = data;

  // Add static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });
  sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.5 });

  // Add dynamic blog pages
  blogs.forEach((blog) => {
    sitemap.write({ url: `/blog/${blog.slug}`, changefreq: 'weekly', priority: 0.7 });
  });

  sitemap.end();
  const sitemapXML = await streamToPromise(sitemap);

  writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemapXML);
}

generateSitemap().catch(console.error);
