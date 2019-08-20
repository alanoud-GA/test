import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  handleFaveToggle(fav) {
    // const faves = this.state.faves
    // faves.push(fav)
    // this.setState({ faves })
  }
  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing faves={this.state.faves} films={this.state.films} />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
