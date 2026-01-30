import styles from "../styles/lastPage.module.css";
import BigButton from "../components/buttons/BigButton";

const LastPage = () => {
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
          <BigButton text="START A PROJECT"/>
          <BigButton text="SAY HI"/>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
