import React from "react";

export default function Pagination({ productPerPage, setCurrentPage,allProduct, pagination, currentPage }) {
  const pageNumbers = [];
  let numberPage = Math.ceil(allProduct / productPerPage)
  for (let i = 1; i <= Math.ceil(allProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pagination'>
      <ul>
        <button disabled={currentPage ===1}
        //  className={s.Button} 
         onClick={()=> {
          setCurrentPage(currentPage === 1?
            currentPage :
            currentPage - 1
            )}
        }> Prev</button>
      
        {pageNumbers &&
          pageNumbers.map((ev) => (
            <button disabled={currentPage ===(ev)}
            //  className={s.Btn}
              key={ev} onClick={() => pagination(ev)}>
              {ev}
            </button>
          ))}
          <button disabled={currentPage === pageNumbers.length}
          //  className={s.Button} 
           onClick={() =>
          setCurrentPage(currentPage === numberPage?
            currentPage :
            currentPage + 1)}>Next</button>
      </ul>
    </div>
  );
}
