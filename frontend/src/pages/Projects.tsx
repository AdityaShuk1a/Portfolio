import { useState, useEffect } from "react";
import styles from "../styles/project.module.css";
import medinivo from "../assets/projectsImage/medinivo.jpeg";
import chatAppImage from "../assets/projectsImage/chat-app.jpeg";
import catBoardImage from "../assets/projectsImage/cat-board.jpg";

interface ProjectWork {
  id: number;
  img: string;
  desc: string;
  name: string;
  Github: string;
}

const Projects = () => {
  const projectWorks: ProjectWork[] = [
    {
      id: 1,
      img: medinivo,
      name: "Medinivo",
      Github: "https://github.com/adityashukla04/catboard",
      desc: "Typing trainer with animated UI and real-time accuracy tracking",
    },
    {
      id: 2,
      name: "CAT-BOARD",
      img: catBoardImage,
      Github: "https://github.com/adityashukla04/servEase",
      desc: "Service marketplace with scalable backend and user authentication",
    },
    {
      id: 3,
      name: "CHAT-APP",
      img: chatAppImage,
      Github: "https://github.com/adityashukla04/realtime-chat-app",
      desc: "Real-time chat app using Socket.io and custom UI transitions",
    },
    {
      id: 4,
      name: "NEVER-NOTE",
      Github: "https://github.com/adityashukla04/portfolio",
      desc: "Minimalist portfolio with GSAP animations and responsive layout",
      img: "https://wallup.net/wp-content/uploads/2018/10/06/708149-kittens-kitten-cat-cats-baby-cute-s.jpg",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    isMobile && !showAll ? projectWorks.slice(0, 2) : projectWorks;

  return (
    <section className={styles.section}>
      {/* Title */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          MY <span>WORK</span>
        </h1>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={project.Github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={project.img} alt={project.name} />
            </div>

            <div className={styles.content}>
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className={styles.buttonWrapper}>
        <button onClick={() => setShowAll(true)}>View All Projects</button>
      </div>
    </section>
  );
};

export default Projects;
