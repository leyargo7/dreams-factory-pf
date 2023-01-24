import React from "react";
import s from "./Pagination.module.css";
export default function Pagination({
  currentPage,
  productPerPage,
  allProduct,
  pagination,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const paddingLeft = () => {
    if(currentPage===0)return 0;
    if(currentPage===1)return 1;
    if(currentPage===2)return 2;
    if(currentPage===20)return 4;
    if(currentPage===21)return 5;
    return 3;
  }
  const paddingRight = () => {
    if(currentPage===0)return 5;
    if(currentPage===1)return 4;
    if(currentPage===2)return 3;
    return 2;
  }

  return (
    <div className='pagination'>
      {currentPage > 1 ? (
        <button className={s.btn} onClick={() => pagination(currentPage - 1)}>&#9664;</button>
      ) : (
        <button hidden className={s.btn}>&#9664;</button>
      )}
      {pageNumbers &&
        pageNumbers.slice(currentPage-paddingLeft(),currentPage+paddingRight()).map((ev) => (
          <button className={currentPage === ev ? s.active : s.btn} key={ev} onClick={() => pagination(ev)}>
            {ev}
          </button>
        ))}
      {currentPage < allProduct / productPerPage ? (
        <button className={s.btn} onClick={() => pagination(currentPage + 1)}>&#9654;</button>
      ) : (
        <button hidden className={s.btn}>&#9654;</button>
      )}
    </div>
  );
}
