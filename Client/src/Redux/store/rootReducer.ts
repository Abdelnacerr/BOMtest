import {combineReducers} from '@reduxjs/toolkit';
import { productApiSlice } from '../Slices/productSlice';

export const rootReducer = combineReducers({
  [productApiSlice.reducerPath]: productApiSlice.reducer,
});
