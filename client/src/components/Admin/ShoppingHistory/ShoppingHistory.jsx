import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ShoppingHistory = () => {
    const history = useHistory();
    const purchases = JSON.parse(localStorage.getItem('purchasesHistory'));

    
    useEffect(() => {
        if (!localStorage.admin) {
          history.push("/");
        }
      }, [history]);

  return (
    <div>
        <h2>Shopping User</h2>
        <div>
            {purchases && purchases.map((purchase, i) => {
                return (
                    <div key={i}>
                        <p>{purchase.title}</p>
                        <p>{purchase.price}</p>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShoppingHistory