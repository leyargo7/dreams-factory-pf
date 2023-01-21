import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import s from "./CategorySelector.module.css";

const Categories = () => {
  const [current, setCurrent] = React.useState();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const history = useHistory();
  const handleCategory = (e) => {
    setCurrent(e.target.name);
    dispatch(getCategories(e.target.name));
    history.push("/categories");
  };
  React.useEffect(() => {
    if (!category.length) setCurrent("");
  }, [category]);
  return history.location.pathname === "/" ||
    history.location.pathname === "/categories" ? (
    <div className={s.categories}>
      <button
        className={current === "cases" ? s.active : s.btn}
        name='cases'
        onClick={handleCategory}
      >
        Cases
      </button>
      <button
        className={current === "keyboards" ? s.active : s.btn}
        name='keyboards'
        onClick={handleCategory}
      >
        Keyboards
      </button>
      <button
        className={current === "case_fan" ? s.active : s.btn}
        name='case_fan'
        onClick={handleCategory}
      >
        Case Fans
      </button>
      <button
        className={current === "power_supply" ? s.active : s.btn}
        name='power_supply'
        onClick={handleCategory}
      >
        Power Supplies
      </button>
      <button
        className={current === "ram" ? s.active : s.btn}
        name='ram'
        onClick={handleCategory}
      >
        Ram
      </button>
      <button
        className={current === "cpu_fan" ? s.active : s.btn}
        name='cpu_fan'
        onClick={handleCategory}
      >
        Cpu Fans
      </button>
      <button
        className={current === "mouse" ? s.active : s.btn}
        name='mouse'
        onClick={handleCategory}
      >
        Mouses
      </button>
      <button
        className={current === "gpus" ? s.active : s.btn}
        name='gpus'
        onClick={handleCategory}
      >
        Gpus
      </button>
      <button
        className={current === "motherboard" ? s.active : s.btn}
        name='motherboard'
        onClick={handleCategory}
      >
        Motherboards
      </button>
      <button
        className={current === "proccessors" ? s.active : s.btn}
        name='proccessors'
        onClick={handleCategory}
      >
        Processors
      </button>
      <button
        className={current === "storages" ? s.active : s.btn}
        name='storages'
        onClick={handleCategory}
      >
        Storages
      </button>
    </div>
  ) : null;
};

export default Categories;
