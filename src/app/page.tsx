
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="mt-12 mx-10 md:ml-48">
      <h1 className="text-4xl my-8 font-bold">Rupok Ghosh Adin</h1>
      <div className="paragraphs flex flex-col gap-3 ">
        <p>I am a full time software engineer and a part time writer.</p>
        <p>I love building cool projects and solve hard problems.</p>
        <p>
          Some of my favorite projects include BuildIT, Statsify and TRU Course
          Graph and you can find my other notable projects on my GitHub.
        </p>
        <p>
          You can find me on
          <Link
            href="https://www.linkedin.com/in/rupokadin"
            target="_blank"
            className="text-blue-700"
          >
            {"  "}
            LinkedIn
          </Link>
          ,
          <Link
            href="https://twitter.com/rupokghosh291"
            target="_blank"
            className="text-blue-700"
          >
            {" "}
            X{" "}
          </Link>
          and email me{" "}
          <a href="mailto:rupokghosh291@gmail.com" className="text-blue-700">
            here.
          </a>
        </p>
      </div>
      <div className="blogs my-12">
        <h1 className="text-xl font-bold mb-8">
          Writings
        </h1>
        <ul className="list-disc pl-5">
          {allPostsData.map(({ slug, title }) => (
            <li key={slug} className="mb-2">
              <Link href={`/blog/${slug}`}>
                <div className=" text-blue-700 hover:underline">{title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
