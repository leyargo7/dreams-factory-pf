import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster, toast } from 'react-hot-toast';
import { addFavorite, addCart, deleteFavorite } from "../../redux/actions/actions";
import s from "./Card.module.css";
import {ImCart} from "react-icons/im"
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";


export default function Card({ title, img, rating, price, id }) {

  const dispatch = useDispatch();


  const [favorite,setFavorite] = useState(true)

  //const cart_add = useSelector((state) => state.add_Cart);

 
 const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(addCart({ title, img, rating, price, id }));
    alert("added to cart");
  };


 const handleAddFavorite = (e) => {
    e.preventDefault();
    toast.success("added Favorite")
    if(favorite === true){
      setFavorite(false)
      dispatch(addFavorite({ title, img, rating, price, id}));
      console.log(favorite)
    }else{
      setFavorite(true)
      dispatch(deleteFavorite({ title, img, rating, price, id}));
      console.log(favorite)
    }
  
  };


  return (
        <NavLink className={s.NavLink} to={`/product/${id}`}>
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
          <button onClick={(e) => handleAddCart(e)}><ImCart/></button>       
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
        </NavLink>
  );
}
