import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({ title, img, rating, price, id }) {
  /* propiedades que le paso en home */


  const handleAddCart = (e) => {
    e.preventDefault();

   alert("add cart");
  };

  return (
    <div className={s.shell}>
      <div className={s.header}>
        <h4>{title}</h4>
      </div>
      <div className={s.imgShell}>
        <img className={s.img} src={img} alt="img not found" />
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
          <button onClick={e=> handleAddCart(e)}>add Cart</button>

        </div>
      </div>

      <button><Link to={`/product/${id}`}>See more</Link></button>

    </div>
  );
}
