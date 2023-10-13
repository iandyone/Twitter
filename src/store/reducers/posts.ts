import { IPostDB } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState {
  all: IPostDB[];
  currentUser: IPostDB[];
}

const initialState: IUSerState = {
  all: [],
  currentUser: [],
};

const userSlice = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {
    setUserPosts(state, action: PayloadAction<IPostDB[]>) {
      state.currentUser = action.payload;
    },

    setFeedPosts(state, action: PayloadAction<IPostDB>) {
      const isPostExists = state.all.find(({ timestamp }) => timestamp === action.payload.timestamp);

      if (!isPostExists) {
        const postsList: IPostDB[] = [...state.all, action.payload];
        state.all = postsList.sort((a, b) => (b.timestamp as number) - (a.timestamp as number));
      }
    },
  },
});

export const { setFeedPosts, setUserPosts } = userSlice.actions;

export default userSlice.reducer;
