import { IPost, IPostDB, IUser, IUserProfileData } from '@appTypes';
import { DatabaseRefs } from '@appTypes/enums';
import { createMediaRef, database, databaseRefs } from '@config/firebase';
import { getLikesList } from '@utils/helpers/common';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from 'firebase/auth';
import {
  endAt,
  equalTo,
  get,
  orderByChild,
  push,
  query,
  ref,
  remove,
  serverTimestamp,
  startAt,
  update,
} from 'firebase/database';
import { deleteObject, getDownloadURL, uploadBytes } from 'firebase/storage';

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

  async getUserData(uid: string) {
    const userQuery = query(databaseRefs.users, orderByChild('uid'), equalTo(uid));

    const snapshot = await get(userQuery);
    const userData = snapshot.val();
    const userKey = Object.keys(userData)[0];
    const user = Object.values(userData)[0];

    return { user, userKey };
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
      name: userData.uid,
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

  async getUsers(userName: string) {
    try {
      const usersQuery = userName
        ? query(this.userRef, orderByChild('name'), startAt(userName), endAt(userName + '\uf8ff'))
        : query(this.userRef);
      const response = await get(usersQuery);
      return response.val();
    } catch (error) {
      return {};
    }
  }

  async updateUserData(data: IUserProfileData, uid: string) {
    const { user, userKey } = await this.getUserData(uid);
    const updatedUserData = { ...(user as object), ...data };
    const updates: { [key: string]: object } = {};

    updates[`/${userKey}`] = updatedUserData;
    update(this.userRef, updates);
    return updatedUserData;
  }

  async uploadMedia(postID: number, file: File) {
    const mediaStorageRef = createMediaRef(postID);
    const data = await uploadBytes(mediaStorageRef, file);
    return data;
  }

  async downloadMedia(postID: number) {
    const mediaStorageRef = createMediaRef(postID);
    const data = await getDownloadURL(mediaStorageRef);
    return data;
  }

  async removeMedia(postID: number) {
    const mediaStorageRef = createMediaRef(postID);
    const data = await deleteObject(mediaStorageRef);
    return data;
  }

  async updateUserPassword(pass: string) {
    try {
      const user = this.auth.currentUser;

      if (user) {
        const data = await updatePassword(user, pass);
        return data;
      }
    } catch (error) {
      return null;
    }
  }
}

export const firebaseDB = new Database();
