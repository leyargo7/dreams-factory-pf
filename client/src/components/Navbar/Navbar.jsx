// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clickOpenCart } from "../../redux/actions/actions";
// import { NavLink } from "react-router-dom";
// import Searchbar from "../Searchbar/Searchbar";
// import logo from "../../images/logo2.jpg";
// import login from "../../images/login3.jpg";
// import cart from "../../images/carrito-compras3.jpg";
// import s from "./Navbar.module.css";

// const Navbar = () => {

//   const dispatch = useDispatch();
//   const openCart = useSelector((state) => state.clickOpenCart);

//   const modalOpen = (e) => {
//     e.preventDefault();
//     document.getElementById("modalcontainer").style.display = "flex";
//   };

//   const modalClose = (e) => {
//     e.preventDefault();
//     document.getElementById("modalcontainer").style.display = "none";
//   };

//   const connectUser = (e) => {
//     e.preventDefault();
//     alert("Connect User......");
//   };

//   const btnSignUser = (e) => {
//     e.preventDefault();
//     document.getElementById("modalcontainer").style.display = "none";
//     document.getElementById("modalRegister").style.display = "flex";
//   };

//   const registerModalClose = (e) => {
//     e.preventDefault();
//     document.getElementById("modalRegister").style.display = "none";
//   }

//   const createUser = (e) => {
//     e.preventDefault();
//     alert("Create User......");

//   }

//   const connectGoogle = (e) => {
//     e.preventDefault();
//     alert("Connect Google......");
//   };

//   const connectFacebook = (e) => {
//     e.preventDefault();
//     alert("Connect Facebook......");
//   };

//   const openToCart = (e) => {
//     e.preventDefault();

//     dispatch(clickOpenCart(true));

//   }

//   return (
//     <div className={s.nav}>
//       <NavLink className={s.searchbar} to='/'>
//         <img className={s.logonavbar} src={logo} alt="logo" />
//       </NavLink>
//       <Searchbar />
//       <div className={s.right}>
//         <NavLink className={s.link} to="/about">
//           <h2>About</h2>
//         </NavLink>
//         <NavLink className={s.link} to='/favorites'>
//         <h2>❤</h2>
//         </NavLink>
//         {/* <NavLink className={s.link} to="/login">
//           <img className={s.login} src={login} alt="logo" />
//         </NavLink> */}
//         <div className={s.link} onClick={(e) => modalOpen(e)}>
//           <img className={s.login} src={login} alt="logo" />
//         </div>
//         <NavLink className={s.link} to="/cart">
//           <img className={s.cart} src={cart} alt="logo" />
//         </NavLink>

//       </div>

//       <div className={s.modalContainer} id="modalcontainer">
//         <div className={s.modalBody}>
//           <button className={s.modalClose} onClick={(e) => modalClose(e)}>
//             X
//           </button>
//           <h3>Log In</h3>
//           <div>
//             <form action="" className={s.modalForm}>
//               <input type="text" placeholder="email" className={s.modalUser} />
//               <input
//                 type="password"
//                 placeholder="password"
//                 className={s.modalPass}
//               />
//               <button className={s.modalButton} onClick={(e) => connectUser(e)}>
//                 Next
//               </button>
//               <button
//                 className={s.modalBtnGoogle}
//                 onClick={(e) => connectGoogle(e)}
//               >
//                 Log in Google
//               </button>
//               <button
//                 className={s.modalBtnFacebook}
//                 onClick={(e) => connectFacebook(e)}
//               >
//                 Log in Facebook
//               </button>
//               <div className={s.modalSignIn}>
//                 <p>Create account with email and password</p>
//                 <button onClick={(e) => btnSignUser(e)}>Sign In</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className={s.modalRegister} id="modalRegister">
//         <div className={s.modalBodyRegister}>
//           <button className={s.modalCloseRegister} onClick={e=>registerModalClose(e)}>X</button>
//           <h3>Register</h3>
//           <div>
//             <form action="" className={s.modalFormRegister}>

//                 <input type="text" placeholder="name" />
//                 <input type="text" placeholder="address" />
//                 <input type="text" placeholder="email" />
//                 <input
//                   type="password"
//                   placeholder="password"
//                 />
//                 <input type="password" placeholder="repeat password" />

//               <button className={s.modalBtnRegister} onClick={e => createUser(e)}>Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOpenCart,
  registerUser,
  isRegister,
  loginUser,
} from "../../redux/actions/actions";
import { NavLink, useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import logo from "../../images/logo2.jpg";
import login from "../../images/login3.jpg";
import cart from "../../images/carrito-compras3.jpg";
import s from "./Navbar.module.css";
import Cart from "../ShoppingCart/Cart";
import MyOrders from "../MyOrders/MyOrders";

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

  useEffect(() => {
    if (window.localStorage.token) {
      document.getElementById("logoSession").style = "display: none";
    }
    if(dbUser.message === "user created"){
      document.getElementById("modalRegister").style = "display: none";
      toast.success("User created, please log in");
    }
    //console.log("isRegister", stateIsRegister);


  }, [dbUser.message]);

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
      if (isLogg.auth) {
        modalClose(e);
        localStorage.setItem("token", JSON.stringify(isLogg.token));
        document.getElementById("logoSession").style = "display: none";

        toast.success("Welcome, Log In Successfull");
        history.push("/");
      }
    } else {
      alert("Complete all fields");
    }
  };

  const connectGoogle = (e) => {
    e.preventDefault();
    alert("Connect Google......");
  };

  const connectFacebook = (e) => {
    e.preventDefault();
    alert("Connect Facebook......");
  };

  const openToCart = (e) => {
    e.preventDefault();

    dispatch(clickOpenCart(true));
  };

  const logOut = (e) => {
    window.localStorage.clear();
    document.getElementById("logoSession").style = "display: flex";
    toast.success("Log Out Successfull");
    history.push("/");
  };


  return (
    <div className={s.nav}>
      <Toaster />
      <NavLink className={s.searchbar} to="/">
        <img className={s.logonavbar} src={logo} alt="logo" />
      </NavLink>
      <div className={s.right}>
        <NavLink className={s.link} to="/about">
          <h2>About</h2>
        </NavLink>
        <NavLink className={s.link} to="/favorites">
          <h2>❤</h2>
        </NavLink>

        {window.localStorage.token ? (
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
          <img className={s.cart} src={cart} alt="logo" />
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
              <button
                className={s.modalBtnFacebook}
                onClick={(e) => connectFacebook(e)}
              >
                Log in Facebook
              </button>
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
