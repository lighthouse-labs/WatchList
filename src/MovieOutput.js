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
                    <strong>{this.props.media.title}</strong>:  {this.props.media.release} {this.props.media.category}  
                </li>
            // </div>
        );
    }
}

export default MovieOutput;