import { useState, useEffect } from "react";
import styles from "../styles/project.module.css";
import { PageRoutes } from "../routes/PageRoutes";
import medinivo from "../assets/projectsImage/medinivo.jpeg";
import chatAppImage from "../assets/projectsImage/chat-app.jpeg";
import catBoardImage from "../assets/projectsImage/cat-board.jpg";
import chaiCulture from "../assets/projectsImage/ChaiCulture.jpeg";

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
      Github: PageRoutes.Medinivo,
      desc: "A user friendly healthcare website..",
    },
    {
      id: 2,
      name: "CAT-BOARD",
      img: catBoardImage,
      Github: PageRoutes.Catboard,
      desc: "A leaderboard typing game which calculates your wpm and compares..",
    },
    {
      id: 3,
      name: "CHAT-APP",
      img: chatAppImage,
      Github: PageRoutes.Chatty,
      desc: "Real-time chat app using Socket.io and custom UI transitions",
    },
    {
      id: 4,
      img: chaiCulture,
      name: "Chai Culture UI",
      Github: PageRoutes.ChaiCulture,
      desc: "A freelanced Landing page UI for Chai Culture...",
    },
  ];
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // const handleShow = () => {
  //   showAll ? setShowAll(false) : setShowAll(true);
  // };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    isMobile ? projectWorks.slice(0, 2) : projectWorks;

  return (
    <section className={styles.section}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          MY <span>WORK</span>
        </h1>
      </div>
      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <a
            target="_blank"
            key={project.id}
            href={project.Github}
            className={styles.card}
            rel="noopener noreferrer"
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
        {/* <div className={styles.buttonWrapper}>
          <Button action={handleShow} />
        </div> */}
    </section>
  );
};

export default Projects;
