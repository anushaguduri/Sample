import React, { Component } from 'react';
import Movie from './Movie';
import Details from './Details';
import { MovieProvider } from './MovieContext';

class Content extends Component {

  render() {
    return (
      <MovieProvider>
        <Movie />
        <Details />
      </MovieProvider>
    )
  }
}

export default Content;

// task1
// Create an application using ReactJs. Application will have 3 pages.

// Page 1: Home Page
// Will fetch data from a third-party API and display it on the home page.

// Page 2: Contact Us Page
// Add 3 Cards for Location, Contact Number, Email Id.

// Page 3: Sign Up
// Create a form and add fields according to your will. Add Form Validation
// After signup the form, give notification account is successfully created. 

// Style you Web Application using any framework.

// task2
// -Fetch data from any third-party API and display data in the form of Card.
// -Add Delete button on each card, when you click on delete button card will be deleted.
// -Add a table that will display employee name, age, designation.
// -Add styling to your web-application (you can choose how you want to style it).


//task3 react-context
//create employeedata: array of object
//display all employeedata
//display count of employee whose salary is greater than 20k