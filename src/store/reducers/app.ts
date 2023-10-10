import { Theme } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  theme: Theme;
  burger: boolean;
  selectDay: boolean;
  selectMonth: boolean;
  selectYear: boolean;
}

const initialState: IAppState = {
  theme: 'light',
  burger: false,
  selectDay: false,
  selectMonth: false,
  selectYear: false,
};

const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setBurger(state, action: PayloadAction<boolean>) {
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
  },
});

export default appSlice.reducer;

export const { setTheme, setBurger, setSelectMonth, setSelectDay, setSelectYear } = appSlice.actions;
