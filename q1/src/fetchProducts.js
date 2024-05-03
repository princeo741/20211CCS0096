import { createAction } from 'redux-actions';
import { fetchProducts as fetchProductsAPI } from './api';

export const fetchProducts = createAction('FETCH_PRODUCTS', async (company, category, top, minPrice, maxPrice) => {
  const products = await fetchProductsAPI(company, category, top, minPrice, maxPrice);
  return products;
});