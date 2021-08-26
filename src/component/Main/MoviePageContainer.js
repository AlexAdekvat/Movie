import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './MoviePage'
import { getMovie } from '../Reducers/api'
import { setCurrentPage, setIsFetching } from '../Reducers/MovieReducer'
import { createPages } from './paginator'
import Preloader from './Preloader'
import styles from "./MoviePage.module.scss"
import logo from './../assets/logo.png'
import classNames from 'classnames'


const MoviePageContainer = () => {

    const dispatch = useDispatch()

    const moviesAll = useSelector(state => state.movie.movies)
    const currentPage = useSelector(state => state.movie.currentPage)
    const movieCount = useSelector(state => state.movie.movieCount)
    const isFetching = useSelector(state => state.movie.isFetching)
    const page = useSelector(state => state.movie.page)
    const pagesCount = Math.ceil(movieCount / page)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect((pages) => {
        dispatch(getMovie(currentPage, pages))
        dispatch(setIsFetching(true))

    }, [currentPage])

    return (
        <div>
            {isFetching ? <Preloader /> :
                <div>
                    <div className={styles.header}>
                        <div><img src={logo} className={styles.logo}/></div>
                        <div className={styles.pages}>
                            {pages.map((page, index) => <span
                                key={index}
                                className={classNames({ [styles.selectedPage]: currentPage === page }, styles.pageNumber)}
                                onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
                        </div>
                        <div className={styles.nameProject}>WebMovie</div>
                    </div>
                    <div className={styles.movies}>
                        {moviesAll.map((data, key) =>
                            <Header key={key} data={data} />
                        )}
                    </div>
                </div>
            }
        </div>

    )
}
export default MoviePageContainer