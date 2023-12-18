import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  userTheme: boolean;
}

const initialState: NewsState = {
  userTheme: false,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: NewsState, action: PayloadAction<boolean>) => {
      state.userTheme = action.payload;
    },
  },
});

export interface RootState {
  theme: NewsState;
}

export const { toggleTheme } = themeReducer.actions;

export default themeReducer.reducer;
