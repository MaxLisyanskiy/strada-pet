import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { articlesAPI, tagsAPI } from '../services/articles-api';
import themeReducer from './reducers/theme-slice';
import authSlice from './reducers/auth/auth-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authSlice,
  [articlesAPI.reducerPath]: articlesAPI.reducer,
  [tagsAPI.reducerPath]: tagsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articlesAPI.middleware, tagsAPI.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
