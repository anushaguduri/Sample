import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hoc from './Hoc';
import NavbarOne from './NavbarOne';
import HomeOne from './HomeOne';
import AboutOne from './AboutOne';
import ApiData from './ApiData';
import EmpData from './EmpData';
import UserData from './UserData';


class RouterOne extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarOne />
        <Route exact path="/" component={HomeOne}/>
        <Route path="/EmpData" component={EmpData}/>
        <Route path="/UserData" component={UserData}/>
        <Route path="/ApiData" component={ApiData}/>
        <Route path="/aboutus" component={AboutOne}/>
      </BrowserRouter>
    )
  }
}

export default Hoc(RouterOne);

//task
// Implement react-routing, add home, employee, userData, About us 
// use third party api and display data
// create employee data in state and display data

// use API
// http://jsonplaceholder.typicode.com/users/
// https://jsonplaceholder.typicode.com/posts/

// spotify
// https://api.spotify.com/v1/albums
