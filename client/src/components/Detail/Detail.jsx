import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { clearDetail, idProduct } from "../../redux/actions/actions";
import Loading from '../Loading/Loading'
import s from './Detail.module.css'


export default function Detail(){
    const dispatch = useDispatch()
    const productID = useSelector(state => state.idProduct)
    const {id} = useParams()
    //console.log(id)
    useEffect(() => {
        dispatch(idProduct(id));
        dispatch(clearDetail())
      }, [dispatch, id]);
    
    return(
      
        <div className={s.container}>   
          {/*STORAGES rpm, type, storageInterface, cacheMemory */}
            {!productID._id 
            ? <Loading /> :
            <div className={s.detail}>
                <img src={productID.img} alt='' />
                <h1>{productID.title}</h1>
                <span>Rating: {productID.rating}</span>
                <span>$ {productID.price}</span>
                <span>Brand: {productID.brand}</span>
                <span>Stock: {productID.inStock}</span>
                <span>Model: {productID.model}</span>
                <span>{!productID.description ? null : productID.description}</span>
                <span>{productID.inStock} in Stock</span>
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
             

        }

        </div>
    )
}