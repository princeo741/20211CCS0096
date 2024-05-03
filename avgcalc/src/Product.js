import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Company: {product.company}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Price: {product.price}</p>
        <p className="card-text">Rating: {product.rating}</p>
        <p className="card-text">Discount: {product.discount}</p>
        <p className="card-text">Availability: {product.availability}</p>
      </div>
    </div>
  );
};

export default Product;