import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseAuth } from '../firebase';
import {
  RootState,
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
} from '../store';

export const useAuth = () => {
  const { user, status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const startSignInWithGoogle = async () => {
    try {
      onChecking();
      const { user } = await signInWithPopup(firebaseAuth, googleProvider);

      const { displayName, photoURL, uid } = user;

      dispatch(onLogin({ displayName, photoURL, uid }));
    } catch (error: any) {
      console.error(error);
      dispatch(onLogout(error?.message));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startLoginWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      onChecking();
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      const { uid, displayName, photoURL } = user;

      dispatch(
        onLogin({
          uid,
          displayName,
          photoURL,
        })
      );
    } catch (error: any) {
      console.error(error);
      dispatch(onLogout(error?.message));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startLoginWithGithub = async () => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, githubProvider);

      const { displayName, photoURL, uid } = user;

      dispatch(onLogin({ displayName, photoURL, uid }));
    } catch (error: any) {
      console.error(error);
      dispatch(onLogout(error?.message));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startRegisterEmailAndPassword = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      dispatch(onChecking());

      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await updateProfile(user, { displayName });

      dispatch(
        onLogin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        })
      );
    } catch (error: any) {
      console.error(error);
      dispatch(onLogout(error?.message));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startLogout = async () => {
    try {
      await firebaseAuth.signOut();

      dispatch(onLogout());
    } catch (error: any) {
      console.error(error);
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  return {
    user,
    status,
    errorMessage,
    startRegisterEmailAndPassword,
    startLogout,
    startLoginWithEmailAndPassword,
    startSignInWithGoogle,
    startLoginWithGithub,
  };
};
