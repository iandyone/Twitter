import { IUser, IUserProfileData } from '@appTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUSerState extends IUser {
  isAuthorized: boolean;
}

const initialState: IUSerState = {
  uid: null,
  email: null,
  name: null,
  surname: null,
  gender: null,
  telegram: null,
  birthday: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      const { uid, email, birthday } = action.payload;
      state.uid = uid;
      state.email = email;
      state.birthday = birthday;
      state.isAuthorized = true;
    },
    logoutUser(state) {
      state.uid = null;
      state.email = null;
      state.isAuthorized = false;
    },
    setUserProfile(state, action: PayloadAction<IUserProfileData>) {
      const { gender, name, surname, telegram } = action.payload;
      if (gender) state.gender = gender;
      if (name) state.name = name;
      if (surname) state.surname = surname;
      if (telegram) state.telegram = telegram;
    },
  },
});

export const { setUser, logoutUser, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
