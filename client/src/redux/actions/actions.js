import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_CATEGORIES = "CLEAN_CATEGORIES";

export function getProducts() {
    return async function (dispatch) {
        const getProducts = await axios.get("http://localhost:3001/api/products");
        return dispatch({
            type: GET_PRODUCTS,
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

export function getCategories(category) {
    return async (dispatch) => {
        const getCategories = await axios.get(`http://localhost:3001/api/category/${category}`);
        return dispatch ({
            type: GET_CATEGORIES,
            payload: getCategories.data
        });
    }
}

export function cleanCategories() {
    return {
        type: CLEAN_CATEGORIES,
    }
}
