import React, { Component } from 'react';
import './App.css';
import WatchInput from './WatchInput';
// import TweenMax  from 'gsap'


class App extends Component {

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <WatchInput />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://wikipedia.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </header>
      </div>
    );
  }
}
export default App;
