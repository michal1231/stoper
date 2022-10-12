import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const hours = Math.floor(time / 3600000).toString().padStart(2, '0');
  const minutes = ((Math.floor(time / 60000)) % 60).toString().padStart(2, '0');
  const seconds = ((Math.floor(time / 1000)) % 60).toString().padStart(2, '0');
  const miliseconds = (time % 1000).toString().padStart(3, '0');

  return (
    <div className={styles.timer}>
      <span>{hours}
        :{minutes}
        :{seconds}
        .{miliseconds}</span>
    </div>
  )
}

export default Timer;