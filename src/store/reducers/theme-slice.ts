import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState } from '../../interface/reducer-interface';

const initialState: NewsState = {
  userTheme: false,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.userTheme = action.payload;
    },
  },
});

export interface RootState {
  theme: NewsState;
}

export const { toggleTheme } = themeReducer.actions;

export default themeReducer.reducer;
