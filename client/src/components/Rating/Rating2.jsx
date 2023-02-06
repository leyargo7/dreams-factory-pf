import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {FaStar} from "react-icons/fa";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import Rating from "react-rating";
import s from "./Rating.module.css";

export default function Rating2 () {

    const productID = useSelector((state) => state.idProduct);
    const [rating,setRating] = useState({})
    const [ratingProm,setRatingProm] = useState({
        stars:[productID.rating],
        reviews:0
    });

    function handleProm (e){
        setRatingProm({
            ...ratingProm,
            stars:[...ratingProm.stars,e.target.value],
            reviews:ratingProm.reviews+1
        });     
    };

    const convert = ratingProm.stars?.map(el => parseInt(el))
    const rating2 =convert?.reduce((acc,arc)=> acc+arc)/ratingProm.stars.length
    console.log(rating2);
    console.log(ratingProm.reviews);

    return(
        <div>
            <Rating
                initialRating={rating2}
                emptySymbol={<BsStar />}
                fullSymbol={<BsStarFill />}
                halfSymbol={<BsStarHalf />}
                readonly={true}
            />
            <div>
               Reviews {ratingProm.reviews}
            </div>
            <div>
            {[...Array(5)].map((star,i) => {
                const ratingValue = i+1;
               return (
                    <label>
                    <input
                        type="radio" 
                        className={s.rating}
                        value ={ratingValue}
                        onClick={(e) => {
                            handleProm(e)
                            setRating(ratingValue)
                        }
                        }
                    />
                    <FaStar
                        className={s.star2}
                        size ={20}
                        color={ratingValue <=  rating ? "#ffc107" : "#e4e5e9"}  
                    />
                    </label>
               )
            })}
            </div>
            {/* <textarea placeholder= "write your comment" />
            <button>submit</button> */}
        </div>
        
    )
}