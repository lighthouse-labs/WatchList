import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid"; 
import './WatchInput.css';
import TweenMax  from 'gsap'
import MovieOutput from './MovieOutput.js';

class WatchInput extends Component {

    constructor(){
        super();
        this.state = {
            newMedia: {}
        }
    }

    static defaultProps = {
        categories: ['Tv Show', 'Movie']
    }

    deleteMedia(id){
        this.props.onDelete(id);
    }

    render(){

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })

        let mediaItems;
        if(this.props.media){
            mediaItems = this.props.media.map(media =>{
                return(
                    <MovieOutput  onDelete={this.deleteMedia.bind(this)} key={media.title} media={media} />
                );
            });
        }


        const handlePress = (event) => {
            if(event.key === 'Enter'){
            // let newMovie = event.target.value;
            // console.log(newMovie)
            // this.props.addMovie(newMovie);

              event.target.value = "";
              event.target.placeholder = "What would you like to watch ?";
            }
        }

        const addMedia = (event) =>{
            if(this.refs.title.value === '' || this.refs.date.value === ''){
                alert('title  and date is required')
            } else {
                this.setState({newMedia: {
                    id: uuidv4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value,
                    release: this.refs.date.value
                }}, function (){
                    // console.log(this.state);
                    this.props.addMedia(this.state.newMedia)
                });
                // console.log(this.refs.title.value)
            }
            event.preventDefault();
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
                <input ref="title" type="text" id="watch-input" placeholder="What would you like to watch ?" autoComplete="off" onKeyPress={handlePress} onClick={onClick} />
                <input ref="date" type="text" id="watch-date-input" placeholder="Please enter a date" autoComplete="off" />
                <select  ref="category" id="media-category">
                    {categoryOptions}
                </select>
                <button type="submit" id="watch-search" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={addMedia}>Add</button>
                <div id="movie-output-container">
                    {mediaItems}
                </div>
            </div>
        );
    }
}


export default WatchInput;