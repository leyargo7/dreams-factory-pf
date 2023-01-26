import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster, toast } from 'react-hot-toast';
import { addFavorite } from "../../redux/actions/actions";
import s from "./Card.module.css";

export default function Card({ title, img, rating, price, id, isFavorite }) {

  const dispatch = useDispatch();
 
 const handleAddCart = (e) => {
    e.preventDefault();
    alert("add cart");
  };
 
 const handleAddFavorite = (e) => {
    e.preventDefault();
    toast.success("addedFavorite")
    dispatch(addFavorite({ title, img, rating, price, id }));
  };

  return (
    <div className={s.shell}>
      <div className={s.header}>
        <h4>{title}</h4>
      </div>
      <div className={s.imgShell}>
        <Link to={`/product/${id}`}>
          <img className={s.img} src={img} alt='img not found' />
        </Link>
      </div>
      <div className={s.footer}>
        <h4 style={{ margin: "10px 0 0 0" }}>
          <span style={{ userSelect: "none", color: "rgb(179, 0, 180)" }}>
            &#9733;
          </span>{" "}
          {rating}
        </h4>
        <div className={s.footerPrice}>
          <h2 style={{ margin: "0 0 10px 0" }}>
            <span style={{ userSelect: "none", color: "rgb(179, 0, 180)" }}>
              $
            </span>
            {price}
          </h2>
          <button onClick={(e) => handleAddCart(e)}>add Cart</button>
          {!isFavorite &&
            <button onClick={(e) => handleAddFavorite(e)}>❤</button>
          }
        </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: "white",
          },
        }}

      />
    </div>
  );
}
