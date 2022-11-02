import { FC } from 'react';
import styles from './ItemLayout.module.css';

interface Props {
  children: any;
}

export const ItemLayout: FC<Props> = ({ children }) => {
  return <div className={styles['dashboard-item']}>{children}</div>;
};
