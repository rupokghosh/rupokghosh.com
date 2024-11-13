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
        <p>Full-time software engineer and part-time writer.</p>
        <p>I love building cool projects and solving hard problems.</p>
        <p>
          I am currently co-founding and building
          <Link
            href="https://www.sharp-render.com/"
            target="_blank"
            className={linkClassName}
          >
            {" "}
            Sharprender
          </Link>
          , a next-gen web performance monitoring tool.
        </p>
        <p>
          Some of my favorite projects include{" "}
          <Link
            href="https://buildit-habitracker.netlify.app/"
            target="_blank"
            className={linkClassName}
          >
            BuildIT
          </Link>
          ,{" "}
          <Link
            href="https://spotistats-chi.vercel.app"
            target="_blank"
            className={linkClassName}
          >
            Statsify
          </Link>{" "}
          and{" "}
          <Link
            href="https://trucourselist.netlify.app/"
            target="_blank"
            className={linkClassName}
          >
            TRU Course Graph
          </Link>
          . You can find my other notable projects on my{" "}
          <Link
            href="https://github.com/rupokghosh"
            target="_blank"
            className={linkClassName}
          >
            GitHub
          </Link>
          .
        </p>
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
          ,
          <Link
            href="https://twitter.com/rupokghosh291"
            target="_blank"
            className={linkClassName}
          >
            {" "}
            X
          </Link>
          , and email me{" "}
          <a href="mailto:rupokghosh291@gmail.com" className={linkClassName}>
            here
          </a>
          .
        </p>
        <p>
          You can find my notes
          <Link href="https://www.notion.so/rupokghosh/Notes-732320205a2b4a5bb3cabb2b62432236">
            here.
          </Link>
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
