import React, { FC } from 'react';
import { useAuth } from '../../hooks';
import { Button } from '../';
import styles from './SignInOptions.module.css';

interface Props {
  message: string;
}

export const SignInOptions: FC<Props> = ({ message }) => {
  const { startSignInWithGoogle, startLoginWithGithub } = useAuth();

  return (
    <>
      <p>
        <small>{message}</small>
      </p>

      <div className={styles['login-options']}>
        <Button styles={styles['login-option']} onPress={startSignInWithGoogle}>
          <i className="bx bxl-google"></i>
        </Button>
        <Button styles={styles['login-option']} onPress={startLoginWithGithub}>
          <i className="bx bxl-github"></i>
        </Button>
      </div>
    </>
  );
};
