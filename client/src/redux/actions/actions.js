import axios from 'axios';
import { SERVER_URL } from '../../config.js';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_CATEGORIES = "CLEAN_CATEGORIES";
export const ID_PRODUCT = 'ID_PRODUCT';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const DELETE_ONE = "DELETE_ONE"
export const STARS_PROM = "STARS_PROM" 

export const OPEN_CART = "OPEN_CART";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const DELETE_CART = "DELETE_CART";
export const DELETE_FAVORITE = "DELETE_FAVORITE"

//auth
export const REGISTER_USER = "REGISTER_USER";
export const IS_REGISTER = "IS_REGISTER";
export const LOGIN_USER = "LOGIN_USER";
export const IS_LOGIN = "IS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

export const GOOGLE_USER = "GOOGLE_USER";

//erros
export const ERROR_FOR_HOME = "ERROR_FOR_HOME";

//db users
export const GET_USER = "GET_USER";
export const PUT_USER = "PUT_USER";

export function getProducts() {
    return async function (dispatch) {
        const getProducts = await axios.get(`${SERVER_URL}/api/products`);
        return dispatch({
            type: GET_PRODUCTS,
            payload: getProducts.data

        });
    };
};

export function addFavorite(product) {
    return async function (dispatch) {

        dispatch({ type: ADD_FAVORITE, payload: product })
    }
}

export function deleteFavorite(id) {
    return async function (dispatch) {

        dispatch({ type: DELETE_FAVORITE, payload: id })

    }
}

export function getProductByName(name) {
    return {
        type: GET_PRODUCT_BY_NAME,
        payload: name
    }
}

export function getCategories(category) {
    return async (dispatch) => {
        const getCategories = await axios.get(`${SERVER_URL}/api/category/${category}`);
        return dispatch({
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

export function idProduct(id) {
    return async (dispatch) => {
        try {
            const json = await axios.get(`${SERVER_URL}/api/products/${id}`)
            //console.log(json.data.product)
            return dispatch({
                type: ID_PRODUCT,
                payload: json.data.product
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function clearDetail() {
    return {
        type: CLEAR_DETAIL,
    }
}

export function clickOpenCart(payload) {
    return {
        type: OPEN_CART,
        payload
    }
}

export function addCart(payload) {
    return {
        type: ADD_CART,
        payload
    }
}

export function removeCart(payload) {
    return {
        type: REMOVE_CART,
        payload
    }
}

export function deleteCart() {
    return {
        type: DELETE_CART,

    }
}



//-----------------------------auth--------------------------------

export function registerUser(payload) {
    return async function (dispatch) {
        try {
            
            const json = await axios.post(`${SERVER_URL}/api/registeruser`, payload);
            //console.log(json.data)
            return dispatch({
                type: REGISTER_USER,
                payload: json.data
            })
        } catch (error) {
            
            console.error(error)
            return dispatch({
                type: REGISTER_USER,
                payload: error.response.data
            })
        }
    };
}

export function isRegister(payload) {
    return {
        type: IS_REGISTER,
        payload
    }
}

export function loginUser(payload) {
    return async function (dispatch) {
        try {
            const json = await axios.post(`${SERVER_URL}/api/loginuser`, payload);
            
            return dispatch({
                type: LOGIN_USER,
                payload: json.data
            })
        } catch (error) {
            console.error(error)
            return dispatch({
                type: LOGIN_USER,
                payload: error.response.data
            })
        }
    };
}

export function isLogin (payload) {
    return {
        type: IS_LOGIN,
        payload
    }
}

export function errorLogin (payload) {
    return {
        type: ERROR_LOGIN,
        payload
    }
}

//------auth google --------------------

export function googleAuth(payload){
    return{
        type: GOOGLE_USER,
        payload
    }
 }


//-------------------------------errors--------------------------------

export function errorForHome(payload) {
    return {
        type: ERROR_FOR_HOME,
        payload
    }
}

//-------------------------------db users--------------------------------

export function getUser(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${SERVER_URL}/api/v1/user/${id}`);
            return dispatch({
                type: GET_USER,
                payload: json.data
            })
        } catch (error) {
            console.error(error)
            return dispatch({
                type: GET_USER,
                payload: error.response.data
            })  
        }
    }
}

//put user
export function putUser(id, payload) {
    return async function (dispatch) {
        try {
            const json = await axios.put(`${SERVER_URL}/api/v1/user/${id}`, payload);
            return dispatch({
                type: PUT_USER,
                payload: json.data
            })
        } catch (error) {
            console.error(error)
            return dispatch({
                type: PUT_USER,
                payload: error.response.data
            })  
        }
    }
}

export function ratingProm(payload) {
    return{
        type: STARS_PROM,
        payload

    }
}