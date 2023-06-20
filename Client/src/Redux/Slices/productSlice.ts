import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/product';
import { productsEndPoint } from '../../settings/endpoints';

const token = '';

export const productApiSlice = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: productsEndPoint,
    prepareHeaders: headers => {

      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['product'],
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/`,
    }),
  }),
});

export const {useGetProductsQuery} = productApiSlice;
