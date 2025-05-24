import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda a técnida pomodoro!</a>
      <a href='https://github.com/igorllee' target='_blank'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚 por:
        Igor Lee
      </a>
    </footer>
  );
}
