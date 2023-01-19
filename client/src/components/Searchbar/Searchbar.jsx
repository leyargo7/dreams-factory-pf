import React from "react";
import s from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div>
      <form>
        <input className={s.search} type='text' placeholder='Search...' />
        <button
          className={s.btn}
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            alert("submited");
          }}
        >SEARCH</button>
      </form>
    </div>
  );
};

export default Searchbar;
