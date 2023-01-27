import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions/actions";
import s from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    dispatch(getProductByName(name));
    setName(e);
    
  };

  return (
    <div>
      <form>
        <input
          className={s.search}
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => { handleSubmit(e.target.value); }}

        />
        <button
          className={s.btn}
          type="submit"
          onClick={(e) => {
            handleSubmit(e.target.value);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
