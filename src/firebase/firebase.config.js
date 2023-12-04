import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPfQrclCvoyhLPOU8qEm_BnQwGwfZRjXc',
  authDomain: 'tech-camp-1864d.firebaseapp.com',
  projectId: 'tech-camp-1864d',
  storageBucket: 'tech-camp-1864d.appspot.com',
  messagingSenderId: '589397933769',
  appId: '1:589397933769:web:9bbb31572f86cd17e69718',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
