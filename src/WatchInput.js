import React, {Component} from 'react';
import './WatchInput.css';
import TweenMax  from 'gsap'
import MovieOutput from './MovieOutput.js';

class WatchInput extends Component {

    static defaultProps = {
        categories: ['Tv Show', 'Movie']
    }

    render(){

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value="category">{category}</option>
        })

        let mediaItems;
        if(this.props.media){
            mediaItems = this.props.media.map(media =>{
                return(
                    <MovieOutput  key={media.title} media={media} />
                );
            });
        }


        const handlePress = (event) => {
            if(event.key === 'Enter'){
            let newMovie = event.target.value;
            console.log(newMovie)
            // this.props.addMovie(newMovie);

              event.target.value = "";
              event.target.placeholder = "What would you like to watch ?";
            }
        }

        const onClick = (event) => {
            event.target.placeholder = "";
        }

        const onMouseOver = (event) =>{
            TweenMax.to('#watch-search', 1, { backgroundColor: '#282c34', color: '#8fd1eb', borderColor: '#8fd1eb'})
        }

        const onMouseLeave = (event) =>{
            TweenMax.to('#watch-search', 1, { backgroundColor: '#8fd1eb', color: '#282c34', borderColor: 'transparent'})
        }

        return(
            <div id="watch-input-container">
                <input type="text" id="watch-input" placeholder="What would you like to watch ?" autocomplete="off" onKeyPress={handlePress} onClick={onClick} />
                <select ref="category" id="media-category">
                    {categoryOptions}
                </select>
                <button id="watch-search" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Search</button>
            
                <div id="movie-output-container">
                    {mediaItems}
                </div>
            </div>
        );
    }
}

export default WatchInput;