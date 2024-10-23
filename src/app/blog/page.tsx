// src/app/blog/page.tsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Nav from "@/components/navigation";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="dark">
      <Nav />
      <div className="md:w-full md:max-w-4xl mx-auto">
        
        <h1 className="text-xl font-bold mb-4 text-center dark:text-gray-400 md:text-left w-full">
         I write sometimes
        </h1>
        <ul className="list-disc pl-5">
          {allPostsData.map(({ slug, title }) => (
            <li key={slug} className="mb-2">
              <Link href={`/blog/${slug}`}>
                <div className="text-rose-500 hover:underline">
                  {title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
