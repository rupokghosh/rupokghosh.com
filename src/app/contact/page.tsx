import Nav from "@/components/navigation";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const containerClasses =
  "flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 md:mt-40 mt-12 mb-8 px-4";
const cardClasses =
  "flex flex-col gap-4 items-center justify-center w-full md:w-64 md:h-64 bg-black text-white rounded-lg md:border border-gray-600 shadow-lg cursor-pointer p-4 transition duration-300 hover:bg-gray-800 group";
const iconSize = 48;
const titleClasses = "text-xl mt-4 group-hover:text-rose-500";
const textClasses = "text-md group-hover:text-rose-500";
const iconClasses = "group-hover:text-rose-500";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className={containerClasses}>
        <Link href="https://twitter.com/rupokghosh291" passHref>
          <div className={cardClasses}>
            <FaTwitter size={iconSize} className={iconClasses} />
            <h2 className={titleClasses}>Twitter</h2>
            <p className={textClasses}>@rupokghosh291</p>
          </div>
        </Link>
        <Link href="https://linkedin.com/in/rupokadin" passHref>
          <div className={cardClasses}>
            <FaLinkedin size={iconSize} className={iconClasses} />
            <h2 className={titleClasses}>LinkedIn</h2>
            <p className={textClasses}>Rupok Ghosh</p>
          </div>
        </Link>
        <Link href="mailto:rupokghosh291@gmail.com" passHref>
          <div className={cardClasses}>
            <FaEnvelope size={iconSize} className={iconClasses} />
            <h2 className={titleClasses}>Email</h2>
            <p className={textClasses}>rupokghosh291@gmail.com</p>
          </div>
        </Link>
        <Link href="https://github.com/rupokghosh" passHref>
          <div className={cardClasses}>
            <FaGithub size={iconSize} className={iconClasses} />
            <h2 className={titleClasses}>GitHub</h2>
            <p className={textClasses}>rupokghosh</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
