import React from "react";

export default function Pagination({ productPerPage, allProduct, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pagination'>
      <ul>
        {pageNumbers &&
          pageNumbers.map((ev) => (
            <button key={ev} className='active' onClick={() => pagination(ev)}>
              {ev}
            </button>
          ))}
      </ul>
    </div>
  );
}
