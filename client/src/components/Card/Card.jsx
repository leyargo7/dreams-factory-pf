import React from "react";
import s from "./Card.module.css"

export default function Card ({title,img,rating,price}) {  /* propiedades que le paso en home */
    return (
        <div className={s.shell}>
            <h4>{title}</h4>
            <img className="image" src = {img} alt = "img not found" width="30%" />
            <h3>{rating}</h3>
            <h3>{price}</h3>
        </div>
    );
};