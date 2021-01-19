import React, {Component} from 'react';
import './MovieOutput.css';


class MovieOutput extends Component {
    render(){
        
        // console.log(this.props.media[0].title)
        // addMovie = (newMovie) => {
        //     console.log(this.props.movies);
        //     // let movie = this.props.movies;
        // }

        return(
            // <div id="movie-output-container">
                <li className="media-info">
                    {this.props.media.title} - {this.props.media.category} - {this.props.media.release}
                </li>
            // </div>
        );
    }
}

export default MovieOutput;