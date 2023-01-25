import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { addFavorite, clearDetail, idProduct } from "../../redux/actions/actions";
import Loading from '../Loading/Loading'
import Rating from 'react-rating';
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs'
import s from './Detail.module.css'


export default function Detail({title, img, rating, price }){
    const dispatch = useDispatch()
    const productID = useSelector(state => state.idProduct)
    const {id} = useParams()
    //console.log(id)
    useEffect(() => {
        dispatch(idProduct(id));
        dispatch(clearDetail())
      }, [dispatch, id]);

    const handleAddCart = (e) => {
        e.preventDefault();
       alert("add cart");
      };
    
    const handleAddFavorite = (e) => {
      e.preventDefault();
      dispatch(addFavorite({ title, img, rating, price, id }));
      };
    
    return(
      
        <div className={s.container}>   
            {!productID._id 
            ? <Loading /> :
            <div className={s.detail}>
              <div className={s.img}>
                <img  src={productID.img} alt='' />
              </div>
              <div className={s.content}>
                <div className={s.content2}>
                  <h2>{productID.title}</h2>
                  <Rating 
                    initialRating={productID.rating}
                    emptySymbol={<BsStar />}
                    fullSymbol={<BsStarFill />}
                    halfSymbol={<BsStarHalf />}
                    readonly={true}
                    className={s.stars}
                    />
                    <span>{productID.inStock} in Stock</span>
                </div>
                <div className={s.content3}>
                  <span>Brand: {productID.brand}</span>
                  <span>Model: {productID.model}</span>
                  <span>Category: {productID.category}</span>
                  { productID.sidePanel  ?  <span>Side Panel: {productID.sidePanel}</span> : null  }
                  { productID.color ?  <span>Color: {productID.color}</span> : null }
                  { productID.cabineteType ?  <span>Cabinete type: {productID.cabineteType}</span> : null }
                  { productID.style ?  <span>Style: {productID.style}</span> : null }
                  { productID.backlit ?  <span>Backlit: {productID.backlit}</span>  : null }
                  { productID.wireless ?  <span>Wireless: {productID.wireless}</span> : null }
                  { productID.rpm ?  <span>{productID.rpm}</span> : null }
                  { productID.airFlow ?  <span>Airflow: {productID.airFlow}</span>  : null }
                  { productID.noiseLevel ?  <span>Noise level: {productID.noiseLevel}</span> : null }
                  { productID.efficiency ?  <span>Efficiency: {productID.efficiency}</span> : null  }
                  { productID.quantity ?  <span>Queantity: {productID.quantity}</span> : null  }
                  { productID.size ?  <span>Size: {productID.size}</span> : null }
                  { productID.type ?  <span>TYPE: {productID.type}</span> : null}
                  { productID.trackingMethod ?  <span>Tracking method: {productID.trackingMethod}</span> : null}
                  { productID.storageInterface ?  <span>Storage interface: {productID.storageInterface}</span> : null}
                  { productID.memory ?  <span>Memory: {productID.memory}</span> : null}
                  { productID.clockSpeed ?  <span>Clockspeed: {productID.clockSpeed}</span> : null}
                  { productID.chipset ?  <span>Chipset: {productID.chipset}</span> : null}
                  { productID.formFactor ?  <span>Form factor: {productID.formFactor}</span> : null}
                  { productID.memorySlots?  <span>Memory slots: {productID.memorySlots}</span> : null}
                  { productID.socketType ?  <span>Socket type: {productID.socketType}</span> : null}
                  { productID.speed ?  <span>Speed: {productID.speed}</span> : null}
                </div>
                <span>{!productID.description ? null : productID.description}</span>
                <span className={s.price}>$ {productID.price}</span>
                <div className={s.buttons}>
                  <button onClick={(e) => handleAddCart(e)}>add Cart</button>
                  <button onClick={(e) => handleAddFavorite(e)}>add Favorite ❤</button>

                </div>
              </div>
            </div>
             

        }

        </div>
    )
}