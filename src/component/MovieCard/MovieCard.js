import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCurrentMovie } from '../Reducers/api'
import { setCurrentMovie } from '../Reducers/MovieReducer'


const MovieCard = () => {
    const { id } = useParams();
    const [dataMuvie, setDataMuvie] = useState([]);
    const [text, setText] = useState();
    const data = [dataMuvie]
    //const movieInfo = useSelector(state => state.movie.info)
    //const dispath = useDispatch()
    useEffect(() => {
        getCurrentMovie(id, setDataMuvie);
        //dispath(getCurrentMovie())
    }, [])
   const handleChange = (event) => {
        setText({value:event.target.value})
    }
    return (
        <div>
            {/* <div>{data.title}</div> */}
            {data.map(({ title, slug, description_full, medium_cover_image }) => {
                return (
                    <div>
                        <div>{title}</div>
                        <div>{slug}</div>
                        <div>{description_full}</div>
                        <img src={medium_cover_image} />
                    </div>
                )
            })}


            <h1>fdfdf</h1>

        </div>

    )

}
export default MovieCard


//  const MovieCard = () => {

//      const dispatch = useDispatch()

//      const movieId = useSelector(state => state.movieId.id)

//      useEffect(() => {
//         dispatch(getCurrentMovie())
//     }, [])
// debugger

//      return (
//          <div>
//              fffa
//              {/* {data.title} */}
//          </div>
//     )
//  }

//  export default MovieCard