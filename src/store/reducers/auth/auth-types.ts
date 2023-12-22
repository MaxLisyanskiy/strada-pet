import { SerializedError } from '@reduxjs/toolkit';

export interface IUserInfo {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
}

export interface initialStateTypes {
  loading: boolean;
  userInfo: IUserInfo | null;
  userToken: string;
  error: string | undefined | SerializedError;
  success: string | number;
}

export interface RegisterUserArgs {
  username: string;
  email: string;
  password: string;
}
export interface LoginUserArgs {
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  user: IUserInfo;
}
export interface LoginUserResponse {
  user: IUserInfo;
}
