// src/lib/posts.ts
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

type PostMetaData = {
  title: string;
  date: string;
  description?: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
};

/**
 * Cache for git creation dates to avoid repeated git calls
 */
const gitDateCache = new Map<string, string | null>();

/**
 * Get the creation date of a post from git history
 * Uses the date when the file was first added to the repository
 */
function getGitCreationDate(filePath: string): string | null {
  // Check cache first
  if (gitDateCache.has(filePath)) {
    return gitDateCache.get(filePath) || null;
  }

  try {
    const gitCommand = `git log --follow --pretty=format:"%ci" --diff-filter=A -- "${filePath}"`;
    const gitOutput = execSync(gitCommand, {
      encoding: "utf-8",
      cwd: process.cwd(),
      stdio: ["pipe", "pipe", "ignore"], // Suppress stderr
      timeout: 5000, // 5 second timeout
    });

    const firstCommitDate = gitOutput.trim().split("\n")[0];
    if (firstCommitDate) {
      const date = new Date(firstCommitDate).toISOString().split("T")[0];
      gitDateCache.set(filePath, date);
      return date;
    }

    gitDateCache.set(filePath, null);
    return null;
  } catch {
    // Git command failed - cache the failure to avoid repeated attempts
    gitDateCache.set(filePath, null);
    return null;
  }
}

/**
 * Determine the post date using git creation date first, frontmatter as fallback
 * Priority: Git creation date > Frontmatter date > Current date
 */
function getPostDate(fileName: string, frontmatterDate?: string): string {
  // First: Try to get git creation date
  const fullPath = path.join(postsDirectory, fileName);
  const gitDate = getGitCreationDate(fullPath);
  if (gitDate) {
    return gitDate;
  }

  // Fallback: Use frontmatter date if available and valid
  if (frontmatterDate && /^\d{4}-\d{2}-\d{2}$/.test(frontmatterDate)) {
    return frontmatterDate;
  }

  // Last resort: Use current date
  return new Date().toISOString().split("T")[0];
}

export function getSortedPostsData(): PostMetaData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract the first 150 characters as an excerpt
    const excerpt = content.slice(0, 150) + " ...";

    // Get post date using git creation date with frontmatter fallback
    const postDate = getPostDate(fileName, data.date);

    return {
      slug,
      title: data.title,
      date: postDate,
      description: data.description,
      excerpt,
      coverImage: data.coverImage,
    } as PostMetaData;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Extract the first 150 characters as an excerpt
  const excerpt = content.slice(0, 150) + " ...";

  // Get post date using git creation date with frontmatter fallback
  const postDate = getPostDate(`${slug}.md`, data.date);

  return {
    slug,
    title: data.title,
    date: postDate,
    description: data.description,
    contentHtml,
    excerpt,
    coverImage: data.coverImage,
  };
}
