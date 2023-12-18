import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { articlesAPI } from '../services/articles-api';
import themeReducer from './reducers/theme-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  [articlesAPI.reducerPath]: articlesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articlesAPI.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
