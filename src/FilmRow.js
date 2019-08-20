import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {
    handleDetailsClick(film) {
        console.log("Fetching details for " + film);

    }
    render() {
        const year = new Date(this.props.film.release_date)
        return (
            <div onClick={this.handleDetailsClick} className="film-row">
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year.getFullYear()}</p>
                    <Fave isFave={} onFaveToggle={} />
                </div>
            </div>
        )
    }
}
