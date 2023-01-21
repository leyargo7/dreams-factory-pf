import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

    const user = { email: 'dakshdlaksjd@jaskdj.com' }

    // let products = useSelector(state => state.all);
    let favoritos = useSelector(state => state.Favorites)

    // favoritos = favoritos?.map(ev => ev.idProduct)

    if (user) {
        return (
            <div>
                <h2>FAVORITES</h2>

                <div>
                    {favoritos?.length ? favoritos?.map(e => (
                        <FavoriteCard key={e.idProduct} obj={e} />
                    )) : (
                        <div><h3>There is no product you are looking for</h3></div>
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