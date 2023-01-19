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