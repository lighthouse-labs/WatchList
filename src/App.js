import React, { Component } from 'react';
// import {v4 as uuidv4} from "uuid"; 
import cheerio from 'cheerio';
import './App.css';
import WatchInput from './WatchInput';
import { _checkPlugin } from 'gsap/gsap-core';

class App extends Component {

  constructor(){
    super();
    this.state = {
      media: [],
      data: [],
      newReleases: []
    }
  }

  getMedia =() => {
    fetch('https://www2.bflix.to/')
    .then(response => response.text())
    .then(data => {
      const $ = cheerio.load(data);
      const mediaTitle = $ ('.poster').attr('title');
      const mediaRelease =$ )_checkPlugin;
      const posterSource = $('.poster img').attr('src');
      console.log(mediaTitle);
      console.log(posterSource);
      this.setState({newReleases: $(".posterSource").html() });
    })
    .catch(error => {
      this.setState({error: error});
    });
  };

  componentDidMount(){
    this.setState({media: [
        // {
        //   id: uuidv4(),
        //   title: "Jupiter's Legacy",
        //   category: "TV Show",
        //   release: "March 00 2021"
        // },
        // {
        //   id: uuidv4(),
        //   title: "The King's Man",
        //   category: "Movie",
        //   release: "March 12 2021"
        // }
    ]});
    this.getMedia();
  }

  handleAddMedia(newMedia){
    console.table(newMedia)
    let media = this.state.media;
    media.push(newMedia);
    this.setState({media:media})
  }

  handleDeleteMedia(id){
    let media = this.state.media;
    let index = media.findIndex(x => x.id === id);
    media.splice(index, 1)
    this.setState({media:media})
  }

   render() {

    return (
      <div className="App">
        <header className="App-header">
          <WatchInput media={this.state.media} addMedia={this.handleAddMedia.bind(this)} onDelete={this.handleDeleteMedia.bind(this)}/>
        </header>
      </div>
    );
  }
}
export default App;
