import { GET_PRODUCTS, GET_CATEGORIES, CLEAN_CATEGORIES } from "../actions/actions";

const initialState = {
    all: [],
    category: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                all: action.payload
            }
            
                // case"USER_FAVOURITE":
                // return{
                //     ...state,
                //     Favourites: action.payload
                // }
                // case "DELETE_FAVOURITE":
                //     let filteredFavourites = state.Favourites
                //     filteredFavourites = filteredFavourites.filter(e=>e.idProduct !== action.payload)
                //     return{
                //         ...state,
                //         Favourites: filteredFavourites
                //     }

        case GET_CATEGORIES:
            return {
                ...state,
                category: action.payload
            }
        case CLEAN_CATEGORIES:
            return {
                ...state,
                category: []
            }
        default:
            return { ...state };
    }
}

export default rootReducer;  