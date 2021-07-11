import { combineReducers } from "redux";
import {createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { movieReduser } from "./MovieReducer";
import { movieCountReduser } from "./MovieReducer copy";

const rootReducer = combineReducers({
    movie: movieReduser,
    // movieCount: movieCountRedusermovies
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )