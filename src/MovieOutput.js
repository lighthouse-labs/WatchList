import React, {Component} from 'react';
import './MovieOutput.css';


class MovieOutput extends Component {
    render(){

        return(
            <div id="watch-input-container">
                <input id="watch-input" placeholder="What would you like to watch ?" onKeyPress={handlePress} onClick={onClick}></input>
                <button id="watch-search" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Search</button>
            </div>
        );
    }
}

export default MovieOutput;