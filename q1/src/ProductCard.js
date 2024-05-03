import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`https://picsum.photos/id/${product.id}/200/300`} alt={product.name} />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}</p>
        <p>Availability: {product.availability}</p>
      </div>
    </div>
  );
};

export default ProductCard;