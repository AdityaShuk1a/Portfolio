import styles from "../styles/default_home.module.css";

const DefaultHomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.nameRow}>
          <h1 className={styles.firstName}>ADITYA</h1>
          <h1 className={styles.lastName}>SHUKLA</h1>
        </div>
        <div className={styles.roleWrapper}>
          <h2 className={styles.role}>FULL STACK DEVELOPER</h2>
        </div>
      </div>
    </div>
  );
};

export default DefaultHomePage;
