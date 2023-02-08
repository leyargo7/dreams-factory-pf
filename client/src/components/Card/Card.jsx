import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

import {
  addFavorite,
  addCart,
  deleteFavorite,
} from "../../redux/actions/actions";

import s from "./Card.module.css";
import {RiShoppingCartLine} from "react-icons/ri";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa"
import { IconContext } from "react-icons";

export default function Card({
  title,
  img,
  description,
  rating,
  price,
  _id,
  inStock,
}) {
  const favorites = useSelector((state) => state.favorites);
  const add_Cart = useSelector((state) => state.add_Cart);
  const dispatch = useDispatch();
  const found = favorites.find((f) => f._id === _id);
  const [favorite, setFavorite] = useState(found ? found.favorite : true);
  //const cart_add = useSelector((state) => state.add_Cart);
  const [buttonOn, setButtonOn] = useState(add_Cart ? false : true);
  const starsState = useSelector((state) => state.stars);

  useEffect(() => {
    if (!add_Cart.find((p) => p._id === _id)) {
      setButtonOn(true);
    }
  }, [add_Cart]);

  const handleAddCart = (e) => {
    e.preventDefault();
    if (inStock > 0) {
      dispatch(
        addCart({ title, img, description, rating, price, _id, inStock })
      );
      toast.success("added to cart");
      setButtonOn(false);
    } else {
      toast.error("Not available");
    }
  };

  const handleAddFavorite = (e) => {
    e.preventDefault();
    if (favorite === true) {
      setFavorite(() => false);
      dispatch(
        addFavorite({ title, img, rating, price, _id, favorite: false })
      );
      toast.success("added to favorite");
    } else {
      setFavorite(() => true);
      dispatch(deleteFavorite(_id));
      console.log(favorite);
      toast.error("removed from favorites");
    }
  };

  const ratingState = [rating]
  const concat = ratingState.concat(starsState)
  const rating2 =concat.reduce((a,b)=> a+b)/concat.length;
  console.log(rating2);

  return (
    <div className={s.shell}>
      <div className={s.header}>
        <h4>{title}</h4>
      </div>
      <NavLink className={s.NavLink} to={`/product/${_id}`}>
        <div className={s.imgShell}>
          <img className={s.img} src={img} alt='img not found' />
        </div>
      </NavLink>
      <div className={s.footer}>
        <h4 style={{ margin: "10px 0 0 0" }}>
          <div style={{ userSelect: "none", color: "#ffff74" }}>
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
          <button
            disabled={!buttonOn}
            className={s.cartBtn}
            onClick={(e) => handleAddCart(e)}
          >
            <RiShoppingCartLine />
          </button>
          <h2 style={{ margin: "0 0 10px 0" }}>
            <span style={{marginRight: "3px", userSelect: "none", color: "rgb(255, 255, 255)" }}>
              $
            </span>
            {price}
          </h2>
          <button           
            className={favorite === false ? s.btnFalse : s.btnTrue}
            onClick={(e) => handleAddFavorite(e)}
          >
            <IconContext.Provider value={{className: s.heart}}>
              <div>
            <FaRegHeart/>  
            </div>
            </IconContext.Provider>
          </button>
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
  );
}
