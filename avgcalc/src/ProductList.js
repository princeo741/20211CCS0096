import React, { useState, useEffect } from 'react';
import Product from './Product';
import { getTopProducts, getProductById } from './ProductService';
import Pagination from './Pagination';
import Filter from './Filter';
import Sort from './Sort';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [filter, setFilter] = useState({
      company: '',
      category: '',
      rating: 0,
      priceRange: [0, 100],
      availability: 'all',
    });
    const [sort, setSort] = useState({
      sortBy: 'price',
      order: 'asc',
    });
  
    useEffect(() => {
      const fetchProducts = async () => {
        const fetchedProducts = await getTopProducts(100);
        setProducts(fetchedProducts);
      };
  
      fetchProducts();
    }, []);
  
    // ...
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filter
              filter={filter}
              setFilter={setFilter}
              companies={['Company 1', 'Company 2', 'Company 3']}
              categories={['Category 1', 'Category 2', 'Category 3']}
            />
            <Sort sort={sort} setSort={setSort} />
          </div>
          <div className="col-md-9">
            <ProductListInner
              products={products}
              setSelectedProduct={setSelectedProduct}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={products.length}
              productsPerPage={productsPerPage}
            />
          </div>
        </div>
      </div>
    );
  };
  const ProductListInner = ({ products, setSelectedProduct, currentPage, productsPerPage }) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    return (
      <>
        <div className="row">
          {currentProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Product
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>
      </>
    );
  };
export default ProductList;