import React from "react";
import Nav from "@/components/navigation";

const Projects = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-12 text-gray-400">
        <div className="flex flex-col gap-6 md:w-full md:max-w-4xl text-center md:text-left">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>
            Here are some of the projects that I have worked on or currently working on.
          </p>
          <hr className="border-gray-400 my-6" />
          <div className="flex flex-col gap-4">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
