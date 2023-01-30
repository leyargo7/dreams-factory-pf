import React, {useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch,  useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions/actions";
import s from "./Login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stateReg = useSelector((state) => state.isRegister);
    const isLogg = useSelector((state) => state.dataLogin);

    const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
    });

    useEffect(() => {
        if (stateReg) {
            //toast.success("Welcome now you can log in with your registered email and password!");
            toast('Welcome now you can log in with your registered email and password!', {
                duration: 10000,
                position: 'top-center',
              
                // Styling
                style: {},
                className: '',
              
                // Custom Icon
                icon: ' ✅',
              
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
              
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        }else{
            toast.error("You have not been registered yet!");
        }
        
    }, [stateReg]);

    const handleLoginUser = (e) => {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value,
      });
    };


    const connectUser = (e) => {
      e.preventDefault();
      if (userLogin.email && userLogin.password) {
        dispatch(loginUser(userLogin));
        if (isLogg.auth) {
          //modalClose(e);
          localStorage.setItem("token", JSON.stringify(isLogg.token));
          //document.getElementById("logoSession").style.display = "none";
  
          //toast.success("Welcome, Log In Successfull");
          history.push("/");
        }
      } else {
        alert("Complete all fields");
      }
    };

  return (
    <div>
      <div className={s.modalContainer} id="modalcontainer">
        <div className={s.modalBody}>
          {/* <button className={s.modalClose} onClick={(e) => modalClose(e)}>
            X
          </button> */}
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

            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
