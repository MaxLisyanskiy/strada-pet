import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../../../shared/constants';

interface RegisterUserArgs {
  username: string;
  email: string;
  password: string;
}

interface RegisterUserResponse {}

export const registerUser = createAsyncThunk<
  AxiosResponse<RegisterUserResponse>,
  RegisterUserArgs,
  {
    rejectValue: SerializedError;
  }
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

      return response;
    } catch (err) {
      const error = err as AxiosError;

      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
          message: 'Email or username has already been taken',
        });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
