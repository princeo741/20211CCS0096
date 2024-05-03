import axios from 'axios';

const baseURL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${baseURL}/companies/${company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};