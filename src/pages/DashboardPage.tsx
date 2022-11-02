import { useSelector } from 'react-redux';
import { Navbar } from '../components';
import { RootState } from '../store';
import { User } from '../interface';
import styles from '../styles/Dashboard.module.css';

export const DashboardPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { displayName } = user as User;

  return (
    <main className={styles['main-container']}>
      <Navbar />
      <section className={styles['main-dashboard']}>
        <h1>Welcome {displayName}</h1>
        <p>This app is under construction...</p>
      </section>
    </main>
  );
};
