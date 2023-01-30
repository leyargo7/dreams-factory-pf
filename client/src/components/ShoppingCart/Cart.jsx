import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { clickOpenCart, deleteCart } from "../../redux/actions/actions";
import axios from "axios";
import style from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.clickOpenCart);
  const cart_add = useSelector((state) => state.add_Cart);

  useEffect(() => {
    if (openCart) {
      document.getElementById("myNav").style.width = "40%";
    } else {
      document.getElementById("myNav").style.width = "0%";
    }
  }, [openCart]);

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    dispatch(clickOpenCart(false));
  };

  const checkout = (e) => {
    e.preventDefault();
    const body = {
      items: cart_add.map((p) => {
        return {
          title: p.title,
          description: p.description,
          picture_url: p.img,
          quantity: 1,
          unit_price: p.price,
        };
      }),
      back_urls: {
        success: "http://localhost:3000/",
        failure: "http://localhost:3000/",
        pending: "http://localhost:3000/",
      },
      // notification_url: "https://www.your-site.com/ipn",
    };
    axios
      .post("http://localhost:3001/api/payment", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => (window.location.href = r.data.init_point));
  };

  const cleanCart = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
  };

  
  return (
    <div className={style.overlay} id='myNav'>
      <button className={style.closebtn} id='closeNav' onClick={closeNav}>
        &times;
      </button>

      <div className={style.overlayContent}>
        <div className={style.titleCart}>
          <h3>PRODUCT</h3>
          <h3>SUBTOTAL</h3>
        </div>
        {cart_add.length > 0 ? (
          cart_add.map((e, i) => {
            return (
              <div className={style.data} key={i}>
                <div>
                  <img src={e.img} alt='img' className={style.imgCart} />
                </div>
                <h3 className={style.dataTitle}>{e.title}</h3>
                <h3 className={style.dataPrice}>{`$ ${e.price}`}</h3>
              </div>
            );
          })
        ) : (
          <p style={{ color: "white" }}>empty cart</p>
        )}
        <div className={style.total}>
          <h3>Total</h3>
          <div className={style.totalPrice}>
            $
            {cart_add.reduce((acc, e) => {
              let total = acc + e.price;
              let totalFixed = parseFloat(total.toFixed(2));

              return totalFixed;
            }, 0)}
          </div>
        </div>

        <div className={style.vacioCart}>
          <button onClick={(e) => cleanCart(e)}>
            <p>&#128465;</p> Clean Cart
          </button>
        </div>
        <button className={style.btn} onClick={(e) => checkout(e)}>
          CHECKOUT
        </button>
        <br />
      </div>
    </div>
  );
};

export default Cart;
