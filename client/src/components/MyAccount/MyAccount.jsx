import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updatePassword, putUser } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import s from "./MyAccount.module.css";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authGoogle);

  const [password, setPassword] = useState({
    currentPass: "",
    password: "",
    password2: "",
  });

  const [address, setAddress] = useState({
    address: "",
  });

  const validatePass = () => {
    if(!password.currentPass || !password.password || !password.password2){
      alert("Please fill all the fields")
      
    }
    else if (password.password !== password.password2) {
      alert("Passwords do not match");
      return false;
    }else {
      Send();
    }
    
  };

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  }


  const Send = () => {
    if (user._id) {
      dispatch(updatePassword(user._id, password));
      history.push("/");

      setPassword({
        currentPass: "",
        password: "",
        password2: "",
      });
    } else {
      alert("Error!!!");
    }
  };

  const sendAddress = (e) => {
    e.preventDefault();
    if (user._id) {
      dispatch(putUser(user._id, address));
      alert("Address updated");
      history.push("/");
      window.location.reload();
    } else {
      alert("Error...!!!");
    }
  }


  return (
    <div>
      <h2>Data you can update</h2>
      <hr />

      <h3>Change Password</h3>
      <div className={s.formOne}>
        <input
          type="password"
          placeholder="current password"
          name="currentPass"
          value={password.currentPass}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="New Password"
          name="password"
          value={password.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password.password2}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={validatePass}>Update</button>
      </div>

      <hr />
      <h3>Change Address</h3>
      <div className={s.formTwo}>
        <input
          type="text"
          placeholder={user.address}
          name="address"
          value={address.address}
          onChange={(e) => handleChangeAddress(e)}
        />
        <button onClick={e=>sendAddress(e)}>Update</button>
      </div>
    </div>
  );
};

export default MyAccount;