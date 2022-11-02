import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import { Alert, Button, Input, SignInOptions } from '../components';
import styles from '../styles/Auth.module.css';
import { useForm, useAuth } from '../hooks';

export const SignInPage: FC = () => {
  const { username, email, password, confirmedPassword, onChange } = useForm({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });
  const { startRegisterEmailAndPassword, errorMessage } = useAuth();
  const [error, setError] = useState<string>('');

  const onSignUp = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const emailRegExp = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const requiredFields = [username, email, password].every(
      (value) => value.length !== 0
    );

    if (!requiredFields) return setError('Incomplete form');

    if (!emailRegExp.test(email)) return setError('Not valid email');

    if (password !== confirmedPassword)
      return setError('Passwords do not match');

    startRegisterEmailAndPassword(email, password, username);
  };

  return (
    <AuthLayout title="Sign Up" onSubmit={onSignUp}>
      <SignInOptions message="Sign Up with with one of the following options" />

      <Input
        type="text"
        label="Name"
        placeholder="Guillermo Colin"
        name="username"
        value={username}
        onChange={onChange}
      />
      <Input
        type="text"
        label="Email"
        placeholder="gcolin@email.com"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Pick a strong password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        name="confirmedPassword"
        value={confirmedPassword}
        onChange={onChange}
      />

      <Alert display={!!errorMessage}>{errorMessage}</Alert>

      <Alert display={!!error}>{error}</Alert>

      <Button styles={styles['submit-button']} type="submit">
        Create Account
      </Button>

      <p style={{ textAlign: 'center' }}>
        <span style={{ color: '#ccc', fontWeight: 'normal' }}>
          Already have an account?{' '}
        </span>
        <Link to="/auth" style={{ fontWeight: '600' }}>
          Log In
        </Link>
      </p>
    </AuthLayout>
  );
};
