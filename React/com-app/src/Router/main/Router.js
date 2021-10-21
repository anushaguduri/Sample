import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/contactus" component={Contact}/>
      </BrowserRouter>
    )
  }
}
export default Router;

//task
// Implement react-routing, add home, employee, userData, About us 
// use third party api and display data
// create employee data in state and display data

// use API
// http://jsonplaceholder.typicode.com/users/
// https://jsonplaceholder.typicode.com/posts/

// spotify
// https://api.spotify.com/v1/albums
