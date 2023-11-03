import { AiFillInstagram, AiFillMail, AiOutlineCopyrightCircle } from 'react-icons/ai';
import styles from './Footer.module.scss';

export function Footer() {
  return (
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
  );
}
