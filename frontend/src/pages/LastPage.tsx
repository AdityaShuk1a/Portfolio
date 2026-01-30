import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../routes/PageRoutes";
import styles from "../styles/lastPage.module.css";
import BigButton from "../components/buttons/BigButton";

const LastPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`${styles.heading} ${styles.left}`}>
          LET&apos;S BUILD
        </h1>
        <h1 className={`${styles.heading} ${styles.right}`}>
          TOGETHER
        </h1>
        <div className={styles.actions}>
          <BigButton 
            text="START A PROJECT"
            action={() => navigate(PageRoutes.StartProject)} 
          />
          <BigButton 
            text="SAY HI"
            action={() => window.location.href = PageRoutes.Mail} 
          />
        </div>
      </div>
    </div>
  );
};

export default LastPage;
