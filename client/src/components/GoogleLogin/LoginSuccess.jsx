import React, {useState, useEffect} from "react";
import axios from "axios";
import { putUser, googleAuth } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./LoginSuccess.module.css";

const LoginSuccess = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
  });
  const [address, setAddress] = useState({
    address: "",
  });

  useEffect(() => {
    fetchAuthUser();
    
  }, []);


  const fetchAuthUser = async () => {
    const response = await axios
      .get("http://localhost:3001/api/v1/auth/user", { withCredentials: true })
      .catch((err) => {
        console.log("Not properly authenticated");
      })

    if (response && response.data) {
      setDataUser(response.data);
      localStorage.setItem("U",JSON.stringify(response.data._id));
      dispatch(googleAuth(response.data));
      if(response.data.address !== "empty"){
        history.push("/");
      }
    } 
  }

  const handleAddress = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const btnUpdate = (e) => {
    e.preventDefault();
    dispatch(putUser(dataUser._id, address));
 
    history.push("/");
  };

  return (
    <div className={s.container}>
      <div className={s.body}>
        <h3>Please update address</h3>
      
        <form action="" className={s.formStyle}>
          <input
            type="text"
            name="name"
            id="name"
            //placeholder="Name"
            value={dataUser.name}
            disabled
          />
          <input
            type="text"
            name="email"
            id="email"
            value={dataUser.email}
            disabled
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={address.address}
            onChange={e=>handleAddress(e)}
          />
          <button className={s.btnUpdate} onClick={e=>btnUpdate(e)}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSuccess;