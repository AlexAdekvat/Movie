import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import { getCurrentMovie, getMovie } from '../Reducers/api'
import { setCurrentPage } from '../Reducers/MovieReducer'
import { createPages } from './paginator'

const Main = () => {

    const dispatch = useDispatch()

    const moviesAll = useSelector(state => state.movie.movies)
    const currentPage = useSelector(state => state.movie.currentPage)
    const movieCount = useSelector(state => state.movie.movieCount)
    const page = useSelector(state => state.movie.page)
    const pagesCount = Math.ceil(movieCount / page)
    const pages = []
    createPages(pages, pagesCount, currentPage)


    //const movieInfo = useSelector(state => state.movie.info)

    // useEffect(()=>{
    //     dispatch(getCurrentMovie())
    // },[])



    useEffect(() => {
        dispatch(getMovie(currentPage, pages))
    }, [currentPage])

    return (
        <div>
            <div>
                {pages.map((page, index) => <span
                    key={index}
                    //className={currentPage==page? "current-page":"page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
            {moviesAll.map(data =>
                <Header data={data} />
            )}

                {/* {movieInfo.map(data=>
                <MovieCard data={data}/>)} */}

        </div>

    )
}
export default Main