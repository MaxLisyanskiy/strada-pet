import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
