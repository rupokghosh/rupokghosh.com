import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/components/navigation";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 md:mt-40 mt-12 mb-8 px-4">
        <Link href="https://twitter.com/rupokghosh291" passHref>
          <div className="flex flex-col gap-4 items-center justify-center w-full md:w-64 md:h-64 bg-black text-white rounded-lg md:border border-gray-600 shadow-lg cursor-pointer p-4 transition duration-300 hover:bg-gray-800">
            <FaTwitter size={48} />
            <h2 className="text-xl mt-4">Twitter</h2>
            <p className="text-md">@rupokghosh291</p>
          </div>
        </Link>
        <Link href="https://linkedin.com/in/rupokadin" passHref>
          <div className="flex flex-col gap-4 items-center justify-center w-full md:w-64 md:h-64 bg-black text-white rounded-lg md:border border-gray-600 shadow-lg cursor-pointer p-4 transition duration-300 hover:bg-gray-800">
            <FaLinkedin size={48} />
            <h2 className="text-xl mt-4">LinkedIn</h2>
            <p className="text-md">Rupok Ghosh</p>
          </div>
        </Link>
        <Link href="mailto:rupokghosh291@gmail.com" passHref>
          <div className="flex flex-col gap-4 items-center justify-center w-full md:w-64 md:h-64 bg-black text-white rounded-lg md:border border-gray-600 shadow-lg cursor-pointer p-4 transition duration-300 hover:bg-gray-800">
            <FaEnvelope size={48} />
            <h2 className="text-xl mt-4">Email</h2>
            <p className="text-md">rupokghosh291@gmail.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
