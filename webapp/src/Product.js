import React from "react";
import { Card, Image } from "react-bootstrap";
import { generateProductId } from "./utils";

const Product = ({ product }) => {
  const { name, company, category, price, rating, discount, availability, image } = product;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {company} - {category}
        </Card.Subtitle>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Discount: {discount}%</Card.Text>
        <Card.Text>Availability: {availability ? "In Stock" : "Out of Stock"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;