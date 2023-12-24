import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../../../shared/constants';
import { RegisterUserResponse } from '../auth/auth-types';
import { UpdateUserArgs } from './user-types';

const config = {
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZ2FtZXJzdXBlcjgwMUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZyZWRkeXBvcGEifSwiaWF0IjoxNzAzMzY1NzA3LCJleHAiOjE3MDg1NDk3MDd9.VWhX00MVwowT2HXVrAo1iCAuPNVfUd7Cs5v4TmwbxR4',
    'Content-Type': 'application/json',
  },
};

export const updateUser = createAsyncThunk<
  AxiosResponse<RegisterUserResponse>,
  UpdateUserArgs,
  {
    rejectValue: SerializedError;
  }
>(
  'user/update',
  async ({ email, password, username, bio, image }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/user`,
        {
          user: {
            email,
            password,
            username,
            bio,
            image,
          },
        },
        config
      );

      return response;
    } catch (err) {
      const error = err as AxiosError;

      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
          message: 'bad (',
        });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
