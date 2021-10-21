import React, { Component } from 'react';
import Navbar from './navbar';
import Api from './Api';
import Post from './post';
import Home from './Home';

import { BrowserRouter, Route } from 'react-router-dom';
class ParaOne extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/api/:post_id" component={Post} />
      </BrowserRouter>
    )
  }
}
export default ParaOne;

//task
//get another api which routing params
//display data in the form of cards and click on button nad display particular record
//add styling 