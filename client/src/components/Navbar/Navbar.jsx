import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOpenCart,
  registerUser,
  isRegister,
  loginUser,
  googleAuth,
} from "../../redux/actions/actions";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../../images/logo2.jpg";
import login from "../../images/login3.jpg";
import s from "./Navbar.module.css";
import Cart from "../ShoppingCart/Cart";
import MyOrders from "../MyOrders/MyOrders";
import {FaUsers} from "react-icons/fa"
import {RiHeartsFill} from "react-icons/ri"
import {RiShoppingCartFill} from "react-icons/ri"

const Navbar = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  //const openCart = useSelector((state) => state.clickOpenCart);
  //const stateRegister = useSelector((state) => state.isRegister);
  const isLogg = useSelector((state) => state.dataLogin);
  const stateIsRegister = useSelector((state) => state.isRegister);
  const dbUser = useSelector((state) => state.user);
  const googleUser = useSelector((state) => state.authGoogle);

  useEffect(() => {
    if (localStorage.U || window.localStorage.token) {
      document.getElementById("logoSession").style = "display: none";
    }
    if(dbUser.message === "user created"){
      document.getElementById("modalRegister").style = "display: none";
      toast.success("User created, please log in");
    }
    //console.log("isRegister", stateIsRegister);


  }, [dbUser.message, googleUser._id]);

  const modalOpen = (e) => {
    e.preventDefault();
    setUserLogin({
      email: "",
      password: "",
    });
    //document.getElementById("modalcontainer").style.display = "flex";
    document.getElementById("modalcontainer").style = "display: flex";
  };

  const modalClose = (e) => {
    e.preventDefault();
    document.getElementById("modalcontainer").style = "display: none";
  };

  const btnSignUser = (e) => {
    e.preventDefault();
    document.getElementById("modalcontainer").style = "display: none";
    document.getElementById("modalRegister").style = "display: flex";
  };

  const registerModalClose = (e) => {
    //e.preventDefault();

    document.getElementById("modalRegister").style = "display: none";
  };

  const handleCreateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginUser = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (e) => {
    e.preventDefault();
    if (user.password === user.password2) {
      createUser();
    } else {
      alert("Passwords do not match");
    }
  };

  const createUser = async() => {
    
    if (user.name && user.address && user.email && user.password) {
      
      dispatch(registerUser(user));
      dispatch(isRegister(true));
      
      
      setUser({
        name: "",
        address: "",
        email: "",
        password: "",
        password2: "",
      });
      
      //registerModalClose(e);
      history.push("/");
      
      
    } else {
      alert("Complete all fields");
    }

  };


  
  const connectUser = (e) => {
    e.preventDefault();
    if (userLogin.email && userLogin.password) {
      dispatch(loginUser(userLogin));
      setTimeout(() => {
        if (isLogg.auth) {
          modalClose(e);
          localStorage.setItem("token", JSON.stringify(isLogg.token));
          document.getElementById("logoSession").style = "display: none";
  
          toast.success("Welcome, Log In Successfull");
          history.push("/");
        }
      }, 500);
    } else {
      alert("Complete all fields");
    }
  };

  const connectGoogle =  (e) => {
    e.preventDefault();
    
    window.open( "http://localhost:3001/api/v1/login/google/", "_self")
  };



  const openToCart = (e) => {
    e.preventDefault();

    dispatch(clickOpenCart(true));
  };

  const logOut = async(e) => {
    window.localStorage.clear();
    dispatch(googleAuth([]));
    document.getElementById("logoSession").style = "display: flex";
    toast.success("Log Out Successfull");
    await axios.get("http://localhost:3001/api/v1/logout")
    .then((res) => {
      console.log("Log Out Successfull");
    })
    .catch((err) => {
      console.log("Not properly authenticated ", err);
    }); 
    history.push("/");
  };


  return (
    <div className={s.nav}>
      <NavLink className={s.searchbar} to="/">
        <img className={s.logonavbar} src={logo} alt="logo" />
      </NavLink>
      <div className={s.right}>
        <NavLink className={s.link} to="/about">
          <h2><FaUsers/></h2>
        </NavLink>
        <NavLink className={s.link} to="/favorites">
          <h2><RiHeartsFill/></h2>
        </NavLink>

        {window.localStorage.token || localStorage.U ? (
          <div>
            <NavLink className={s.link} to="/myorders">
              <button className={s.btnOrder}>My Orders</button>
            </NavLink>
            <button className={s.btnOut}  onClick={logOut}>Log Out</button>
          </div>
        ) : null}

        <div className={s.link} id="logoSession" onClick={(e) => modalOpen(e)}>
          <img className={s.login} src={login} alt="logo" />
        </div>

        <div className={s.link} onClick={(e) => openToCart(e)}>
          <h2><RiShoppingCartFill/></h2>
        </div>
      </div>
      <div className={s.modalContainer} id="modalcontainer">
        <div className={s.modalBody}>
          <button className={s.modalClose} onClick={(e) => modalClose(e)}>
            X
          </button>
          <h3>Log In</h3>
          <div>
            <form action="" className={s.modalForm}>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={userLogin.email}
                className={s.modalUser}
                onChange={(e) => handleLoginUser(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={userLogin.password}
                className={s.modalPass}
                onChange={(e) => handleLoginUser(e)}
              />
              {isLogg === "wrong email or password" ? (
                <p className={s.error}>Incorrect email or password</p>
              ) : null}
              
              <button className={s.modalButton} onClick={(e) => connectUser(e)}>
                Next
              </button>
              <button
                className={s.modalBtnGoogle}
                onClick={(e) => connectGoogle(e)}
              >
                Log in Google
              </button>
              {/* <button
                className={s.modalBtnFacebook}
                onClick={(e) => connectFacebook(e)}
              >
                Log in Facebook
              </button> */}
              <div className={s.modalSignIn}>
                <p>Create account with email and password</p>
                <button onClick={(e) => btnSignUser(e)}>Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={s.modalRegister} id="modalRegister">
        <div className={s.modalBodyRegister}>
          <button
            className={s.modalCloseRegister}
            onClick={(e) => registerModalClose(e)}
          >
            X
          </button>
          <h3>Register</h3>
          <div>
            <form action="" className={s.modalFormRegister}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={user.name}
                onChange={(e) => handleCreateUser(e)}
              />
              <input
                type="text"
                name="address"
                placeholder="address"
                value={user.address}
                onChange={(e) => handleCreateUser(e)}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={user.email}
                onChange={(e) => handleCreateUser(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => handleCreateUser(e)}
              />
              <input
                type="password"
                name="password2"
                placeholder="repeat password"
                value={user.password2}
                onChange={(e) => handleCreateUser(e)}
              />
              {
                dbUser === "email already taken" ? (
                  <p className={s.error}>Email already taken</p>): null
              }

              <button
                className={s.modalBtnRegister}
                onClick={e=>validatePassword(e)}
              >
                Register
              </button>
 
            </form>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default Navbar;
