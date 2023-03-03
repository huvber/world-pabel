import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import { auth } from './firebase';
import { user } from '../stores/user';

const provider = new GoogleAuthProvider();

export const signIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const authUser = result.user;
    user.set(authUser);
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  auth.signOut();
  user.set(null);
};

onAuthStateChanged(auth, (userAuthData) => {
  if (userAuthData) {
    user.set(userAuthData);
  } else {
    user.set(null);
  }
});
