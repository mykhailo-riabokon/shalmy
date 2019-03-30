import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const { totalItems, currentItem, handlePaginationClick } = props;
  
  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        disabled={currentItem <= 1}
        onClick={() => handlePaginationClick('prev')}
      >
        Previous Question
      </button>

      <button
        className="Pagination-button"
        disabled={currentItem === totalItems}
        onClick={() => handlePaginationClick('next')}
      >
        Next Question
      </button>
    </div>
  );
}
  
export default Pagination;