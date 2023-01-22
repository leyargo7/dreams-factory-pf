import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_CATEGORIES = "CLEAN_CATEGORIES";
export const ID_PRODUCT = 'ID_PRODUCT';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export function getProducts() {
    return async function (dispatch) {
        const getProducts = await axios.get("http://localhost:3001/api/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: getProducts.data
        });
    };
};


export function addFavorite(product){
    return async function (dispatch) {
        return dispatch({ type: ADD_FAVORITE, payload:product})  
    }
}

// export function deleteFavourite(idProduct){
//     return async function (dispatch) {
//         return dispatch({type: 'DELETE_FAVOURITE', payload:idProduct})
//     }
// }
export function getProductByName (name) {
    return async function (dispatch) {
        const getProductByName = await axios.get("http://localhost:3001/api/products?title=" + name);
        return dispatch ({
            type: GET_PRODUCT_BY_NAME,
            payload: getProductByName.data
            
        });
    };
}

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

export function idProduct(id){
    return async(dispatch) => {
        try {
            const json = await axios.get(`http://localhost:3001/api/products/${id}`)
          console.log(json.data.product)
            return dispatch({
                type: ID_PRODUCT,
                payload: json.data.product
            })
        } catch (error) {
            console.error(error)
        }
    }
}

