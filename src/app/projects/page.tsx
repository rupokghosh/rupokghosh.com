import React from "react";
import Nav from "@/components/navigation";
import ProjectCard from "@/components/projectCard";

const Projects = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-12 mb-20 dark:text-gray-400">
        <div className="flex flex-col gap-6 md:w-full md:max-w-4xl text-center md:text-left">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>
            Here are some of the projects that I have worked on or currently
            working on.
          </p>
          <hr className="border-gray-400 my-6" />
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
            <ProjectCard
              title="Build It"
              description="A habit tracker application that helps you track your habits and build new ones using SMART goals."
              link="https://buildit-habitracker.netlify.app/"
              github="https://github.com/teambuildit/LandingPage"
            />
            <ProjectCard
              title="Spotistats"
              description="An app for users to view and share their in depth spotify statistics."
              link="https://spotistats-chi.vercel.app/"
              github="https://github.com/rupokghosh/Spotistats"
            />
            <ProjectCard
              title="Pixel Sketch "
              description="A pixel art drawing application that allows users to create pixel art ( One of my oldest projects ) "
              link="https://rupokghosh.github.io/pixel-sketch/"
              github="https://github.com/rupokghosh/pixel-sketch"
            />
            <ProjectCard
              title="TRU CS Course Graph"
              description="An application designed to visualize course data in a graphical format using ReactFlow library. This app allows users to explore courses and their dependencies through an interactive graph."
              link="https://trucourselist.netlify.app/"
              github="https://github.com/voage/TRUCSClassList"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
