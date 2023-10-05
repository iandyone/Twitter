import { IUser } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState extends IUser {
  isAuthorized: boolean;
}

const initialState: IUSerState = {
  uid: null,
  email: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      const { uid, email } = action.payload;

      state.uid = uid;
      state.email = email;
      state.isAuthorized = true;
    },

    logoutUser(state) {
      state.uid = null;
      state.email = null;
      state.isAuthorized = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
