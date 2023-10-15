import { DatabaseRefs } from '@appTypes/enums';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

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

export const database = getDatabase(app, import.meta.env.VITE_DB_URL);

export const databaseRefs = {
  posts: ref(database, DatabaseRefs.POSTS),
  users: ref(database, DatabaseRefs.USERS),
  userPosts: ref(database, DatabaseRefs.USER_POSTS),
};
