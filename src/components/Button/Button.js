import styles from './Button.module.scss';

const Button = ({ children, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>{children}</button>
  )
}

export default Button;