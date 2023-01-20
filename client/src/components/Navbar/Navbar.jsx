import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import logo from "../../images/logo2.jpg";
import login from "../../images/login3.jpg";
import cart from "../../images/carrito-compras3.jpg";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.nav}>
      <NavLink className={s.link} to='/'>
        <img className={s.logonavbar} src={logo} alt='logo' />
      </NavLink>
      <Searchbar />
      <div className={s.right}>
        <NavLink className={s.link} to='/about'>
          <h2>About</h2>
        </NavLink>
        <NavLink className={s.link} to='/login'>
          <img className={s.login} src={login} alt='logo' />
        </NavLink>
        <NavLink className={s.link} to='/cart'>
          <img className={s.cart} src={cart} alt='logo' />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
