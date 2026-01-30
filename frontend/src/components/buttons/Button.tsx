// import styles from '../styles/project.module.css';

interface ButtonProps {
    action: () => void;
}

const Button = ({action}: ButtonProps) => {
  return (
    <button onClick={action}>View All Projects</button>
  )
}

export default Button
