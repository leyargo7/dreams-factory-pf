import axios from 'axios';
import { SERVER_URL } from '../../config.js';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_CATEGORIES = "CLEAN_CATEGORIES";
export const ID_PRODUCT = 'ID_PRODUCT';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const OPEN_CART = "OPEN_CART";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const DELETE_FAVORITE = "DELETE_FAVORITE"

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

export function deleteCart() {
    return {
        type: DELETE_CART,

    }
}