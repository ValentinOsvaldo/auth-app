import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from '../firebase/firebase';
import { RootState } from '../store/store';
import { onLogin, onLogout } from '../store';

export const useCheckout = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(onLogout());

      const { displayName, photoURL, uid } = user;
      dispatch(onLogin({ displayName, uid, photoURL }));
    });
  }, []);

  return status;
};
