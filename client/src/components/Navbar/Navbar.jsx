import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOpenCart,
  registerUser,
  isRegister,
  loginUser,
  googleAuth,
} from "../../redux/actions/actions";
import { NavLink, useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import logo from "../../images/logo2.jpg";
import login from "../../images/login3.jpg";
import s from "./Navbar.module.css";
import Cart from "../ShoppingCart/Cart";
import MyOrders from "../MyOrders/MyOrders";
import {FaUsers} from "react-icons/fa"
import {RiHeartsFill} from "react-icons/ri"
import {RiShoppingCartFill} from "react-icons/ri"
import{FcGoogle} from 'react-icons/fc'
import{MdOutlineError} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'


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
    if(window.localStorage.token){
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      dispatch(googleAuth(decoded.id));


      document.getElementById("logoSession").style = "display: none";
    }
    if (localStorage.U) {
      dispatch(googleAuth(JSON.parse(localStorage.U)));
      document.getElementById("logoSession").style = "display: none";

    }
    if(dbUser.message === "user created"){
      document.getElementById("modalRegister").style = "display: none";
      toast.success("User created, please log in");
    }

  }, [dbUser.message, dispatch]);

  //--------------------------------------------

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
      toast.error("Passwords do not match");
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
      
      toast.error("Complete all fields");
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
          window.location.reload();
        }
      }, 500);
    } else {
      toast.error("Complete all fields");
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
    window.location.reload()
  };


  const openAdmin = (e) => {
    e.preventDefault();
    if(googleUser.role === "admin"){
      localStorage.setItem("admin", true);
      //document.getElementById("logoSession").style = "display: none";
      history.push("/admin");

    }else{
      toast.error("You are not admin");
    }
    
  }

  const openClient = (e) => {
    e.preventDefault();
    if(googleUser.role === "client"){
      localStorage.setItem("client", true);
      //document.getElementById("logoSession").style = "display: none";
      history.push("/myaccount");

    }else{
     toast.error("You are not client");
    }
  }

  return (
    <div className={s.nav}>
      <NavLink className={s.searchbar} to="/">
        <img className={s.logonavbar} src={logo} alt="logo" />
      </NavLink>
      {
        // boton admin
        googleUser.role === "admin" ? (<button className={s.btnAdminOpen} onClick={e=>openAdmin(e)}>Admin</button>) : null
      }
      {
        googleUser.role === "client" ? (<button className={s.btnAdminOpen} onClick={e=>openClient(e)}>My Account</button>) : null
      }
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
            x
          </button>
          <h3>Login Here</h3>
          <div>
            <form action="" className={s.modalForm}>
              <label className={s.default} for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={userLogin.email}
                className={s.modalUser}
                onChange={(e) => handleLoginUser(e)}
                id="email"
              />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userLogin.password}
                className={s.modalPass}
                onChange={(e) => handleLoginUser(e)}
                id='password'
              />
              {isLogg === "wrong email or password" ? (
                <p className={s.error}><MdOutlineError className={s.logoerror}/>Incorrect email or password</p>
              ) : null}
              
              <button className={s.modalButton} onClick={(e) => connectUser(e)}>
                LOGIN
              </button>
              <button
                className={s.modalBtnGoogle}
                onClick={(e) => connectGoogle(e)}
              >
                <FcGoogle className={s.google}/> 
                GOOGLE
              </button>
              {/* <button
                className={s.modalBtnFacebook}
                onClick={(e) => connectFacebook(e)}
              >
                Log in Facebook
              </button> */}
              <div className={s.modalSignIn}>
                <p>Don't have an account yet?</p>
                <button onClick={(e) => btnSignUser(e)}>SIGN IN</button>
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
            x
          </button>
          <h3>Register</h3>
          <div>
            <form action="" className={s.modalFormRegister}>
              <label className={s.Regname}>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={user.name}
                onChange={(e) => handleCreateUser(e)}
              />
              <label className={s.Regaddress}>Address:</label>
              <input
                type="text"
                name="address"
                placeholder="address"
                value={user.address}
                onChange={(e) => handleCreateUser(e)}
              />
              <label className={s.Regemail}>Email:</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={user.email}
                onChange={(e) => handleCreateUser(e)}
              />
              <label className={s.Regpassword}>Password:</label>
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
              ><BsFillPersonFill className={s.iconReg}/>
                REGISTER
              </button>
 
            </form>
          </div>
        </div>
      </div>
        <Toaster />    
      <Cart />
    </div>
  );
};

export default Navbar;
