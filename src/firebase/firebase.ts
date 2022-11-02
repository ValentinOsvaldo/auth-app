// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env['VITE_APIKEY'],
  authDomain: 'auth-app-20d2b.firebaseapp.com',
  projectId: 'auth-app-20d2b',
  storageBucket: 'auth-app-20d2b.appspot.com',
  messagingSenderId: '818840257758',
  appId: '1:818840257758:web:41bc777559b9c824c6ee4f',
};

// Initialize Firebase
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth: Auth = getAuth(firebaseApp);
export const firebaseDB: Firestore = getFirestore(firebaseApp);
