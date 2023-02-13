import React, { useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { getUsers, deleteUser } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import s from "./ViewUsers.module.css";


const ViewUsers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.allUsers);
  const userDel = useSelector((state) => state.deletedUsers); 

  useEffect(() => {
    if(!localStorage.admin) {
      history.push('/')
    }
    const fetchUsers = async () => {
      dispatch(getUsers());
    };
    fetchUsers();
  }, []);

  
  const handleDelete = (e, id) => {
    e.preventDefault();
    let option = window.confirm("Are you sure you want to delete this user?");
    if (option) {
      dispatch(deleteUser(id));
      alert("User deleted");
      history.push("/admin");
    }else{
      alert("User not deleted");
    }

    //dispatch(deleteUsers(id));
  }

  const handleShopping = (e, purchases) => {
    e.preventDefault();
    localStorage.removeItem('purchasesHistory')
    localStorage.setItem('purchasesHistory', JSON.stringify(purchases))
    history.push('/admin/shoppinghistory')
  }
    


 
  return (
    <div>
      <h1 className={s.titleUser}>Users</h1>

      <div className={s.dataUser}>
        {users.map((user, i) => {
          return (
            <div key={i} className={s.dataP}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              //<button className={s.btnShopping} onClick={e=>handleShopping(e, user.purchases)}>Shopping history</button>
              <button className={s.btnDelete} onClick={e=>handleDelete(e, user._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewUsers;
