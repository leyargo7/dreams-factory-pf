import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";
import Detail from "../Detail/Detail";

const Favorites = () => {
 
    const user = { email: 'dakshdlaksjd@jaskdj.com' }

    let favoritos = useSelector(state => state.Favorites)


    if (user) {
        return (
            <div>
                <h2>FAVORITES</h2>


                <div>
                    {favoritos?.length ? favoritos?.map(e => (
                        <Detail key={e.idProduct} 
                        title={e.title} img={e.img} rating={e.rating} price={e.price} id={e.id }/>
                    )) : (
                        <div><h3>There is not product you are looking for</h3></div>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>You are not registered</h2>
                <div>
                    <NavLink to={"/home"}>
                        <button>GO TO STORE</button>
                    </NavLink>
                </div>
            </div>
        )
    }

}

export default Favorites;