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
      <menu className={styles.menu}>
        <div className={styles.work}>
          Work
          <div className={styles.worksMenu}>
            <a href="/" className={styles.menuItem}>Books</a>
            <a href="/" className={styles.menuItem}>Cards</a>
          </div>
        </div>
        <a href="/" className={styles.menuItem}>Shop</a>
        <a href="/" className={styles.menuItem}>About</a>
        <a href="/" className={styles.menuItem}>Contact</a>
      </menu>
    </header>
  );
}
