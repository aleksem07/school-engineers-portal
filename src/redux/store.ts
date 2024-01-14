import { configureStore } from '@reduxjs/toolkit';
import pathSlice from './pathSlice/pathSlice';

export const store = configureStore({
  reducer: {
    path: pathSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
