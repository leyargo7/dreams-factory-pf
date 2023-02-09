import OrderCard from "../OrderCard/OrderCard";
import s from "./OrderCards.module.css";

const OrderCards = ({ purchases }) => {
  return (
    <div>
      <div className={s.deck}>
        {purchases[purchases.length-1].map((p, i) => (
          <OrderCard
            key={i}
            title={p.title}
            unit_price={p.unit_price}
            picture_url={p.picture_url}
            date={p.date}
            quantity={p.quantity}
            hour={p.hour}
          />
        ))}
      </div>
      <div>
        <h1 className={s.total}>Total Price: ${Math.floor(purchases[purchases.length-1].reduce((acc, e) => acc + (e.unit_price * e.quantity) ,0))}</h1>
      </div>
    </div>
  );
};

export default OrderCards;
