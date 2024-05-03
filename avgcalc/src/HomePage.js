import React from 'react';
import ProductList from './ProductList';
import { getTopProducts } from './ProductService';

const HomePage = () => {
  const topProducts = getTopProducts(10);

  return (
    <div className="main-content">
      <h1>Top 10 Products</h1>
      <ProductList products={topProducts} />
    </div>
  );
};

export default HomePage;