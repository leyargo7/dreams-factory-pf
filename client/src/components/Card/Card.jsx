import React from "react";
import s from "./Card.module.css";

export default function Card({ title, img, rating, price }) {
  /* propiedades que le paso en home */
  return (
    <div className={s.shell}>
      <div className={s.header}>
        <h4>{title}</h4>
      </div>
      <div className={s.imgShell}>
        <img className={s.img} src={img} alt='img not found'/>
      </div>
      <div className={s.footer}>
        <h4 style={{margin:"10px 0 0 0"}}><span style={{userSelect: "none",color:"rgb(179, 0, 180)"}}>&#9733;</span> {rating}</h4>
        <h2 style={{margin:"0 0 10px 0"}}><span style={{userSelect: "none",color:"rgb(179, 0, 180)"}}>$</span>{price}</h2>
      </div>
    </div>
  );
}
