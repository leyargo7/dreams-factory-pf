import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_CATEGORIES,
  CLEAN_CATEGORIES,
  ID_PRODUCT,
  ADD_FAVORITE,
  CLEAR_DETAIL,
  OPEN_CART,
  ADD_CART,
  DELETE_CART,
  DELETE_FAVORITE,
  REGISTER_USER,
  IS_REGISTER,
  LOGIN_USER,
  IS_LOGIN,
  ERROR_LOGIN,
  ERROR_FOR_HOME,
  DELETE_ONE
} from "../actions/actions";

const initialState = {
  all: [],
  category: [],
  favorites: [],
  idProduct: [],
  clickOpenCart: false,
  add_Cart: [],
  copyProducts: [],
  user: [],
  errorLogin: [],
  isRegister: false,
  dataLogin: [],
  isLogin: false,
  errorHome: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all: action.payload,
        copyProducts: action.payload,
      };

    case GET_PRODUCT_BY_NAME:{
      const all = state.all
      const search = all.filter((f )=> f.title.toLowerCase().includes(action.payload.toLowerCase()))
      return {
     ...state,
        copyProducts: search,
       };
    }
    case GET_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    case CLEAN_CATEGORIES:
      return {
        ...state,
        category: [],
      };
    case ID_PRODUCT:
      return {
        ...state,
        idProduct: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.find((fav) => fav._id === action.payload._id)
          ? state.favorites
          : [...state.favorites, action.payload],
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        idProduct: [],
      };

    case OPEN_CART:
      return {
        ...state,
        clickOpenCart: !state.clickOpenCart,
      };
    case ADD_CART:
      return {
        ...state,
        add_Cart: [...state.add_Cart, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        add_Cart: [],
      };
    case DELETE_FAVORITE:
      return{
        ...state,
        favorites: state.favorites.filter(el => el._id !== action.payload)
      };

    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,

      };

    case IS_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
      }
    
    case LOGIN_USER:
      return {
        ...state,
        dataLogin: action.payload,
      }
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      }
    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.payload,
      }

    case ERROR_FOR_HOME:
      return {
        ...state,
        errorHome: action.payload,
      }

    default:
      return { ...state };
  }
}

export default rootReducer;
