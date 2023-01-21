import React from "react";
import Card from "../Card/Card";
import s from "./Cards.module.css";

const Cards = ({ currentProducts }) => {
  return (
    <div className={s.deck}>
      {currentProducts?.map((ev) => {
        return (
          <div>
            <Card
              key={ev.idProduct}
              title={ev.title}
              img={ev.img}
              rating={ev.rating}
              price={ev.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
