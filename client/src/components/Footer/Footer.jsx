import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";
import logo from "../../images/logo2.jpg";
import { ImFacebook2, ImTwitter, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <div className={s.container}>
      <img className={s.logonavbar} src={logo} alt='logo' />
      <div className={s.linkscontainer}>
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/faqs'>
          <p>Faqs</p>
        </NavLink>

        <NavLink to='/about'>
          <p>About</p>
        </NavLink>
        <NavLink to='/terms'>
          <p>Terms and conditions</p>
        </NavLink>
        <NavLink to='/privacy'>
          <p>Privacy Policy</p>
        </NavLink>
      </div>
      <div className={s.socialcont}>
        <div>
          <ImFacebook2 />
        </div>
        <div>
          <ImTwitter />
        </div>
        <div>
          <ImInstagram />
        </div>
      </div>

      <hr />
      <p className={s.rights}>
        &copy; {new Date().getFullYear()} - Dreams Factory. All rights reserved
      </p>
    </div>
  );
}
