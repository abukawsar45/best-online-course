import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.MY_apiKey,
  authDomain: import.meta.env.MY_authDomain,
  projectId: import.meta.env.MY_projectId,
  storageBucket: import.meta.env.MY_storageBucket,
  messagingSenderId: import.meta.env.MY_messagingSenderId,
  appId: import.meta.env.MY_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
