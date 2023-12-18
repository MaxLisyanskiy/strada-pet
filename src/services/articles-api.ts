import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../shared/constants';
import { IArticlesResponse } from '../types/articles-type';

interface GetAllArticlesParams {
  limit: number;
  offset: number;
}

export const articlesAPI = createApi({
  reducerPath: 'ArticlesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllArticles: builder.query<IArticlesResponse, GetAllArticlesParams>({
      query: ({ limit, offset }) => ({
        url: 'articles',
        params: {
          limit: limit ?? 10,
          offset: offset ?? 0,
        },
      }),
    }),
  }),
});
