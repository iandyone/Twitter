import { Theme } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  theme: Theme;
  burger: boolean;
  selectDay: boolean;
  selectMonth: boolean;
  selectYear: boolean;
  selectGender: boolean;
  tweetPopup: boolean;
  profilePopup: boolean;
  confirmPopup: boolean;
}

const initialState: IAppState = {
  theme: (localStorage.getItem('theme') as Theme) ?? 'light',
  burger: false,
  selectDay: false,
  selectMonth: false,
  selectYear: false,
  selectGender: false,
  tweetPopup: false,
  profilePopup: false,
  confirmPopup: false,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<Theme>) {
      state.theme = payload;
    },
    setMobileMenu(state, { payload }: PayloadAction<boolean>) {
      state.burger = payload ?? !state.burger;
    },
    setSelectDay(state, { payload }: PayloadAction<boolean>) {
      state.selectDay = payload ?? !state.selectDay;
    },
    setSelectMonth(state, { payload }: PayloadAction<boolean>) {
      state.selectMonth = payload ?? !state.selectMonth;
    },
    setSelectYear(state, { payload }: PayloadAction<boolean>) {
      state.selectYear = payload ?? !state.selectYear;
    },
    setTweetPopup(state, { payload }: PayloadAction<boolean>) {
      state.tweetPopup = payload ?? !state.tweetPopup;
    },
    setProfilePopup(state, { payload }: PayloadAction<boolean>) {
      state.profilePopup = payload ?? !state.profilePopup;
    },
    setSelectGender(state, { payload }: PayloadAction<boolean>) {
      state.selectGender = payload ?? !state.selectGender;
    },
    setConfirmPopup(state, { payload }: PayloadAction<boolean>) {
      state.confirmPopup = payload ?? !state.confirmPopup;
    },
  },
});

export default appSlice.reducer;

export const {
  setTheme,
  setMobileMenu,
  setSelectMonth,
  setSelectDay,
  setSelectYear,
  setSelectGender,
  setTweetPopup,
  setProfilePopup,
  setConfirmPopup,
} = appSlice.actions;
