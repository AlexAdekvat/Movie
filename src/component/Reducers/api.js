import axios from "axios";
import { setMovies, setMoviesPage } from "./MovieReducer";

// const movieApi = axios.create({
//     baseURL: 'https://yts.mx/api/v2/list_movies'
// })

// export const movieName = {
//     getmovies() {
//         return movieApi.get(`/movies/${id}`)
//         .then(response => {
//             return response.data;
//         });
//     }
// }

export const getMovie = (currentPage, page)=>{
    return async (dispatch)=>{
        const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${page}&page=${currentPage}`)
        dispatch(setMovies(response.data.data))
       // dispatch(setMoviesPage(response.data))
    }
}