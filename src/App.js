import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBlogs';

class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
      </div>
    );
  }
}

export default App;
