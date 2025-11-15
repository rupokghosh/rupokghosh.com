import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

// Define a common className for links
const linkClassName = "underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="max-w-2xl mx-auto px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl mb-12 font-semibold tracking-tight">Rupok Ghosh Adin</h1>
      <div className="paragraphs flex flex-col gap-4 text-lg leading-relaxed">
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
      <div className="blogs mt-16">
        <h2 className="text-2xl font-semibold mb-8 tracking-tight">Writings</h2>
        <ul className="space-y-3">
          {allPostsData.map(({ slug, title }) => (
            <li key={slug}>
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
