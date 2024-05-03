const products = [
    {
      id: 1,
      name: 'Product 1',
      company: 'Company 1',
      category: 'Category 1',
      price: 10.99,
      rating: 4.5,
      discount: 10,
      availability: 'In stock',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products here
  ];
  
  export const getTopProducts = (N) => {
    return products.slice(0, N);
  };
  
  export const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };