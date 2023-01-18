import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

