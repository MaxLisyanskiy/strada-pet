import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { articlesAPI, tagsAPI, gerCurrentPost } from '../services/articles-api';
import { getCommentaries } from '../services/comments-api';
import themeReducer from './reducers/theme-slice';
import authSlice from './reducers/auth/auth-slice';
import breadcrumbSlice from './reducers/breadcrumbs/breadcrumb-slice';
import tagNameSlice from './reducers/tag-slice';
import userSlice from './reducers/user/user-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authSlice,
  user: userSlice,
  breadcrumb: breadcrumbSlice,
  tagName: tagNameSlice,
  [articlesAPI.reducerPath]: articlesAPI.reducer,
  [tagsAPI.reducerPath]: tagsAPI.reducer,
  [gerCurrentPost.reducerPath]: gerCurrentPost.reducer,
  [getCommentaries.reducerPath]: getCommentaries.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        articlesAPI.middleware,
        tagsAPI.middleware,
        gerCurrentPost.middleware,
        getCommentaries.middleware
      ),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
