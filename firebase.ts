import { DatabaseRefs } from '@appTypes/enums';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { getStorage, ref as fileRef } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage();

export const database = getDatabase(app, import.meta.env.VITE_DB_URL);

export const databaseRefs = {
  posts: ref(database, DatabaseRefs.POSTS),
  users: ref(database, DatabaseRefs.USERS),
  userPosts: ref(database, DatabaseRefs.USER_POSTS),
  images: fileRef(storage, 'images'),
};

export function createMediaRef(name: string | number) {
  return fileRef(storage, `images/${name}`);
}
