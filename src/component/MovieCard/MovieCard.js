import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCurrentMovie } from '../Reducers/api'
import { setCurrentMovie } from '../Reducers/MovieReducer'
import Comments from './CommentsOnTheFilm'


// const MovieCard = () => {
//     const { id } = useParams();
//     const [dataMovie, setDataMovie] = useState([]);
//     const data = [dataMovie]
//     //const movieInfo = useSelector(state => state.movie.info)
//     //const dispath = useDispatch()
//     useEffect(() => {
//         getCurrentMovie(id, setDataMovie);
//         //dispath(getCurrentMovie())
//     }, [])

//     return (
//         <div>
//             {data.map(({ title, slug, description_full, medium_cover_image },index) => {
//                 return (
//                     <div key={index}>
//                         <div>{title}</div>
//                         <div>{slug}</div>
//                         <div>{description_full}</div>
//                         <img src={medium_cover_image} />
//                     </div>
//                 )
//             })}
//             <div>
//             <Comments/>
//             </div>

//             <h1>fdfdf</h1>

//         </div>

//     )

// }
// export default MovieCard


const MovieCard = () => {

    const dispatch = useDispatch()

    const movieInfo = useSelector(state => state.movie.id)
    const info = [movieInfo]
// debugger

    // useEffect(() => {
    //     dispatch(getCurrentMovie())
    // }, [])
    // debugger

    return (
        <div>
            {info.map(({ title, medium_cover_image,slug, description_full }, index) => {
                debugger
                return (
                    <div key={index}>
                        <div>{title}</div>
                        <div>{slug}</div>
                        <div>{description_full}</div>
                        <img src={medium_cover_image} />
                    </div>
                )
            })}
              <div>
             <Comments/>
             </div>
        </div>
    )
}

export default MovieCard