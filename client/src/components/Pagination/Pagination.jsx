import React from "react";
import s from "./Pagination.module.css";
export default function Pagination({
  currentPage,
  productPerPage,
  allProduct,
  pagination,
}) {
  const pageNumbers = [];
  let numberPage = Math.ceil(allProduct / productPerPage)
  for (let i = 1; i <= Math.ceil(allProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pagination'>
      {currentPage > 1 ? (
        <button className={s.btn} onClick={() => pagination(currentPage - 1)}>&#9664;</button>
      ) : (
        <button className={s.btn}>&#9664;</button>
      )}
      {pageNumbers &&
        pageNumbers.map((ev) => (
          <button className={currentPage === ev ? s.active : s.btn} key={ev} onClick={() => pagination(ev)}>
            {ev}
          </button>
        ))}
      {currentPage < allProduct / productPerPage ? (
        <button className={s.btn} onClick={() => pagination(currentPage + 1)}>&#9654;</button>
      ) : (
        <button className={s.btn}>&#9654;</button>
      )}
    </div>
  );
}
