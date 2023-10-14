import { IPost, IPostDB, IUser } from '@appTypes';
import { DatabaseRefs } from '@appTypes/enums';
import { getLikesList } from '@utils/helpers/common';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  equalTo,
  get,
  orderByChild,
  push,
  query,
  ref,
  remove,
  serverTimestamp,
  update,
} from 'firebase/database';

import { database, databaseRefs } from '../../firebase';

class Database {
  private postsRef;
  private userRef;
  private auth = getAuth();

  constructor() {
    this.postsRef = databaseRefs.posts;
    this.userRef = databaseRefs.users;
  }

  private async getPostData(id: number) {
    const postQuery = query(databaseRefs.posts, orderByChild('id'), equalTo(id));

    const snapshot = await get(postQuery);
    const post = snapshot.val();
    const postKey = Object.keys(post)[0];

    return { post, postKey };
  }

  async addPost(post: IPost) {
    const postData: IPostDB = {
      ...post,
      timestamp: serverTimestamp(),
    };

    await push(this.postsRef, postData);
  }

  async addUser(userData: IUser) {
    const user: IUser = {
      ...userData,
    };
    await push(this.userRef, user);
  }

  async getUserPosts(uid: string): Promise<IPostDB[]> {
    const userPostsQuery = query(databaseRefs.posts, orderByChild('user'), equalTo(uid));

    try {
      const snapshot = await get(userPostsQuery);

      if (snapshot.exists()) {
        const userPosts: IPostDB[] = Object.values(snapshot.val());
        return userPosts.sort((a, b) => (b.timestamp as number) - (a.timestamp as number));
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }

  async getIsUserAlredyExist(email: string) {
    const emailQuery = query(databaseRefs.users, orderByChild('email'), equalTo(email));
    const response = await get(emailQuery);
    return response.exists();
  }

  async getGoogleAuth() {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(this.auth, provider);
    return response.user;
  }

  async getAuthWithEmailAndPass(email: string, password: string) {
    const response = await createUserWithEmailAndPassword(this.auth, email, password);
    return response.user;
  }

  async getSignInWithEmailAndPassword(email: string, password: string) {
    const response = await signInWithEmailAndPassword(this.auth, email, password);
    return response.user;
  }

  async setPostLike(userPost: IPostDB, uid: string) {
    const { id } = userPost;
    const { post, postKey } = await this.getPostData(id);

    const updates: { [key: string]: object } = {};
    const likesList = getLikesList(post[postKey].likes, uid);

    updates[`/${postKey}/likes`] = likesList;
    update(this.postsRef, updates);
    return likesList;
  }

  async removePost(userPost: IPostDB) {
    const { postKey } = await this.getPostData(userPost.id);
    await remove(ref(database, DatabaseRefs.POSTS + `/${postKey}`));
  }
}

export const firebaseDB = new Database();
