import styles from "../../styles/home.module.css";

const HomePagePart2 = () => {
  return (
    <div className="h-screen relative rounded-tl-[70px]  rounded-tr-[70px] flex items-center bg-white">
      <div className={styles.bg}></div>
      <div className={styles.bg1}></div>
      <div className={styles.bg2}></div>
      <div className="w-full text-center justify-items-center font-semibold" >
        <h1 className="text-black relative z-20 text-2xl md:text-[3vw] w-[65vw]" >
          SCALABLE FULL-STACK DEVELOPER AND DATA ANALYST SKILLED IN BUILDING
          EFFICIENT SERVERS AND DESIGNING CLEAN, MINIMALIST APPLICATIONS USING
          REACT, JAVASCRIPT, AND VITE.
        </h1>
      </div>
    </div>
  );
};

export default HomePagePart2;
