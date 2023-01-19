import axios from 'axios';

export function getProducts () {
    return async function (dispatch) {
        const getProducts = await axios.get("http://localhost:3001/api/products");
        return dispatch ({
            type: 'GET_PRODUCTS',
            payload: getProducts.data
            
        });
    };
};

export function getProductsByName(payload){
    console.log("Action",payload)
    return{
        type:"GET_PRODUCTS_BY_NAME",
        payload:payload,
    }
}