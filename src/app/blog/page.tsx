// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug} className="mb-4">
            <Link href={`/blog/${slug}`} className="text-2xl text-blue-500 hover:underline">
              {title}
            </Link>
            <p className="text-gray-600">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
