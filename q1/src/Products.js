import React, { useEffect, useState } from 'react';
import { getProducts } from './api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Top 10 Laptops sold on AMZ for a price range 1 to 10,000</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.productName}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;