import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.nav}>
      <NavLink className={s.searchbar} to='/home'>
        <h2>Dreams Factory</h2>
      </NavLink>
      <Searchbar />
      <NavLink className={s.searchbar} to='/about'>
        About
      </NavLink>
      <NavLink className={s.searchbar} to='/login'>
        Login
      </NavLink>
      <NavLink className={s.searchbar} to='/cart'>
        Cart
      </NavLink>
    </div>
  );
};

export default Navbar;
