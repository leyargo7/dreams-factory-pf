import React, { useEffect } from 'react'
import { getDeletedUsers } from '../../../redux/actions/actions'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import s from './DeleteUsers.module.css'

const DeleteUsers = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userDel = useSelector((state) => state.usersDelete);

    useEffect(() => {
        if (!localStorage.admin) {
            history.push("/");
          }

          const fetchUsers = async () => {
            dispatch(getDeletedUsers());
          };
          fetchUsers();
    }, [])
  return (
    <div>
        <h1>Deleted Users</h1>

        {
            userDel.map((user, i) => {
                return (
                    <div key={i} className={s.deleted}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DeleteUsers