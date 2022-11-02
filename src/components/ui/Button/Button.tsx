import { FC } from 'react';
import ButtonStyles from './Button.module.css';

interface Props {
  children: any;
  styles?: string;
  onPress?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<Props> = ({
  onPress,
  children,
  styles,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onPress}
      className={`${ButtonStyles.button} ${!!styles ? styles : ''}`.trim()}
    >
      {children}
    </button>
  );
};
