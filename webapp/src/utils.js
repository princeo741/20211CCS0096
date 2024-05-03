export const generateProductId = (product) => {
    return `${product.company}-${product.category}-${product.name}`;
  };