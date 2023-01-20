import React from 'react';
import s from "./Filters.module.css";

const Filters = ({handleSortDesc}) => {
  return(
    <div className={s.filters}>
      <button className={s.btn} name="title" value={"des"} onClick={handleSortDesc}>Z-A</button>
      <button className={s.btn} name="title" value={"asc"} onClick={handleSortDesc}>A-Z</button>
      <button className={s.btn} name="price" value={"des"} onClick={handleSortDesc}>&#8639; Price</button>
      <button className={s.btn} name="price" value={"asc"} onClick={handleSortDesc}>&#8643; Price</button>
      <button className={s.btn} name="rating" value={"des"} onClick={handleSortDesc}>&#8639; Rating</button>
      <button className={s.btn} name="rating" value={"asc"} onClick={handleSortDesc}>&#8643; Rating</button>
    </div>
  )
}

export default Filters;