import React, { useEffect } from "react";
import { SERVER_URL, FRONT_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOpenCart,
  deleteCart,
  addCart,
  removeCart,
} from "../../redux/actions/actions";
import axios from "axios";
import style from "./Cart.module.css";
import jwt_decode from "jwt-decode";

const Cart = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.clickOpenCart);
  const cart_add = useSelector((state) => state.add_Cart);
  const authGoogle = useSelector((state) => state.authGoogle);

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
    const token = localStorage.getItem("token");
    const decoded = token ? jwt_decode(token) : null;
    const ID = decoded ? JSON.stringify(decoded.id) : localStorage.U;
    console.log("ID: ", ID);
    if (ID) {
      const body = {
        items: cart_add.map((p) => {
          return {
            category_id: ID,
            title: p.title,
            description: p.description,
            picture_url: p.img,
            quantity: p.cant,
            unit_price: p.price,
          };
        }),
        back_urls: {
          success: `${FRONT_URL}/myorders`,
          failure: `${FRONT_URL}`,
          pending: `${FRONT_URL}`,
        },
        notification_url: `${SERVER_URL}/api/notifications`,
      };
      axios
        .post(`${SERVER_URL}/api/payment`, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((r) => window.open(r.data.init_point, "_self"));
    }
  };

  const cleanCart = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
  };

  const handleIncrease = (e) => {
    const addProduct = cart_add.find((p) => p._id === e.target.name);
    if (addProduct.cant < addProduct.inStock) {
      dispatch(addCart(addProduct));
    }
  };

  const handleDecrease = (e) => {
    const removeProduct = cart_add.find((p) => p._id === e.target.name);
    dispatch(removeCart(removeProduct));
  };

  return (
    <div className={style.overlay} id='myNav'>
      <button className={style.closebtn} id='closeNav' onClick={closeNav}>
        &times;
      </button>

      <div className={style.overlayContent}>
        <div className={style.titleCart}>
          <h3 style={{ position: "relative", left: "100px" }}>PRODUCT</h3>
          <h3 style={{ position: "relative", right: "60px" }}>SUBTOTAL</h3>
        </div>
        {cart_add.length > 0 ? (
          cart_add.map((e, i) => {
            return (
              <div className={style.data} key={i}>
                <div>
                  <img src={e.img} alt='img' className={style.imgCart} />
                </div>
                <h3 className={style.dataTitle}>{e.title}</h3>
                {/*  */}
                <button
                  className={style.plusMinus}
                  name={e._id}
                  onClick={(e) => handleDecrease(e)}
                >
                  -
                </button>
                <h3 className={style.dataPrice}>{`$ ${e.price}`}</h3>
                <p>x{e.cant}</p>
                <button
                  className={style.plusMinus}
                  name={e._id}
                  onClick={(e) => handleIncrease(e)}
                >
                  +
                </button>
                {/*  */}
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
              let total = (acc + e.price) * e.cant;
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
