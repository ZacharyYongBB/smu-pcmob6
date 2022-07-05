import { combineReducers, createStore } from "redux";
import blogAuthReducer from "./ducks/blogauth";

const reducer = combineReducers({
    auth:blogAuthReducer,
});

const store = createStore(reducer);

export default store;