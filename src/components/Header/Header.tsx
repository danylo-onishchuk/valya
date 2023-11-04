import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={'img/pes.jpg'}
        alt="pes"
        className={styles.titleImg}
      />
      <div className={styles.title}>
        valentyna melnychuck
      </div>
      <Navigation />
    </header>
  );
}
