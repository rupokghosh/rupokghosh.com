import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 h-screen text-center">
      <nav className="flex justify-between items-center gap-8">
        <Link href="/project" className="mx-2 text-gray-400 hover:underline">
          Project
        </Link>
        <Link href="/about" className="mx-2 text-gray-400 hover:underline">
          About
        </Link>
        <Link href="/contact" className="mx-2 text-gray-400 hover:underline">
          Contact
        </Link>
        <Link href="/blog" className="mx-2 text-gray-400 hover:underline">
          Blog
        </Link>
      </nav>
      <h1 className="text-6xl font-bold">rupok ghosh.</h1>
      <h3 className="text-gray-400 mt-3">
        software engineer, writer, and creator. 
      </h3>
    </main>
  );
}
