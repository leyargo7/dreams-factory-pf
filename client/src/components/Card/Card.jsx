import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

import {
  addFavorite,
  addCart,
  deleteFavorite,
} from "../../redux/actions/actions";

import s from "./Card.module.css";
import { ImCart } from "react-icons/im";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export default function Card({ title, img, description, rating, price, _id }) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const found = favorites.find((f) => f._id === _id);
  const [favorite, setFavorite] = useState(found ? found.favorite : true);
  //const cart_add = useSelector((state) => state.add_Cart);

  const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(addCart({ title, img, description, rating, price, _id }));
<<<<<<< HEAD
    alert("added to cart");
=======
    toast.success("added to cart");
>>>>>>> 8a98451f5ea2f40cf943955d39addfda3d74d623
  };

  const handleAddFavorite = (e) => {
    e.preventDefault();
    if (favorite === true) {
      setFavorite(() => false);
      dispatch(addFavorite({ title, img, rating, price, _id, favorite: false }));
      toast.success("added to favorite");
    } else {
      setFavorite(() => true);
      dispatch(deleteFavorite(_id));
      console.log(favorite);
      toast.error("removed from favorites");
    }
  };

  return (
  
    <NavLink className={s.NavLink} to={`/product/${_id}`}>
    <div className={s.shell}>
        <div className={s.header}>
          <h4>{title}</h4>
        </div>
        <div className={s.imgShell}>
          <img className={s.img} src={img} alt='img not found' />
      </div>
      <div className={s.footer}>
        <h4 style={{ margin: "10px 0 0 0" }}>          
          <div style={{ userSelect: "none", color: "#ffff74" }} >
          <Rating
                initialRating={rating}
                emptySymbol={<BsStar />}
                fullSymbol={<BsStarFill />}
                halfSymbol={<BsStarHalf />}
                readonly={true}
              />
          </div>
        </h4>
        <div className={s.footerPrice}>
<<<<<<< HEAD
          <button onClick={(e) => handleAddCart(e)}><ImCart/></button>       
=======
          <button className={s.cartBtn} onClick={(e) => handleAddCart(e)}><ImCart/></button>       
>>>>>>> 8a98451f5ea2f40cf943955d39addfda3d74d623
          <h2 style={{ margin: "0 0 10px 0" }}>
            <span style={{ userSelect: "none", color: "rgb(179, 0, 180)" }}>
              $
            </span>
            {price}
          </h2>
          <button className={favorite === false? s.btnFalse : s.btnTrue} onClick={(e) => handleAddFavorite(e)}>❤</button>
          </div>
        </div>
        <Toaster
          position='bottom-right'
          reverseOrder={true}
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "white",
            },
          }}
        />
        
        
      </div>
      </NavLink>
  );
}