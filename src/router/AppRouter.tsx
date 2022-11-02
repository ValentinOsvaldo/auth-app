import { Routes, Route, Navigate } from 'react-router-dom';
import { ActivityIndicator } from '../components';
import { LoginPage, DashboardPage, SignInPage } from '../pages';
import { useCheckout } from '../hooks';

export const AppRouter = () => {
  const status = useCheckout();

  if (status === 'checking') {
    return <ActivityIndicator />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth">
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignInPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </Route>
          <Route path="/*" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes>
  );
};
