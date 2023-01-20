import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBRZkERPp4zioGrhM94Nki1taLdAAhylrA',
  authDomain: 'world-pabel-tour.firebaseapp.com',
  projectId: 'world-pabel-tour',
  storageBucket: 'world-pabel-tour.appspot.com',
  messagingSenderId: '878215294124',
  appId: '1:878215294124:web:fb96fa11463bc31e878309'
};

export const app = initializeApp(firebaseConfig);
