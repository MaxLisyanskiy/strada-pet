import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { registerUser } from './auth-actions';

interface initialStateTypes {
  loading: boolean;
  userInfo: string;
  userToken: string;
  error: string | undefined | SerializedError;
  success: boolean;
}

const initialState: initialStateTypes = {
  loading: false,
  userInfo: '',
  userToken: '',
  error: '',
  success: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default authSlice.reducer;
