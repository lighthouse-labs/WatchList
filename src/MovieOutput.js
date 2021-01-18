import React, {Component} from 'react';
import './MovieOutput.css';


class MovieOutput extends Component {
    render(){
        

        addMovie = (newMovie) => {
            console.log(this.props.movies);
            // let movie = this.props.movies;
        }

        return(
            <div id="movie-output-container">
                <h1>{this.props.movies}</h1>
            </div>
        );
    }
}

export default MovieOutput;