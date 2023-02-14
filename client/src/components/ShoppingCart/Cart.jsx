import React, { useEffect } from "react";
import { SERVER_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOpenCart,
  deleteCart,
  addCart,
  removeCart,
} from "../../redux/actions/actions";
import axios from "axios";
import style from "./Cart.module.css";
import { useState } from "react";
import jwt_decode from "jwt-decode";

const Cart = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.clickOpenCart);
  const cart_add = useSelector((state) => state.add_Cart);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    cart_add.length && setTotal(
      cart_add.reduce((acc, e) => {
        let total = (acc + e.price) * e.cant;
        let totalFixed = parseFloat(total.toFixed(2));

        return totalFixed;
      }, 0)
    )
  })
  const authGoogle = useSelector((state) => state.authGoogle);

  useEffect(() => {
    if (openCart) {
      document.getElementById("myNav").style.width = "30%";
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
          success: "http://localhost:3000/myorders",
          failure: "http://localhost:3000",
          pending: "http://localhost:3000",
        },
        notification_url: `https://dfca-186-81-100-12.ngrok.io/api/notifications`,
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
    setTotal(0)
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


      <div className={style.titleCart}>
        <h3>PRODUCT</h3>
      </div>
      <div>
        <div>

          {cart_add.length > 0 ? (
            cart_add.map((e, i) => {
              return (
                <div>
                  <div className={style.containerData}>
                    <div className={style.data} key={i}>
                      <div>
                        <img src={e.img} alt='img' className={style.imgCart} />
                      </div>
                    </div>
                    <div className={style.containerBoton}>
                      <div>
                        <h3 className={style.dataTitle}>{e.title}</h3>
                      </div>
                      <div className={style.containerPrice}>
                        <button className={style.buton} name={e._id} onClick={(e) => handleDecrease(e)}>
                          ⏪
                        </button>
                        <h3 className={style.dataPrice}>{`$ ${e.price}`}</h3>
                        <p>x{e.cant}</p>
                        <button className={style.buton} name={e._id} onClick={(e) => handleIncrease(e)}>
                          ⏩
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })


          ) : (
            <p style={{ color: "white" }}>empty cart</p>
          )}
        </div>
        <div className={style.vacioCart}>
          <button onClick={(e) => cleanCart(e)}>
            <p>&#128465;</p> Clean Cart
          </button>
        </div>

        {total < 500 && <div className={style.barra}>
          <h4>Te faltan $ <span>{parseInt(String(`${500 - total}`), 10)}</span> ENVIO GRATIS</h4>
          <div className={style.containerBarra}>

            <div className={style.barrita} style={{
              width: `${total / 500 * 100}%`
            }}></div>
          </div>
        </div>}
        <div className={style.total}>
          <h3>Total</h3>
          <div className={style.totalPrice}>
            $
            {total}
          </div>
        </div>
         <div className={style.containerBtn}>
          <div>
            <button className={style.btn} onClick={(e) => checkout(e)}>
              CHECKOUT
            </button>
          </div>
        </div>
       </div> 

    </div>

  );
};

export default Cart;
