import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { fetchProducts as fetchProductsAction } from './actions/fetchProducts';
import { updateFilters as updateFiltersAction } from './actions/updateFilters';
import { fetchProducts as fetchProductsAPI } from './api';
import { productReducer, filterReducer } from './reducers';
import AllProducts from './components/AllProducts';

const rootReducer = combineReducers({
  products: productReducer,
  filters: filterReducer,
});

const store = createStore(rootReducer);

const fetchProducts = async () => {
  const filters = {
    company: '',
    category: '',
    rating: '',
    priceRange: '',
    availability: '',
  };
  const products = await fetchProductsAPI(filters.company, filters.category, 10, filters.minPrice, filters.maxPrice);
  store.dispatch(fetchProductsAction(products));
};

store.dispatch(updateFiltersAction({
  company: 'AMZ',
  category: 'Phone',
  rating: '4',
  priceRange: '100-500',
  availability: 'yes',
}));

fetchProducts();

const App = () => (
  <Provider store={store}>
    <AllProducts />
  </Provider>
);

export default App;