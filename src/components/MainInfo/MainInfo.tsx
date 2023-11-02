import styles from './MainInfo.module.scss';

export function MainInfo() {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.info}>Valya is the best artist in the world!</div> 
      <img 
        src={'img/valya.jpg'}         
        alt='photoValya' 
        className={styles.mainPhoto}     
      />
    </div>
  );
}
