import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './components/searchBlogs';

const API_KEY = 'PBqHiwj1I0gtTrSEvL6BYjX8YbSMzFtAraiHoY7attGmdBR6AR';

//TODO : setup server, configure it to accept CORS requests


const post = "/posts";
const user = "/peacecorps"
const suffix = ".tumblr.com"
const apiPrefix = "?api_key="
//const tag = "";
//const transformURI = () => {};

const uri = `/v2/blog${user}${suffix}${post}${apiPrefix}${API_KEY}`;

axios.get(uri)
  .then((res)=>console.log("RESPONSE: ", res))
  .catch((err)=>console.log("ERROR: ", err));


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
