import React from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import s from "./CategorySelector.module.css";

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCategory = (e) => {
    dispatch(getCategories(e.target.name));
    history.push("/categories");
  };
  return (
    <div className={s.categories}>
      <button className={s.btn} name='cases' onClick={handleCategory}>
        Cases
      </button>
      <button className={s.btn} name='keyboards' onClick={handleCategory}>
        Keyboards
      </button>
      <button className={s.btn} name='case_fan' onClick={handleCategory}>
        Case Fans
      </button>
      <button className={s.btn} name='power_supply' onClick={handleCategory}>
        Power Supplies
      </button>
      <button className={s.btn} name='ram' onClick={handleCategory}>
        Ram
      </button>
      <button className={s.btn} name='cpu_fan' onClick={handleCategory}>
        Cpu Fans
      </button>
      <button className={s.btn} name='mouse' onClick={handleCategory}>
        Mouses
      </button>
      <button className={s.btn} name='gpus' onClick={handleCategory}>
        Gpus
      </button>
      <button className={s.btn} name='motherboard' onClick={handleCategory}>
        Motherboards
      </button>
      <button className={s.btn} name='proccessors' onClick={handleCategory}>
        Processors
      </button>
      <button className={s.btn} name='storages' onClick={handleCategory}>
        Storages
      </button>
    </div>
  );
};

export default Categories;
