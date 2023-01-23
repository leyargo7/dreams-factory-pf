import React, { useContext } from "react";
import s from "./Favorites.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const FavoriteCard = ({ obj, user }) => {
    console.log(obj, user)
    const actualUser = useSelector(state => state.user)
    let stringLocalStorage = actualUser ? actualUser.email : "defaultLocalStorage"


    const notify = () => {

    }

    const notifyInCart = () => {

    }
    let x = [];
    const addProductCartStorage = (o) => {
        let fromLocalStorage = JSON.parse(localStorage.getItem(stringLocalStorage));
        if (fromLocalStorage) {
            let filtered = fromLocalStorage.filter(
                (e) => e._id === o._id
            );
            if (filtered.length) {
                notifyInCart();
                return;
            }

            x = [...fromLocalStorage, o];
            console.log(x);
            localStorage.setItem(stringLocalStorage, JSON.stringify(x));
            notify();
            console.log(x);
            return;
        }
        x = [...x, o];
        localStorage.setItem(stringLocalStorage, JSON.stringify(x));
        console.log(x);
    };

    return (
        <div className={s.Container}>
            {obj?._idinStock <= 0 ? (
                <div className={s.containerImg}>
                    {/* <img className={s.Agotado} src={agotado} alt="empty" /> */}
                    <div className={s.C.img}>
                        <img className={s.img} src={obj.img} alt={obj.title} />
                    </div>
                </div>
            ) : (
                <div className={s.contaienerImg}>
                    <div className={s.img}>
                        <img src={obj?.img} alt={obj.title} />
                    </div>
                </div>
            )}

            <div className={s.Container2}>
                <div className={s.ContainerName}>
                    <NavLink to={`/detail/${obj._id}`}>
                        <p>{obj.title}</p>
                    </NavLink>
                </div>

                <div className={s.containerQuery}>
                    <NavLink to={`/detail/${obj._id}`}>
                        <span>{obj.title.slice(0, 50)}..</span>
                    </NavLink>
                </div>

                {obj.inStock <= 0 ? (
                    <div className={s.ContainerCartDisable}>
                        <img />
                    </div>
                ) : (
                    <div onClick={() => addProductCartStorage(obj)}>
                        <i></i>
                    </div>
                )}

                {/* {obj.reduction !== 0 ? (
                    <div className={s.ContainerDesc}>
                        <span>-{obj.reduction}%</span>
                    </div>
                ) :
                    null} */}
            </div>

            <div><p>${obj.price}</p>



            </div>
        </div>)
}

export default FavoriteCard 