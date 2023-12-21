import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../shared/constants';
import { IArticlesResponse } from '../types/articles-type';
import { TagsResponse } from '../types/tags-type';

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

export const tagsAPI = createApi({
  reducerPath: 'TagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllTags: builder.query<TagsResponse, void>({
      query: () => ({
        url: 'tags',
      }),
    }),
  }),
});
