import React, { useState, useEffect } from "react";
import catBoardImage from "../assets/projectsImage/cat-board.jpg";
import chatAppImage from "../assets/projectsImage/chat-app.jpeg";

interface ProjectWork {
  name: string;
  id: number;
  img: string;
  desc: string;
  Github: string;
}

const Projects = () => {
  const projectWorks: ProjectWork[] = [
    {
      id: 1,
      name: "SERV-EASE",
      img: "https://wallup.net/wp-content/uploads/2018/10/06/708149-kittens-kitten-cat-cats-baby-cute-s.jpg",
      desc: "Typing trainer with animated UI and real-time accuracy tracking",
      Github: "https://github.com/adityashukla04/catboard",
    },
    {
      id: 2,
      name: "CAT-BOARD",
      img: catBoardImage,
      desc: "Service marketplace with scalable backend and user authentication",
      Github: "https://github.com/adityashukla04/servEase",
    },
    {
      id: 3,
      name: "CHAT-APP",
      img: chatAppImage,
      desc: "Real-time chat app using Socket.io and custom UI transitions",
      Github: "https://github.com/adityashukla04/realtime-chat-app",
    },
    {
      id: 4,
      name: "NEVER-NOTE",
      img: "https://wallup.net/wp-content/uploads/2018/10/06/708149-kittens-kitten-cat-cats-baby-cute-s.jpg",
      desc: "Minimalist portfolio with GSAP animations and responsive layout",
      Github: "https://github.com/adityashukla04/portfolio",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = isMobile && !showAll ? projectWorks.slice(0, 2) : projectWorks;

  return (
    <section className="w-full min-h-screen flex flex-col bg-white items-center rounded-br-[70px] rounded-bl-[70px] overflow-hidden">
      {/* Title */}
      <div className="flex w-full items-center justify-center p-6">
        <h1 className="text-6xl md:text-9xl font-extrabold text-gray-900 text-center">
          MY <span className="text-gray-500">WORK</span>
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl px-6 grow">
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={project.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-fit rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-50"
          >
            <div className="relative w-full h-44 md:h-48 lg:h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 md:p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition">
                {project.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Button always inside the section */}
      <div className="flex justify-center mt-6 mb-10">
        <button
          onClick={() => setShowAll(true)}
          className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
