import Link from "next/link";

function Nav() {
  return (
    <div className="flex justify-between items-center p-4 mx-8 my-4">
      <Link href="/" className="text-5xl font-bold">
        r.
      </Link>
      <div className="md:hidden">
        <details className="relative">
          <summary className="text-3xl cursor-pointer list-none">☰</summary>
          <ul className="flex flex-col rounded-lg shadow-md mt-2 p-4 absolute right-0">
            <li className="py-2">
              <Link href="/blog" className="text-lg">
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link href="/projects" className="text-lg">
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about" className="text-lg">
                About
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="hidden md:flex gap-8">
        <Link href="/blog" className="text-lg">
          Blog
        </Link>
        <Link href="/projects" className="text-lg">
          Projects
        </Link>
        <Link href="/about" className="text-lg">
          About
        </Link>
        <Link href="/contact" className="text-lg">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
