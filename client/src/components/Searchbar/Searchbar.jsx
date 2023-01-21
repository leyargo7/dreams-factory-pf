import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions/actions";
import s from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.value);
    dispatch(getProductByName(name));
    
  };

  return (
    <div>
      <form>
        <input
          className={s.search}
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => { handleSubmit(e); }}

        />
        <button
          className={s.btn}
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
