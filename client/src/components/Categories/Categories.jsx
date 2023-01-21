import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import { cleanCategories } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";

import s from "./Categories.module.css";

const Categories = () => {
  const history = useHistory();
  const allProducts = useSelector((state) => state.all);
  const products = useSelector((state) => state.category);
  const [localProducts, setLocalProducts] = useState([]);
  const [filter, setFilter] = useState({ name: "", direction: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allProducts.length) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setLocalProducts(products);
    setFilter({ name: "", direction: "" });
  }, [products]);

  useEffect(() => {
    return () => {
      dispatch(cleanCategories());
      setFilter({ name: "", direction: "" });
    };
  }, []);

  const handleSortDesc = (e) => {
    if (e.target.value === "asc") {
      if (
        filter.name === e.target.name &&
        filter.direction === e.target.value
      ) {
        setFilter({ name: "", direction: "" });
        return setLocalProducts(products);
      } else {
        setFilter({ name: e.target.name, direction: e.target.value });
      }
      return setLocalProducts(
        [...localProducts].sort((a, b) => {
          if (a[e.target.name] > b[e.target.name]) return 1;
          if (a[e.target.name] < b[e.target.name]) return -1;
          return 0;
        })
      );
    } else if (e.target.value === "des") {
      if (
        filter.name === e.target.name &&
        filter.direction === e.target.value
      ) {
        setFilter({ name: "", direction: "" });
        return setLocalProducts(products);
      } else {
        setFilter({ name: e.target.name, direction: e.target.value });
      }
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
      <Filters filter={filter} handleSortDesc={handleSortDesc} />
      <br />
      {localProducts.length ? (
        <Cards currentProducts={localProducts} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Categories;
