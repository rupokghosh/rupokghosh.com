// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Nav from '@/components/navigation';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center gap-6 md:w-full md:max-w-4xl mx-auto">
        <hr className="border-gray-400 my-6 w-full" />
        <h1 className="text-2xl mb-6 text-center text-gray-400 md:text-left w-full">Recent blogs by Rupok:</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {allPostsData.map(({ slug, title, date, excerpt }) => (
            <li key={slug} className="p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-4 relative group">
              <Link href={`/blog/${slug}`} passHref>
                <div className="flex flex-col items-center hover:shadow-md rounded-md px-4 py-2 border-gray-600 transition duration-300 ease-in-out md:items-start md:h-full md:w-full cursor-pointer gap-4">
                  <div className="text-xl font-bold text-gray-400">{title}</div>
                  <p className="text-gray-400">{date}</p>
                  <p className="text-gray-600">{excerpt}</p>
                  <button className="flex items-center rounded text-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Continue Reading
                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
