import Link from "next/link";

const linkClasses =
  "text-lg transition-transform transform hover:-translate-y-1 hover:underline hover:text-whitegi text-rose-500";

function Nav() {
  return (
    <div className="flex justify-between items-center p-4 mx-8 my-4 text-gray-400">
      <Link href="/" className="text-5xl font-bold text-rose-500 ">
        r.
      </Link>
      <div className="md:hidden">
        <details className="relative">
          <summary className="text-3xl cursor-pointer list-none">☰</summary>
          <ul className="flex flex-col rounded-lg shadow-md mt-2 p-4 absolute right-0 bg-black">
            <li className="py-2">
              <Link href="/blog" className={linkClasses}>
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link href="/projects" className={linkClasses}>
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" className={linkClasses}>
                Contact
              </Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="hidden md:flex gap-8">
        <Link href="/blog" className={linkClasses}>
          Blog
        </Link>
        <Link href="/projects" className={linkClasses}>
          Projects
        </Link>
        <Link href="/contact" className={linkClasses}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
