import {
  GET_PRODUCTS,
  POST_PRODUCT,
  GET_PRODUCT_BY_NAME,
  GET_CATEGORIES,
  CLEAN_CATEGORIES,
  ID_PRODUCT,
  ADD_FAVORITE,
  CLEAR_DETAIL,
  OPEN_CART,
  ADD_CART,
  REMOVE_CART,
  DELETE_CART,
  DELETE_FAVORITE,
  REGISTER_USER,
  IS_REGISTER,
  LOGIN_USER,
  IS_LOGIN,
  ERROR_LOGIN,
  ERROR_FOR_HOME,
  GOOGLE_USER,
  GET_ALL_USERS,
  GET_USER,
  PUT_USER,
  STARS_PROM,
  UPDATE_PASSWORD,
  DELETE_USER,
  USERS_DELETED,
} from "../actions/actions";

const initialState = {
  all: [],
  category: [],
  favorites: [],
  idProduct: [],
  clickOpenCart: false,
  add_Cart: [],
  copyProducts: [],
  postProduct: [],
  user: [],
  errorLogin: [],
  isRegister: false,
  dataLogin: [],
  isLogin: false,
  errorHome: false,
  authGoogle: [],
  idUser: [],
  putUser: [],
  stars:[],
  reviews:[],
  allUsers: [],
  deletedUsers: [],
  usersDelete: [],
  updatePass: [],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all: action.payload,
        copyProducts: action.payload,
      };

    case GET_PRODUCT_BY_NAME: {
      const all = state.all;
      const search = all.filter((f) =>
        f.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        copyProducts: search,
      };
    }

    case POST_PRODUCT:
      return {
        ...state,
        postProduct: action.payload,
      };


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
      const found = state.add_Cart.find((p) => action.payload._id === p._id);
      if (!found) {
        return {
          ...state,
          add_Cart: [...state.add_Cart, { ...action.payload, cant: 1 }],
        };
      } else {
        return {
          ...state,
          add_Cart: [
            ...state.add_Cart.filter((p) => p._id !== found._id),
            { ...found, cant: found.cant + 1 },
          ],
        };
      }
    case REMOVE_CART:
      const scan = state.add_Cart.find((p) => action.payload._id === p._id);
      if (scan && scan.cant > 1) {
        return {
          ...state,
          add_Cart: [
            ...state.add_Cart.filter((p) => p._id !== scan._id),
            { ...scan, cant: scan.cant - 1 },
          ],
        };
      } else {
        return {
          ...state,
          add_Cart: [...state.add_Cart.filter((p) => p._id !== scan._id)],
        };
      }
    case DELETE_CART:
      return {
        ...state,
        add_Cart: [],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el._id !== action.payload),
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
      };

    case LOGIN_USER:
      return {
        ...state,
        dataLogin: action.payload,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.payload,
      };

    case ERROR_FOR_HOME:
      return {
        ...state,
        errorHome: action.payload,
      };

    case GOOGLE_USER:
      return {
        ...state,
        authGoogle: action.payload,
      };

      case GET_ALL_USERS:
        return {
          ...state,
          allUsers: action.payload,
        }

    case GET_USER:
      return {
        ...state,
        idUser: action.payload,
      };

    case PUT_USER:
      return {
        ...state,
        putUser: action.payload,
      };
    case STARS_PROM:
      return{
        ...state,
        stars: [...state.stars,action.payload],
        reviews: state.stars.length+1
      }

      case UPDATE_PASSWORD:
      return {
        ...state,
        updatePass: action.payload,
      }
    
    case DELETE_USER:
      return {
        ...state,
        deletedUsers: action.payload,
      }
    
    case USERS_DELETED:
      return {
        ...state,
        usersDelete: action.payload,
      }

    default:
      return { ...state };
  }
}

export default rootReducer;
