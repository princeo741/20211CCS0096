import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import Product from "./Product";
import { generateProductId } from "./utils";
import { products } from "./data";

const defaultProduct = {
  company: "",
  category: "",
  name: "",
};

const ProductPage = () => {
  const product = products.find((p) => generateProductId(p) === "Company-A-Category-A-Product-1") || defaultProduct;

  return (
    <Container>
      <Product key={generateProductId(product)} product={product} />
    </Container>
  );
};

export default ProductPage;