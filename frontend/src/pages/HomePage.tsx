import Projects from "./Projects";
import LastPage from "./LastPage";
import { ChevronDown } from "lucide-react";
import styles from "../styles/home.module.css";
import DefaultHomePage from "./DefaultHomePage";
import HomePagePart2 from "../components/home/HomePagePart2";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <DefaultHomePage />
      <div className={styles.content}>
        <section className={styles.chevronSection}>
          <ChevronDown size={50} />
        </section>
        <section className={styles.section}>
          <HomePagePart2 />
        </section>
        <section className={`${styles.projectSection} ${styles.section}`}>
          <Projects />
        </section>
        <section className={styles.section}>
          <LastPage />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
