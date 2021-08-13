import { combineReducers } from "redux";
import {createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { movieIdReducer, movieReduser } from "./MovieReducer";


const rootReducer = combineReducers({
    movie: movieReduser,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)) )