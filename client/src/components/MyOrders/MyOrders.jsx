import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";

const MyOrders = () => {
  const [mailBody, setMailBody] = useState(<h2>no purchases yet </h2>);

  const history = useHistory()

  useEffect(() => {
    if(!window.localStorage.token){
      window.localStorage.setItem('errorOrder', 'You must be logged in to access this page')
      history.push('/')
    }//

    const status = history.location.search.split("&").find(e => e === "status=approved");
    console.log(status)
    //status = "status=approved" caso1  --- algo      --- true
    //status = undefined         caso2  --- undefined --- false
    if(status){
      axios.get("http://localhost:3001/api/mailBody")
      .then(r => setMailBody(r.data))
    }
  }, [])


  return (
    <div>
        <h1>My Orders</h1>
        <div>{mailBody}</div>
    </div>
  )
}

export default MyOrders