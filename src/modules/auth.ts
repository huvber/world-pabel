import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  type AuthError,
  type User
} from 'firebase/auth';
import { getContext, hasContext, setContext } from 'svelte';
import { app } from './firebase';

type Credentials = {
  user?: User;
  token?: string;
  error?: { code: string; message: string };
};

export const signIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const token = credentials?.accessToken;
    const user = result.user;
    setContext<Credentials>('credentials', { token, user });
  } catch (e) {
    const error: AuthError = e as AuthError;
    setContext<Credentials>('credentials', { error: { code: error.code, message: error.message } });
  }
};

export const isLogged = () =>
  hasContext('credentials') && !!getContext<Credentials>('credentials').token;
export const getUser = () =>
  hasContext('credentials') && !!getContext<Credentials>('credentials').user;
export const getError = () =>
  hasContext('credentials') && !!getContext<Credentials>('credentials').error;
