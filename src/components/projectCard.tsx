import { FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github?: string; // Optional GitHub link
}

function ProjectCard({ title, description, link, github }: ProjectCardProps) {
  return (
    <div className="relative bg-gray-400 mx-8 sm:w-80 md:w-96 h-64 rounded-lg text-black border border-gray-800 shadow-lg transition duration-300 ease-in hover:bg-black hover:text-white hover:shadow-xl group">
      <div className="absolute top-2 right-2 p-2">
        {github ? (
          <Link href={github} passHref className="cursor-pointer">
            <FaGithub size={24} className="hover:text-white group-hover:text-rose-500" />
          </Link>
        ) : (
          <FaGithub size={24} className="text-gray-800" />
        )}
      </div>
      <div className="p-4 h-full flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl font-bold group-hover:text-rose-500">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="absolute bottom-4 flex items-center text-md sm:text-lg bg-transparent cursor-pointer group-hover:text-rose-500 hover:underline">
            Explore <FaArrowRight className="ml-2 group-hover:text-rose-500" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
