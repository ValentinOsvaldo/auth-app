import { FC } from 'react';
import styles from './Input.module.css';

interface Props {
  type: React.HTMLInputTypeAttribute;
  name?: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  value?: string | number;
}

export const Input: FC<Props> = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      {!!label && <label className={styles.label}>{label}</label>}
      <div className={styles['textfield-container']}>
        <input
          type={type}
          className={styles.textfield}
          placeholder={placeholder}
          autoCapitalize="off"
          name={name}
          onChange={onChange}
          value={value}
        />
        <span></span>
      </div>
    </>
  );
};
