import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions/actions";
import s from "./Searchbar.module.css";

const Searchbar = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    dispatch(getProductByName(name));
    setName(e);
    setCurrentPage(1)
    
  };

  return (
    <div>
      <form>
        <input
          className={s.search}
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => { handleSubmit(e.target.value); }}

        />
      </form>
    </div>
  );
};

export default Searchbar;
