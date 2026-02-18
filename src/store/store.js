import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice';
import productsReducer from '../store/productsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer
  }
});
