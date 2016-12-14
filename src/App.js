import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBlogs.js';

const API_KEY = 'PBqHiwj1I0gtTrSEvL6BYjX8YbSMzFtAraiHoY7attGmdBR6AR';

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
