import React from 'react'

const FilmPoster = (props) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt="" />
    )
}

export default FilmPoster
