import { productApiSlice } from "../Slices/productSlice";

export const middlewareArray = [
  productApiSlice.middleware,
];
