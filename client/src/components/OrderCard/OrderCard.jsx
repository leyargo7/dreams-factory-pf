import s from "./OrderCard.module.css";

const OrderCard = ({
  title,
  unit_price,
  picture_url,
  date,
  quantity,
  hour,
}) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>{title}</h2>
      </div>
      <div className={s.image}>
        <img className={s.img} src={picture_url} alt="image not found" />
      </div>
      <div className={s.footer}>
        <h3 className={s.price}>
          ${unit_price} x{quantity}
        </h3>
        <p className={s.date}>
          Date: {date} Time: {hour}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
