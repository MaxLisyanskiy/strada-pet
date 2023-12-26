import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../shared/constants';
import { CommentInterface } from '../types/comment-types';

export const getCommentaries = createApi({
  reducerPath: 'commentaries',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCommentaries: builder.query<CommentInterface, string>({
      query: (slug) => ({
        url: `articles/${slug}/comments`,
      }),
    }),
  }),
});
