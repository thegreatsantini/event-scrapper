import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import MyNav from './components/MyNav'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Get off the couch</h1>
        <br />
        <MyNav />
        <Main />
      </div>
    );
  }
}

export default App;
