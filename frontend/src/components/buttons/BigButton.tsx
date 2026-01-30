import styles from "../../styles/lastPage.module.css";

interface BigButtonProps {
  text: string;
  action?: () => void;
}

const BigButton = ({ text, action }: BigButtonProps) => {
  return (
    <button 
        className={styles.card} 
        onClick={action ? action : () => {}}
    >
      <h1 className={styles.cardText}>{text}</h1>
    </button>
  );
};

export default BigButton;
