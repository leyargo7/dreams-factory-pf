import {React, useState} from "react";
//import s from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import {getProductsByName} from "../../redux/actions/actions";

 export default function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
  
    const handleChange = (e) => {
      setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
          dispatch(getProductsByName(search));
          setSearch("");
        }
    }
    return(
        <div>
         <input
            type="text"
            value={search}
            placeholder="Search Product"
            onChange={handleChange}
            />
             <button onClick={handleSubmit}>Search</button>
                </div>
    )
}