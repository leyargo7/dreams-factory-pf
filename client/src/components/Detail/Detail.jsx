import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCart,
  addFavorite,
  clearDetail,
  idProduct,
} from "../../redux/actions/actions";
import Loading from "../Loading/Loading";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Toaster, toast } from 'react-hot-toast';
import s from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const productID = useSelector((state) => state.idProduct);
  
  const { id } = useParams();
  console.log(productID)
  useEffect(() => {
    dispatch(idProduct(id));
    dispatch(clearDetail());
  }, [dispatch, id]);

  const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(addCart(productID));
    alert("add cart");
  };
  
  const handleAddFavorite = (e) => {
    e.preventDefault();
    toast.success("addedFavorite")
    dispatch(addFavorite(productID));
  };

  return (
    <div className={s.container}>
      {!productID._id ? (
        <Loading />
      ) : (
        <div className={s.detail}>
          <div className={s.img}>
            <img src={productID.img} alt='' />
          </div>
          <div className={s.content}>
            <div className={s.content2}>
              <h2>{productID.title}</h2>
            </div>

            <div className={s.content3}>
              <span>
                <span className={s.tags}>Brand:</span> {productID.brand}
              </span>
              <span>
                <span className={s.tags}>Model:</span> {productID.model}
              </span>
              <span>
                <span className={s.tags}>Category:</span> {productID.category}
              </span>
              {productID.sidePanel ? (
                <span>
                  <span className={s.tags}>Side Panel</span>:{" "}
                  {productID.sidePanel}
                </span>
              ) : null}
              {productID.color ? (
                <span>
                  <span className={s.tags}>Color:</span> {productID.color}
                </span>
              ) : null}
              {productID.cabineteType ? (
                <span>
                  <span className={s.tags}>Cabinete type</span>:{" "}
                  {productID.cabineteType}
                </span>
              ) : null}
              {productID.style ? (
                <span>
                  <span className={s.tags}>Style:</span> {productID.style}
                </span>
              ) : null}
              {productID.backlit ? (
                <span>
                  <span className={s.tags}>Backlit:</span> {productID.backlit}
                </span>
              ) : null}
              {productID.wireless ? (
                <span>
                  <span className={s.tags}>Wireless:</span> {productID.wireless}
                </span>
              ) : null}
              {productID.rpm ? <span>{productID.rpm}</span> : null}
              {productID.airFlow ? (
                <span>
                  <span className={s.tags}>Airflow:</span> {productID.airFlow}
                </span>
              ) : null}
              {productID.noiseLevel ? (
                <span>
                  <span className={s.tags}>Noise level:</span>{" "}
                  {productID.noiseLevel}
                </span>
              ) : null}
              {productID.efficiency ? (
                <span>
                  <span className={s.tags}>Efficiency:</span>{" "}
                  {productID.efficiency}
                </span>
              ) : null}
              {productID.quantity ? (
                <span>
                  <span className={s.tags}>Queantity:</span>{" "}
                  {productID.quantity}
                </span>
              ) : null}
              {productID.size ? (
                <span>
                  <span className={s.tags}>Size:</span> {productID.size}
                </span>
              ) : null}
              {productID.type ? (
                <span>
                  <span className={s.tags}>TYPE:</span> {productID.type}
                </span>
              ) : null}
              {productID.trackingMethod ? (
                <span>
                  <span className={s.tags}>Tracking method:</span>{" "}
                  {productID.trackingMethod}
                </span>
              ) : null}
              {productID.storageInterface ? (
                <span>
                  <span className={s.tags}>Storage interface:</span>{" "}
                  {productID.storageInterface}
                </span>
              ) : null}
              {productID.memory ? (
                <span>
                  <span className={s.tags}>Memory:</span> {productID.memory}
                </span>
              ) : null}
              {productID.clockSpeed ? (
                <span>
                  <span className={s.tags}>Clockspeed:</span>{" "}
                  {productID.clockSpeed}
                </span>
              ) : null}
              {productID.chipset ? (
                <span>
                  <span className={s.tags}>Chipset:</span> {productID.chipset}
                </span>
              ) : null}
              {productID.formFactor ? (
                <span>
                  <span className={s.tags}>Form factor:</span>{" "}
                  {productID.formFactor}
                </span>
              ) : null}
              {productID.memorySlots ? (
                <span>
                  <span className={s.tags}>Memory slots:</span>{" "}
                  {productID.memorySlots}
                </span>
              ) : null}
              {productID.socketType ? (
                <span>
                  <span className={s.tags}>Socket type:</span>{" "}
                  {productID.socketType}
                </span>
              ) : null}
              {productID.speed ? (
                <span>
                  <span className={s.tags}>Speed:</span> {productID.speed}
                </span>
              ) : null}
            </div>
            <ul style={{textAlign: "start"}}>
              {!productID.description
                ? null
                : productID.description.split(".,").map((d) => <li>{d}</li>)}
            </ul>
            <div className={s.stars}>
              <p className={s.price}>
                <label>$</label> {productID.price}
              </p>
              <Rating
                initialRating={productID.rating}
                emptySymbol={<BsStar />}
                fullSymbol={<BsStarFill />}
                halfSymbol={<BsStarHalf />}
                readonly={true}
              />
              <p>{productID.inStock} in Stock</p>
            </div>
            <div className={s.buttons}>
              <button onClick={(e) => handleAddCart(e)}>add Cart</button>
              <button onClick={(e) => handleAddFavorite(e)}>
                add Favorite ❤
              </button>
              <Toaster
                position="bottom-right"
                reverseOrder={true}
                toastOptions={{
                  className: '',
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: "white",
                  },
                }}

      />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
