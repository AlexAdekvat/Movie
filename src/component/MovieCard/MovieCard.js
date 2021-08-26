import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Preloader from '../Main/Preloader'
import { getCurrentMovie } from '../Reducers/api'
import { setIsFetching } from '../Reducers/MovieReducer'
import Comments from './CommentsOnTheFilm'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../assets/logo.png'
import styles from "./MovieCard.module.scss"



library.add(faStar, faHeart);

const MovieCard = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const movieInfo = useSelector(state => state.movie.id)
    const isFetching = useSelector(state => state.movie.isFetching)
    const info = [movieInfo]

    useEffect(() => {
        dispatch(getCurrentMovie(id))
        dispatch(setIsFetching(true))
    }, [])

    return (
        <>
            {isFetching ? <Preloader /> :
                (info.map(({ title, medium_cover_image, genres, year, like_count, description_full, rating }, index) => {
                    return (
                        <div key={index} className={styles.movieInfo}>
                            <div className={styles.header}>
                                <div><img src={logo} className={styles.logo} /></div>

                                <div className={styles.nameProject}>WebMovie</div>
                            </div >
                            <div className={styles.container}>

                                <div className={styles.poster}>
                                    <div className={styles.rating}>
                                        <FontAwesomeIcon icon={faStar} className={styles.font} /> {rating}
                                    </div>
                                    <img src={medium_cover_image} alt="poster" />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.title}>{title}</div>
                                    <div className={styles.year}>{year}</div>
                                    <div className={styles.genre}>
                                        {genres?.map((genres, index) =>
                                            <div key={index} className={styles.genres}>
                                                <div className={styles.genreCicrle}></div>
                                                {genres}
                                            </div>)}
                                    </div>
                                    <div className={styles.description}>
                                        <h1 className={styles.descr}>Description</h1>
                                        <div className={styles.descriptionFull}> {description_full} </div>
                                    </div>
                                    <div >
                                        <h1>Comments</h1>
                                        <Comments />
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }))
            }
        </>
    )
}

export default MovieCard
