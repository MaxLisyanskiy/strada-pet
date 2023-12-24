import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './user-actions';
import { initialStateTypes } from '../auth/auth-types';
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload.status;
        state.userInfo = payload.data.user;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
