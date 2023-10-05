import { IUser } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState extends IUser {
  isAuthorized: boolean;
}

const initialState: IUSerState = {
  uid: null,
  email: null,
  accessToken: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      const { uid, email, accessToken } = action.payload;

      state.uid = uid;
      state.email = email;
      state.accessToken = accessToken;
      state.isAuthorized = true;
    },

    logoutUser(state) {
      state.uid = null;
      state.email = null;
      state.accessToken = null;
      state.isAuthorized = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
