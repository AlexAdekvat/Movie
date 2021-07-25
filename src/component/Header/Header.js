import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCurrentMovie } from '../Reducers/api'

const Header = (props) => {
    const data = props.data
    const dispatch = useDispatch()

    return (

        <div>
            <div>
                 {/* <NavLink to={`/movie_card/${data.id}`}><img src={data.medium_cover_image}/></NavLink>  */}
            </div>


          <div onClick={() => dispatch(getCurrentMovie(data.id))}><NavLink to={`/movie_card/${data.id}`}>{data.title}</NavLink></div> 
             {/* <div ><NavLink to={`/movie_card/${data.id}`}>{data.title}</NavLink></div>  */}
            <div>{data.genres}</div>
            <div>{data.year}</div>

        </div>
    )
}
export default Header