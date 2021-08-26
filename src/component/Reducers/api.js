import axios from "axios";
import { setCurrentMovie, setIsFetching, setMovies } from "./MovieReducer";


export const getMovie = (currentPage, page) => {
    return async (dispatch) => {
        const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${page}&page=${currentPage}`)
        dispatch(setMovies(response.data.data))
        dispatch(setIsFetching(false))
    }
}

export const getCurrentMovie = (id)=>{
    return async (dispatch)=>{
        const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        dispatch(setCurrentMovie(response.data.data))
        dispatch(setIsFetching(false))
    }
}
