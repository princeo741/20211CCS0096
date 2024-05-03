import React from 'react';

const Pagination = ({ pagination, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const { currentPage, pageSize } = pagination;
  const totalPages = Math.ceil(products.length / pageSize);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;