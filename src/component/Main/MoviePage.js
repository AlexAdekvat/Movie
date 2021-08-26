import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCurrentMovie } from '../Reducers/api'
import styles from "./MoviePage.module.scss"



const MoviePage = (props) => {
    const data = props.data
    const dispatch = useDispatch()

    return (

        <div className={styles.movie} >

            <div className={styles.info} >

                <NavLink onClick={() => dispatch(getCurrentMovie(data.id))} to={`/movie_card/${data.id}`}><img src={data.medium_cover_image} alt="poster" /></NavLink>

            </div>
            <div ><NavLink onClick={() => dispatch(getCurrentMovie(data.id))} to={`/movie_card/${data.id}`} className={styles.movieName}>{data.title}</NavLink></div>


            <div>{data.year}</div>

        </div>
    )
}
export default MoviePage