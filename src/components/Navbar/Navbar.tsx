import { useAuth } from '../../hooks';
import { Button } from '../ui/Button/Button';
import styles from './Navbar.module.css';
import placeholder from '../../assets/placeholder.png';
import { User } from '../../interface';

export const Navbar = () => {
  const { startLogout, user } = useAuth();

  const { photoURL, displayName } = user as User;

  const logout = () => {
    startLogout();
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.profile}>
        <img
          src={photoURL ? photoURL : placeholder}
          alt={displayName!}
          referrerPolicy="no-referrer"
          className={styles['profile-picture']}
        />
        <h2 className={styles['profile-name']}>{displayName}</h2>
      </div>
      <Button onPress={logout} styles={styles['logout-button']}>
        <i className="bx bx-log-out" style={{ fontSize: '1.75rem' }}></i>
        <span>
          Logout
        </span>
      </Button>
    </header>
  );
};
