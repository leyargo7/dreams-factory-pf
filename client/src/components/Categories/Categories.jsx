import {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import CategorySelector from "../CategorySelector/CategorySelector";
import Filters from "../Filters/Filters";
import { cleanCategories } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";

import s from "./Categories.module.css";

const Categories = () => {
  const history = useHistory();
  const allProducts = useSelector((state) => state.all);
  const products = useSelector((state) => state.category);
  const [localProducts, setLocalProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setLocalProducts(products);
    console.log(localProducts.length);
    console.log(products.length);
  }, [products]);

  useEffect(() => {
    return () => {
      dispatch(cleanCategories());
    };
  }, []);

  const handleSortDesc = (e) => {
    if (e.target.value === "asc") {
      return setLocalProducts(
        [...localProducts].sort((a, b) => {
          if (a[e.target.name] > b[e.target.name]) return 1;
          if (a[e.target.name] < b[e.target.name]) return -1;
          return 0;
        })
      );
    } else if (e.target.value === "des") {
      return setLocalProducts(
        [...localProducts].sort((a, b) => {
          if (a[e.target.name] > b[e.target.name]) return -1;
          if (a[e.target.name] < b[e.target.name]) return 1;
          return 0;
        })
      );
    }
  };

  return (
    <div className={s.categories}>
      <br />
      <Filters handleSortDesc={handleSortDesc} />
      <br />
      {localProducts.length ? (
        <Cards currentProducts={localProducts} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Categories;
