import React from "react";

export default function Pagination ({productPerPage, allProduct, pagination}){  
    const pageNumbers = []
    for (let i=1; i<=Math.ceil(allProduct/productPerPage); i++){  
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            <ul>
                   {pageNumbers &&
                    pageNumbers.map((ev) => (
                        <li key = {ev}>
                            <a class = "active" onClick={() => pagination(ev)}>{ev}</a>
                        </li>
                    ))}
            </ul>
        </div>
            
    )
}
