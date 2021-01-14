import React, { Component } from 'react';
import GifCard from './Components/GifCard';
import './App.css';


class App extends Component {
  render(){
    return (
      <div>
      <div> <h1  className = "title">GIPHY SEARCH</h1></div>
      <div className="container">
        <div>
        <GifCard/>
        </div>
      </div>
      
      </div>
    );
  }
}


export default App;