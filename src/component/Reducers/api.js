import axios from "axios";
import { setCurrentMovie, setMovies } from "./MovieReducer";


export const getMovie = (currentPage, page) => {
    return async (dispatch) => {
        const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${page}&page=${currentPage}`)
        dispatch(setMovies(response.data.data))
    }
}
//localAPI
//    export const getCurrentMovie = async (id, setDataMovie)=>{
//         //debugger
//            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//            setDataMovie(response.data.data.movie)
//   }

//  export const getCurrentMovie = async (id) => {
//      return async (dispatch) => {
//         // debugger
//          const response = await axios.get(`https://yts.mx/api/v2/list_movies.json/${id}`)
//          console.log('response: ', 1111);
//          dispatch(setCurrentMovie(response.data.data))
//      }

//  }

//ReduxApi
    export const getCurrentMovie = (id)=>{
        return async (dispatch)=>{
            debugger
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            dispatch(setCurrentMovie(response.data.data))
        }
    }