import React from 'react'

const Header = (props)=> {
    const data = props.data


    return(

        <div>
            <img src= {data.medium_cover_image}></img>
 

            <div>{data.title}</div>
            <div>{data.genres}</div>
            <div>{data.year}</div>
            
        </div>
    )
}
export default Header