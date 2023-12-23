import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './auth-actions';
import { initialStateTypes } from './auth-types';
import Cookies from 'js-cookie';

const infoAboutUser = Cookies.get('userInfo')
  ? JSON.parse(Cookies.get('userInfo') ?? '')
  : null;

const initialState: initialStateTypes = {
  loading: false,
  userInfo: infoAboutUser,
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
      state.error = '';
      Cookies.remove('userInfo');
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

        Cookies.set('userInfo', JSON.stringify(payload.data.user), {
          expires: 10,
        });
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

        Cookies.set('userInfo', JSON.stringify(payload.data.user), {
          expires: 10,
        });
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
