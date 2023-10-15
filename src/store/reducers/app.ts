import { Theme } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  theme: Theme;
  burger: boolean;
  selectDay: boolean;
  selectMonth: boolean;
  selectYear: boolean;
  tweetPopup: boolean;
  profilePopup: boolean;
}

const initialState: IAppState = {
  theme: (localStorage.getItem('theme') as Theme) ?? 'light',
  burger: false,
  selectDay: false,
  selectMonth: false,
  selectYear: false,
  tweetPopup: false,
  profilePopup: false,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.burger = action.payload ?? !state.burger;
    },
    setSelectDay(state, action: PayloadAction<boolean>) {
      state.selectDay = action.payload ?? !state.selectDay;
    },
    setSelectMonth(state, action: PayloadAction<boolean>) {
      state.selectMonth = action.payload ?? !state.selectMonth;
    },
    setSelectYear(state, action: PayloadAction<boolean>) {
      state.selectYear = action.payload ?? !state.selectYear;
    },
    setTweetPopup(state, action: PayloadAction<boolean>) {
      state.tweetPopup = action.payload ?? !state.tweetPopup;
    },
    setProfilePopup(state, action: PayloadAction<boolean>) {
      state.profilePopup = action.payload ?? !state.profilePopup;
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
  setTweetPopup,
  setProfilePopup,
} = appSlice.actions;
