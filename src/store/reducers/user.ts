import { IUser, IUserProfileData } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState extends IUser {
  isAuthorized: boolean;
}

const initialState: IUSerState = {
  uid: null,
  email: null,
  name: null,
  gender: null,
  telegram: null,
  birthday: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUser>) {
      const { uid, email, birthday, avatar, name, gender, telegram } = payload;
      state.uid = uid;
      state.email = email;
      state.birthday = birthday;
      state.avatar = avatar;
      state.name = name;
      state.gender = gender;
      state.telegram = telegram;
      state.isAuthorized = true;
    },
    logoutUser(state) {
      state.uid = null;
      state.email = null;
      state.isAuthorized = false;
    },
    setUserProfile(state, { payload }: PayloadAction<IUserProfileData>) {
      const { gender, name, telegram } = payload;
      if (gender) state.gender = gender;
      if (name) state.name = name;
      if (telegram) state.telegram = telegram;
    },
  },
});

export const { setUser, logoutUser, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
