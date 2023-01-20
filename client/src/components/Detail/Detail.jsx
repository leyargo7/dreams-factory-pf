import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { idProduct } from "../../redux/actions/actions";

export default function Detail(){
    const dispatch = useDispatch()
    const productID = useSelector(state => state.idProduct)
    const {id} = useParams()
    //console.log(id)
    useEffect(() => {
        dispatch(idProduct(id));
      }, [dispatch, id]);
    
    return(
        <div>
            {!productID._id 
            ? <p>Loading...</p> :
            <div>
                <h1>{productID.title}</h1>
                <img src={productID.img} alt='' />
                <span>{productID.inStock}</span>
                <span>{productID.category}</span>
            </div>
             

        }

        </div>
    )
}