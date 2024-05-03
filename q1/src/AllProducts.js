import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import Pagination from './Pagination';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    rating: '',
    priceRange: '',
    availability: '',
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts(filters.company, filters.category, pagination.pageSize, filters.minPrice, filters.maxPrice);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsData();
  }, [filters, pagination]);

  const handleFilterChange = (filter, value) => {
    setFilters({...filters, [filter]: value });
  };

  const handlePageChange = (page) => {
    setPagination({...pagination, currentPage: page });
  };

  return (
    <div>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default AllProducts;