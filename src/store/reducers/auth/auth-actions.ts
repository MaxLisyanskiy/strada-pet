import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../shared/constants';

interface RegisterUserArgs {
  username: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  RegisterUserArgs,
  { rejectValue: string }
>(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post<RegisterUserResponse>(
        `${API_URL}/users`,
        {
          user: {
            username,
            email,
            password,
          },
        },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
