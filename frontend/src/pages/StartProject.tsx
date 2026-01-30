import styles from "../styles/start_project.module.css";

const StartProject = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formBox}>
        <h1>STAR A PROJECT</h1>
        <hr />
        <div className={styles.items}>
          <label htmlFor="name">NAME</label>
          <input id="name" type="text" placeholder="Your name" />
        </div>
        <div className={styles.items}>
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className={styles.items}>
          <label htmlFor="email">Contact Number</label>
          <input id="number" type="number" placeholder="+91 98334 34453" />
        </div>
        <div className={styles.items}>
          <label htmlFor="project">PROJECT TYPE</label>
          <select id="project" defaultValue="">
            <option value="" disabled>
              Select project type
            </option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App</option>
            <option value="backend">Backend / API</option>
            <option value="uiux">UI / UX Design</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className={styles.submitBtn}>
          START PROJECT
        </button>
      </form>
    </div>
  );
};

export default StartProject;
