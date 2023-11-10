import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuItems}>
        <li className={styles.work}>
          Portfolio
          <br />
          <div className={styles.worksMenu}>
            <Link to="/books" className={styles.menuItem}>‣ Books</Link>
            <br />
            <Link to="/cards" className={styles.menuItem}>‣ Cards</Link>
          </div>
        </li>
        <li>
          <Link to="/shop" className={styles.menuItem}>Shop</Link>
        </li>
        <li>
          <Link to="/about" className={styles.menuItem}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={styles.menuItem}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
