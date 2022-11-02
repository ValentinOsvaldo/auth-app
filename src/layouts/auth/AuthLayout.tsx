import { FC } from 'react';
import styles from './AuthLayout.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  onSubmit?: (ev: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthLayout: FC<Props> = ({ children, title, onSubmit }) => {
  return (
    <main className={styles['main-container']}>
      <form onSubmit={onSubmit} className={styles['form-container']}>
        <h1>{title}</h1>
        {children}
      </form>
    </main>
  );
};
