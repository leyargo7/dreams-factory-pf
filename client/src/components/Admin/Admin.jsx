import React, { useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";

import s from "../Admin/Admin.module.css";

const Admin = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.admin) {
      history.push("/");
    }
  }, [history]);

  return (
    <div>
      <h2 className={s.title}>Hi, Admin</h2>

      <div>
        <NavLink to="/admin/addproduct">
          <button className={s.btnAddProduct}>Add Product</button>
        </NavLink>
      </div>

      <hr />

      <div>
        <h2 className={s.title}>Users</h2>

        <div className={s.users}>
          <NavLink to="/admin/users">
            <button className={s.btnViewUsers}>View users</button>
          </NavLink>
          <NavLink to="/admin/deletedusers">
            <button className={s.btnViewUsers}>Deleted users</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Admin;