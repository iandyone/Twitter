import { Theme } from '@appTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  theme: Theme;
  burger: boolean;
}

const initialState: IAppState = {
  theme: 'light',
  burger: false,
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
  },
});

export default appSlice.reducer;

export const { setTheme, setBurger } = appSlice.actions;
