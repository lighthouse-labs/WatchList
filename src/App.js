import React, { Component } from 'react';
import './App.css';
import WatchInput from './WatchInput';

class App extends Component {

  constructor(){
    super();
    this.state = {
      media: []
    }
  }

  componentDidMount(){
    this.setState({media: [
              {
          title: "Jupiter's Legacy",
          category: "TV Show",
          release: "March 00 2021"
        },
        {
          title: "The King's Man",
          category: "Movie",
          release: "March 12 2021"
        }
    ]});
  }

   render() {

    return (
      <div className="App">
        <header className="App-header">
          <WatchInput media={this.state.media}/>
        </header>
      </div>
    );
  }
}
export default App;
