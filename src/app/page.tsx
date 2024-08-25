"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 h-screen text-center">
      <nav className="flex justify-between items-center md:gap-8">
        <Link href="/blog" className="mx-2 text-gray-400 hover:underline">
          Blog
        </Link>
        <Link href="/projects" className="mx-2 text-gray-400 hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="mx-2 text-gray-400 hover:underline">
          Contact
        </Link>
      </nav>
      <h1 className=" text-4xl md:text-6xl font-bold">
        <ReactTyped
          strings={["rupok ghosh."]}
          typeSpeed={50}
          showCursor={false}
        />
      </h1>
      <h3 className="text-gray-400 mt-3">
        software engineer, writer, and creator.
      </h3>
    </main>
  );
}
