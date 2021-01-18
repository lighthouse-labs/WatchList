import React, {Component} from 'react';
import './WatchInput.css';

class WatchInput extends Component {
    render(){

        return(
            <div id="watch-input-container">
                <input id="watch-input" placeholder="What would you like to watch ?"></input>
                <button id="watch-search">Search</button>
            </div>
        );
    }
}

export default WatchInput;