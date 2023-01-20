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


// export function getFavourite(){
//     return async function (dispatch) {
//         return dispatch({ type: 'USER_FAVOURITE', payload: data.Products })  
//     }
// }

// export function deleteFavourite(){
//     return async function (dispatch) {
//         return dispatch({type: 'DELETE_FAVOURITE', payload:data.products})
//     }
// }

