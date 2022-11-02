import { useContext, useState } from 'react';
import { AuthLayout } from '../layouts';
import { Alert, Button, Input, SignInOptions } from '../components';
import styles from '../styles/Auth.module.css';
import { Link } from 'react-router-dom';
import { useForm, useAuth } from '../hooks';

export const LoginPage = () => {
  const { startLoginWithEmailAndPassword, errorMessage } = useAuth();
  const { email, password, form, onChange } = useForm({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const onLogin = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const isFormCompleted = Object.values(form).every(
      (value) => value.length !== 0
    );

    if (!isFormCompleted)
      return setError('Required fields have not been completed');

    const emailRegExp = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    if (!emailRegExp.test(email)) return setError('Email not valid');

    startLoginWithEmailAndPassword(email, password);
  };

  return (
    <AuthLayout onSubmit={onLogin} title="Log in">
      <SignInOptions message="Login with with one of the following options" />

      <Input
        type="text"
        label="Email"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        name="password"
        value={password}
        onChange={onChange}
      />

      <Alert display={!!errorMessage}>{errorMessage}</Alert>

      <Alert display={!!error}>{error}</Alert>

      <Button styles={styles['submit-button']} type="submit">
        Log in
      </Button>

      <p style={{ textAlign: 'center' }}>
        <span style={{ color: '#ccc', fontWeight: 'normal' }}>
          Don't have an account?{' '}
        </span>
        <Link to="signup" style={{ fontWeight: '600' }}>
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
