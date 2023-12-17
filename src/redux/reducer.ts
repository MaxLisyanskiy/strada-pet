import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  userTheme: boolean;
}

const initialState: NewsState = {
  userTheme: false,
};

const reducer = createSlice({
  name: 'news',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.userTheme = action.payload;
    },
  },
});

export const { toggleTheme } = reducer.actions;

export default reducer.reducer;
