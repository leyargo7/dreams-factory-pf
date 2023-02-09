import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getUser } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import OrderCards from "../OrderCards/OrderCards";
import { SERVER_URL } from "../../config";
import s from "./MyOrders.module.css";
import axios from "axios";

const MyOrders = () => {
  const [userGoogle, setUserGoogle] = useState("");
  const [purchases, setPurchases] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.idUser);
  // const userGoogle = useSelector((state) => state.authGoogle);

  useEffect(() => {
    if (!window.localStorage.token) {
      window.localStorage.setItem(
        "errorOrder",
        "You must be logged in to access this page"
      );
      history.push("/");
    } else {
      const token = window.localStorage.getItem("token");
      const decoded = jwt_decode(token);

      dispatch(getUser(decoded.id));
    }
    if (localStorage.U) {
      axios.get(`${SERVER_URL}/api/v1/user/${JSON.parse(localStorage.U)}`).then(r => setUserGoogle(r.data))
      history.push("/myorders");
    }
  }, [history, dispatch, userGoogle._id]);

  useEffect(() => {
    if (userGoogle.purchases) {
      if (!userGoogle.purchases.length) {
        setPurchases(<h3>You don't have any purchases yet...</h3>);
      } else {
        setPurchases("");
      }
    } else if (userId.purchases) {
      if (!userId.purchases.length) {
        setPurchases(<h3>You don't have any purchases yet...</h3>);
      } else {
        setPurchases("");
      }
    }
  }, [userGoogle, userId]);

  return (
    <div className={s.orders}>
      <h1>My Orders</h1>
      {userId && userId.name && <h2>Hi {userId.name}!</h2>}
      {userId && userId.email && <p>Email: {userId.email}</p>}
      {userGoogle && userGoogle.name && <h2>Hi {userGoogle.name}!</h2>}
      {userGoogle && userGoogle.email && <p>Email: {userGoogle.email}</p>}
      {!purchases ? <h3>Your last purchase...</h3> : null}
      {userId.purchases && userId.purchases.length ? (<OrderCards purchases={userId.purchases} />) : null}
      {userGoogle.purchases && userGoogle.purchases.length ? (<OrderCards purchases={userGoogle.purchases} />) : null}
      {purchases}
    </div>
  );
};

export default MyOrders;
