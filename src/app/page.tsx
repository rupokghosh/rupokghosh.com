import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

// Define a common className for links
const linkClassName = "text-blue-700 hover:underline";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="mt-12 mx-10 md:ml-48">
      <h1 className="text-4xl my-8 font-bold">Rupok Ghosh Adin</h1>
      <div className="paragraphs flex flex-col gap-3">
        <p>
          Forward deployed engineer at{" "}
          <Link href="https://www.delphi.ai/" className={linkClassName}>
            Delphi
          </Link>
          .
        </p>
        <p>
          Open source at{" "}
          <Link
            href="https://github.com/EpicenterHQ"
            target="_blank"
            className={linkClassName}
          >
            Epicenter
          </Link>
          , previously a software engineering intern at{" "}
          <Link href="https://www.shopify.com/ca" className={linkClassName}>
            Shopify
          </Link>
        </p>
        <p>At times, I find solace in writing. </p>
        <p>
          You can find me on
          <Link
            href="https://www.linkedin.com/in/rupokadin"
            target="_blank"
            className={linkClassName}
          >
            {" "}
            LinkedIn
          </Link>
          ,{" "}
          <Link
            href="https://x.com/rupokghosh291"
            target="_blank"
            className={linkClassName}
          >
            X
          </Link>
          , and email me{" "}
          <a href="mailto:rupokghosh291@gmail.com" className={linkClassName}>
            here
          </a>
          .
        </p>
      </div>
      <div className="blogs my-12">
        <h1 className="text-xl font-bold mb-8">Writings</h1>
        <ul className="list-disc pl-5">
          {allPostsData.map(({ slug, title }) => (
            <li key={slug} className="mb-2">
              <Link href={`/blog/${slug}`} className={linkClassName}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
