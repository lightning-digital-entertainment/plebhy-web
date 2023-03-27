import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/library/userSlice';

// eslint-disable-next-line
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
