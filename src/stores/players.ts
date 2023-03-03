import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../modules/firebase';

const collection = 'players';

type Player = {
  name?: string | null;
  level?: number | null;
  email?: string | null;
  uid: string;
  avatar?: string | null;
};

const create = async (player: Player) => {
  const ref = doc(db, collection, player.uid);
  const item = await getDoc(ref);
  if (item.exists()) throw new Error('player already exists');
  await setDoc(ref, player);
};

export const player = {
  create
};
