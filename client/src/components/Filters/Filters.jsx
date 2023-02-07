import React from "react";
import s from "./Filters.module.css";

const Filters = ({ filter, handleSortDesc }) => {
  return (
    <div className={s.filters}>
      <h5>ORDER BY:</h5>
      <button
        className={
          filter.name === "title" && filter.direction === "des"
            ? s.active
            : s.btn
        }
        name='title'
        value={"des"}
        onClick={handleSortDesc}
      >
        Z-A
      </button>
      <button
        className={
          filter.name === "title" && filter.direction === "asc"
            ? s.active
            : s.btn
        }
        name='title'
        value={"asc"}
        onClick={handleSortDesc}
      >
        A-Z
      </button>
      <button
        className={
          filter.name === "price" && filter.direction === "des"
            ? s.active
            : s.btn
        }
        name='price'
        value={"des"}
        onClick={handleSortDesc}
      >
        &#8639; Price
      </button>
      <button
        className={
          filter.name === "price" && filter.direction === "asc"
            ? s.active
            : s.btn
        }
        name='price'
        value={"asc"}
        onClick={handleSortDesc}
      >
        &#8643; Price
      </button>
      <button
        className={
          filter.name === "rating" && filter.direction === "des"
            ? s.active
            : s.btn
        }
        name='rating'
        value={"des"}
        onClick={handleSortDesc}
      >
        &#8639; Rating
      </button>
      <button
        className={
          filter.name === "rating" && filter.direction === "asc"
            ? s.active
            : s.btn
        }
        name='rating'
        value={"asc"}
        onClick={handleSortDesc}
      >
        &#8643; Rating
      </button>
    </div>
  );
};

export default Filters;
