import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './auth-actions';
import { initialStateTypes } from './auth-types';

const initialState: initialStateTypes = {
  loading: false,
  userInfo: null,
  userToken: '',
  error: '',
  success: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.userInfo = null;
      state.success = '';
      state.userToken = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload.status;
        state.userInfo = payload.data.user;
        state.userToken = payload.data.user.token;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload.status;
        state.userInfo = payload.data.user;
        state.userToken = payload.data.user.token;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
