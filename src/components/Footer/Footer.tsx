import { AiFillInstagram, AiFillMail, AiOutlineCopyrightCircle } from 'react-icons/ai';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a 
          href="https://www.instagram.com/valentyna_melnychuck" 
          target="_blanc"
          className={styles.icon}
        >
          <AiFillInstagram size={32} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinaartislife@gmail.com"
          target="_blank" 
          rel="noreferrer"
          className={styles.iconEmail}
        >
          <AiFillMail size={32} />
        </a>
      </div>

      <div className={styles.copyright}>
        <AiOutlineCopyrightCircle />
        by Valentyna Melnychuck
      </div>
    </footer>
  );
}

