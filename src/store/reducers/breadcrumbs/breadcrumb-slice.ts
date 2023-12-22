import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breadcrumbHistory: [{}],
};

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState,
  reducers: {
    setCurrentPath: (state, action) => {
      state.breadcrumbHistory = action.payload;
    },
    clearBreadcrumbHistory: (state) => {
      state.breadcrumbHistory = [];
    },
  },
});

export const { setCurrentPath, clearBreadcrumbHistory } =
  breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
