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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickOpenCart } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.jpg";
import login from "../../images/login3.jpg";
import cart from "../../images/carrito-compras3.jpg";
import s from "./Navbar.module.css";
import Cart from "../ShoppingCart/Cart";


const Navbar = () => {

  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.clickOpenCart);

  const modalOpen = (e) => {
    e.preventDefault();
    document.getElementById("modalcontainer").style.display = "flex";
  };

  const modalClose = (e) => {
    e.preventDefault();
    document.getElementById("modalcontainer").style.display = "none";
  };

  const connectUser = (e) => {
    e.preventDefault();
    alert("Connect User......");
  };

  const btnSignUser = (e) => {
    e.preventDefault();
    document.getElementById("modalcontainer").style.display = "none";
    document.getElementById("modalRegister").style.display = "flex";
  };

  const registerModalClose = (e) => {
    e.preventDefault();
    document.getElementById("modalRegister").style.display = "none";
  }

  const createUser = (e) => {
    e.preventDefault();
    alert("Create User......");

  }

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

  }

  console.log("state open cart", openCart);
  return (
    <div className={s.nav}>
      <NavLink className={s.searchbar} to='/'>
        <img className={s.logonavbar} src={logo} alt="logo" />
      </NavLink>
      <div className={s.right}>
        <NavLink className={s.link} to="/about">
          <h2>About</h2>
        </NavLink>
        <NavLink className={s.link} to='/favorites'>
          <h2>❤</h2>
        </NavLink>

        <div className={s.link} onClick={(e) => modalOpen(e)}>
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
              <input type="text" placeholder="email" className={s.modalUser} />
              <input
                type="password"
                placeholder="password"
                className={s.modalPass}
              />
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
          <button className={s.modalCloseRegister} onClick={e=>registerModalClose(e)}>X</button>
          <h3>Register</h3>
          <div>
            <form action="" className={s.modalFormRegister}>
              
                <input type="text" placeholder="name" />
                <input type="text" placeholder="address" />
                <input type="text" placeholder="email" />
                <input
                  type="password"
                  placeholder="password"
                />
                <input type="password" placeholder="repeat password" />
              
              <button className={s.modalBtnRegister} onClick={e => createUser(e)}>Register</button>
            </form>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default Navbar;