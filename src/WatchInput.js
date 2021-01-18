import React, {Component} from 'react';
import './WatchInput.css';
import TweenMax  from 'gsap'


class WatchInput extends Component {
    render(){

        const onMouseOver = (event) =>{
            TweenMax.to('#watch-search', 1, { backgroundColor: '#282c34', color: '#8fd1eb', borderColor: '#8fd1eb'})
        }

        return(
            <div id="watch-input-container">
                <input id="watch-input" placeholder="What would you like to watch ?"></input>
                <button id="watch-search" onMouseOver={onMouseOver}>Search</button>
            </div>
        );
    }
}

export default WatchInput;