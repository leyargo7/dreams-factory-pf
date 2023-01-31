import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from './Favorites.module.css'
import Card from "../Card/Card";

const Favorites = () => {

    const user = { email: 'dakshdlaksjd@jaskdj.com' }

    let favoritos = useSelector(state => state.favorites)



    if (user) {
        return (

            <div>
                <h2 className={s.title2}>FAVORITES</h2>
                <div className={s.container}>

                    {favoritos?.length ? favoritos?.map(e => (

                        <Card key={e.title}
                            title={e.title} img={e.img} rating={e.rating} price={e.price} _id={e._id} />

                    )) : (
                        <div className={s.empty}><h3>There is not product you are looking for</h3></div>
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