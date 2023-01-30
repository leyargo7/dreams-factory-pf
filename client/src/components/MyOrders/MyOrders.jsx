import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const MyOrders = () => {

  const history = useHistory()

  useEffect(() => {
    if(!window.localStorage.token){
      window.localStorage.setItem('errorOrder', 'You must be logged in to access this page')
      history.push('/')
    }

  }, [])


  return (
    <div>
        <h1>My Orders</h1>
    </div>
  )
}

export default MyOrders