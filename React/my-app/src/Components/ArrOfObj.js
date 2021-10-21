import React, { Component } from 'react';
import Display from './Display';
import AppTwo from './AppTwo';

class App extends Component {
  state = {
    firstName: 'alex',
    age: 20,
    place: 'pune'
  }

  handleClick = () => {
    this.setState({
      age: 22
    });
  }

  render() {
    return (
      <div>
       {/* My name is {this.state.firstName} and age is {this.state.age}*/}
        <Display displayData={this.state}/>
        <button onClick={this.handleClick}>Update</button>
        <AppTwo />
      </div>
    )
  }
}

export default App;

// <button onclick="add()"></button>

// task
//array of object(employee data) in state in one component and display data in another component
// create a object (name, age, salary, id, designation)in one component and then display data in another component, on click of a button name is updated
//create a array of objects and display data

// state = [{
// name: '', id:  , salary: ''
// },{
//   name: '', id: , salary
// }]

// return(
//   {this.state.map(info => {
//     return (
//       {info.name}
//       {info.salary}
//     )
//   })}
// )

// class App extends Component {

// }


import React from "react";

const AppTwoDisplay = (props) => {
    // props = {
    //     employeeData : [{},{},{}]
    // }
    // info = {
    // firstName
    // age 
    // }
    // info.firstName

    const { employeeData } = props;//const employeeData = props.employeeData
    return (
        <div>
            {employeeData.map(info => {
                return (
                    <div>
                        <p>{info.firstName}</p>
                        <p>{info.age}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AppTwoDisplay;


import React, { Component } from 'react';
import AppTwoDisplay from './AppTwoDisplay';

class AppTwo extends Component {
    state = {
        firstName: 'alex',
        age: 20,
        arr: [10, 90, 89],
        employeeData: [{
            firstName: 'alex',
            age: 20
        }, {
            firstName: 'alina',
            age: 22
        }, {
            firstName: 'yuvika',
            age: 23
        }]
    }

    render() {
        return (
            <div>
            <AppTwoDisplay employeeData={this.state.employeeData}/>
            {this.state.arr.map(item => {
                return(
                    <div>
                    {item}
                    </div>
                )
            })}
            </div>
        )
    }
}

export default AppTwo;

//task
//create a array of object(id, name, designation, salary) in one component, display data in another component
//complete thursday assignment & monday's assignment


import React from "react";
// use function to create function component

const Display = (props) => {
    console.log(props.displayData);

    //destructuring of object
    const { displayData } = props; //const displayData = props.displayData
    console.log(displayData);

    return (
        // jsx
        <div>
            My name is {displayData.firstName} and age is {displayData.age}
            <p>hello world</p>
        </div>
    )
}

export default Display;

// function Display(props) {
//     return React.createElement(
//         'alex',
//         22
//     )
// }











//create a array of object(id, name, designation, salary) in one component, display data in another component





// add prop-types validation for a object




//create 2 class components and send data(array of object) from to another and display it.




//update particular record in array of object in function based component




// mini assignment /task
// Create an application which will display employee data:
// -Employee Data will have following data set values: empId, Name, age, city, designation.
// -If someone mouseover on empId, console emp Name, age.
// -Include a button that will generate a random