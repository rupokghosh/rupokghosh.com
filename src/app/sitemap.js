// app/sitemap.js

import { getSortedPostsData } from "../lib/posts";

const URL = "https://rupokghosh.com";

export default function sitemap() {
  const posts = getSortedPostsData().map(({ slug, date }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: date,
  }));

  const routes = ["", "/contact", "/projects", "/blogs"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
