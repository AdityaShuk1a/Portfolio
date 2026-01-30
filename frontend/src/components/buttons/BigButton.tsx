import styles from "../../styles/lastPage.module.css";

interface BigButtonProps {
    text: string;
}

const BigButton = ({text}: BigButtonProps) => {
  return (
    <button className={styles.card}>
      <h1 className={styles.cardText}>{text}</h1>
    </button>
  );
};

export default BigButton;
