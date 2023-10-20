import { IPostDB } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState {
  posts: IPostDB[];
  currentUser: IPostDB[];
}

const initialState: IUSerState = {
  posts: [],
  currentUser: [],
};

const userSlice = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {
    setUserPosts(state, { payload }: PayloadAction<IPostDB[]>) {
      state.currentUser = payload;
    },

    setFeedPosts(state, { payload }: PayloadAction<IPostDB>) {
      const isPostExists = state.posts.find(({ timestamp }) => timestamp === payload.timestamp);

      if (!isPostExists) {
        const postsList: IPostDB[] = [...state.posts, payload];
        state.posts = postsList.sort((a, b) => (b.timestamp as number) - (a.timestamp as number));
      }
    },

    updatePostLikes(state, { payload }: PayloadAction<{ postID: number; likes: string[] }>) {
      const { likes, postID } = payload;
      const post = state.posts.find((post) => post.id === postID);
      post.likes = likes;

      const updatedPostList = state.posts.filter((post) => post.id !== postID);
      updatedPostList.push(post);

      state.posts = updatedPostList.sort((a, b) => (b.timestamp as number) - (a.timestamp as number));
    },

    removePost(state, { payload }: PayloadAction<IPostDB>) {
      const { id } = payload;
      const updatedPostList = state.posts.filter((post) => post.id !== id);

      state.posts = updatedPostList.sort((a, b) => (b.timestamp as number) - (a.timestamp as number));
    },
  },
});

export const { setFeedPosts, setUserPosts, updatePostLikes, removePost } = userSlice.actions;

export default userSlice.reducer;
