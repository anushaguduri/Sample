import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import ContactUs from './ContactUs';
import SignUp from './SignUp'

import NavbarOne from './NavbarOne';


class Mini extends Component {
  render() {
    return (
      <BrowserRouter >
        <NavbarOne />
        <Route exact path="/" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/SignUp" component={SignUp} />
      </BrowserRouter>
    )
  }
}

export default Mini;




//  task1
// Create an application using ReactJs. Application will have 3 pages.

// Page 1: Home Page
// Will fetch data from a third-party API and display it on the home page.

// Page 2: Contact Us Page
// Add 3 Cards for Location, Contact Number, Email Id.

// Page 3: Sign Up
// Create a form and add fields according to your will. Add Form Validation
// After signup the form, give notification account is successfully created. 

// Style you Web Application using any framework.
