import React, { Component } from 'react';
import Navbar from './navbar';
import Emp from './Emp';
import Post from './post';
import Home from './Home';

// import Navbar from './Components/Navbar';
// import EmployeeData from './Components/EmployeeData';
import { BrowserRouter, Route } from 'react-router-dom';
// import Post from './Components/Post';

class Para extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/employeedata" component={Emp} />
        <Route exact path="/employeedata/:post_id" component={Post} />
      </BrowserRouter>
    )
  }
}
export default Para;

//task
//get another api which routing params
//display data in the form of cards and click on button nad display particular record
//add styling 