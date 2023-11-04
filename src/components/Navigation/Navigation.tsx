import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.menu}>
      <div className={styles.work}>
        Portfolio
        <br/>
        <div className={styles.worksMenu}>
          <a href="/" className={styles.menuItem}>‣ Books</a>
          <br/>
          <a href="/" className={styles.menuItem}>‣ Cards</a>
        </div>
      </div>
      <a href="/" className={styles.menuItem}>Shop</a>
      <a href="/" className={styles.menuItem}>About</a>
      <a href="/" className={styles.menuItem}>Contact</a>
    </nav>
  );
}
