import React from "react";

export default function Card ({title,img,rating,price}) {  /* propiedades que le paso en home */
    return (
        <div className="card2">
            <h2>{title}</h2>
            <img className="image" src = {img} alt = "img not found" width="200px" height="250px" />
            <h3>{rating}</h3>
            <h3>{price}</h3>
        </div>
    );
};