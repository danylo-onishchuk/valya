import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import styles from './MainLayout.module.scss';

interface LayoutProps {
  children: JSX.Element;
}

export const MainLayout =({children}: LayoutProps) =>{
  return(
    <div className={styles.page}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}
