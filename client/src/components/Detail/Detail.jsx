import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {RiShoppingCartLine, RiShoppingCartFill} from "react-icons/ri";
import {FaRegHeart, FaHeart} from "react-icons/fa"
import {
  addCart,
  addFavorite,
  clearDetail,
  idProduct,
  deleteFavorite,
} from "../../redux/actions/actions";
import Loading from "../Loading/Loading";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Toaster, toast } from "react-hot-toast";
import s from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const productID = useSelector((state) => state.idProduct);
  const favorites = useSelector((state) => state.favorites);
  const add_Cart = useSelector((state) => state.add_Cart);
  const found = favorites.find((f) => f._id === productID._id);
  const [favorite, setFavorite] = useState(found ? found.favorite : true);
  const [buttonOn, setButtonOn] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    dispatch(idProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(clearDetail());
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  
  useEffect(() => {
    favorites.find((f) => f._id === productID._id) && setFavorite(false) 
  }, [productID]);
 

  useEffect(() => {
    add_Cart.find((p) => p._id === productID._id) && setButtonOn(false);
    
  }, [add_Cart, productID]);

  const handleAddCart = (e) => {
    if (productID.inStock > 0) {
      dispatch(addCart(productID));
      toast.success("added to cart");
      setButtonOn(false);
    } else {
      toast.error("product not avaible");
    }
  };

  const handleAddFavorite = (e) => {
    e.preventDefault();
    if (favorite === true) {
      setFavorite(() => false);
      dispatch(addFavorite({ ...productID, favorite: false }));
      toast.success("added to favorite");
    } else {
      setFavorite(() => true);
      dispatch(deleteFavorite(productID._id));
      toast.error("removed from favorites");
    }
  };

  if (!productID._id) {
    return <Loading />;
  } else
    return (
      <div className={s.container}>
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
            <ul style={{ textAlign: "start" }}>
              {!productID.description
                ? null
                : productID.description.split(".,").map((d) => <li key={productID.title}>{d}</li>)}
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
            {
            buttonOn === false ? 
          <button           
            className={s.cartBtnFalse}         
          >
            <RiShoppingCartFill />
            
          </button>
          :
          <button
            className={s.cartBtnTrue}
            onClick={(e) => handleAddCart(e)}
          >
            <RiShoppingCartLine />
          </button>

          }
          {
            favorite === false ? 
          <button        
            className={s.btnFalse}
            onClick={(e) => handleAddFavorite(e)}
          >
                    
            <FaHeart/>            
          </button>
          :
          <button           
            className={ s.btnTrue }
            onClick={(e) => handleAddFavorite(e)}
          >
            <FaRegHeart/>
                                 
          </button>
          }
              <Toaster
                position='bottom-right'
                reverseOrder={true}
                toastOptions={{
                  className: "",
                  duration: 3000,
                  style: {
                    background: "#363636",
                    color: "white",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
