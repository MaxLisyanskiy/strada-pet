import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../store/theme-slice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

type AppDispatch = typeof store.dispatch;

export type { AppDispatch };
export default store;
