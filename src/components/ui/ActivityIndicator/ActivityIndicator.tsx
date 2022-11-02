import styles from './ActivityIndicator.module.css';

export const ActivityIndicator = () => {
  return (
    <div className={styles.container}>
      <i className='bx bx-loader-alt'></i>
    </div>
  );
};
