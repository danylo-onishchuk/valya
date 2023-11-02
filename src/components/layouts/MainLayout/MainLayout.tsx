import { AiFillInstagram, AiFillMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import styles from './MainLayout.module.scss';

interface LayoutProps {
  children: JSX.Element;
}

export const MainLayout =({children}: LayoutProps) =>{
  return(
    <div className={styles.page}>
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
          <a href="/" className={styles.menuItem}>Work</a>
          <a href="/" className={styles.menuItem}>IG</a>
          <a href="/" className={styles.menuItem}>Shop</a>
          <a href="/" className={styles.menuItem}>Info</a>
          <a href="/" className={styles.menuItem}>Contanct</a>
        </menu>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.icons}>
          <AiFillInstagram size={32} />
          <AiFillMail size={32} />
        </div>

        <div className={styles.copyright}>
          <AiOutlineCopyrightCircle />
          by Valentyna Melnychuck
        </div>
      </footer>
    </div>
  )
}
