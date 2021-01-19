import React, { Component } from 'react';
import './App.css';
import WatchInput from './WatchInput';
// import MovieOutput from './MovieOutput';


class App extends Component {

  constructor(){
    super();
    this.state = {
      media: [
        {
          title: "Jupiter's Legacy",
          category: "TV Show",
          release: "March 2021"
        },
        {
          title: "The King's Man",
          category: "Movie",
          release: "March 12 2021"
        }
      ]
    }
  }

   render() {

    // addMovie = (newMovie) => {
    //   console.log(this.props.movies);
    //   // let movie = this.props.movies;
    // }
    

    return (
      <div className="App">
        <header className="App-header">
          {/* <MovieOutput media={this.state.media}/> */}
          <WatchInput media={this.state.media}/>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://wikipedia.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </header>
      </div>
    );
  }
}
export default App;
