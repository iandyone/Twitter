import appReducer from '@reducers/app';
import postsReducer from '@reducers/posts';
import userReducer from '@reducers/user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
