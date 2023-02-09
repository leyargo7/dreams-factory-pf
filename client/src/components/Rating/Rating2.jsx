import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {FaStar} from "react-icons/fa";
import s from "./Rating.module.css";
import { ratingProm } from "../../redux/actions/actions";
import jwt_decode from "jwt-decode";

export default function Rating2 ({id}) {

    const dispatch = useDispatch();
    const [disable,setDisable] = useState(true)
    // const [rating,setRating] = useState();
    const [rating,setRating] = useState(localStorage.getItem('rating'));
    const reviewsState = useSelector((state) => state.reviews);

    const setLocalStorage = value => {
        setRating(value)
        localStorage.setItem("rating",value)
        setDisable(false)
        localStorage.setItem("disable",false)

    };

    const handleStars = (e) => {
        const parse = parseInt(e.target.value);
        const objRating = {product:id, str: parse}
        dispatch(ratingProm(objRating))
        setDisable(false)

    };

    const token = localStorage.getItem("token");
    const decoded = token ? jwt_decode(token) : null;
    const ID = decoded ? JSON.stringify(decoded.id) : localStorage.U;
  
    // useEffect(() => {
    //     dispatch(ratingProm(localStorage.getItem(reviewsState)));
    //   },[]);

    if(ID){
        return(
            <div>
                <div>
                {[...Array(5)].map((star,i) => {
                    const ratingValue = i+1;
                   return (
                        <label>
                        <input
                            // disabled={!disable}
                            type="radio" 
                            className={s.rating}
                            value ={ratingValue}
                            onClick={(e) => {
                                handleStars(e)
                                //setRating(ratingValue)
                                setLocalStorage(ratingValue)
                            }
                            }
                        />
                        <FaStar
                            className={s.star2}n
                            size ={20}
                            color={ratingValue <=  rating ? "#ffc107" : "#e4e5e9"}  
                        />
                        </label>
                   )
                })}
                </div>
                <div>
                    Reviews {reviewsState}
                </div>
                
                {/* <textarea placeholder= "write your comment" />
                <button>submit</button> */}
            </div>
            
        )
    }
    
}