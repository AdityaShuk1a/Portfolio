import styles from "../styles/lastPage.module.css";

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
          <div className={styles.card}>
            <h1 className={styles.cardText}>START A PROJECT</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.cardText}>SAY HI</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
