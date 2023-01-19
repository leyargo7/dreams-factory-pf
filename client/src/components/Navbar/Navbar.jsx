import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import s from "./Navbar.module.css";
import logo from "../../images/logo2.jpg";
import login from "../../images/login2.jpg";
import cart from "../../images/carrito-compras3.jpg";
const Navbar = () => {
  return (
    <div className={s.nav}>
      <NavLink className={s.searchbar} to='/home'>
        <img className={s.logonavbar} src={logo} alt="logo" />
      </NavLink>
      <Searchbar />
      <NavLink className={s.searchbar} to='/about'>
        About
      </NavLink>
      <NavLink className={s.searchbar} to='/login'>
      <img className={s.login} src={login} alt="logo" />
      </NavLink>
      <NavLink className={s.searchbar} to='/cart'>
      <img className={s.cart} src={cart} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Navbar;
