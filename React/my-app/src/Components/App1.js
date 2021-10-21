/* import React, { Component } from 'react';
class APP extends Component {
    state = {
        firstNAme: 'anu',
        lastName: 'sha',
        age: '23'
    }
    handleClick = () => {
        this.setState({
            age: '24'
        });
    }
    render() {
        return (
            <div>
                <h2> my name is {this.state.firstNAme} and age is {this.state.age}</h2>
                <button onClick={this.handleClick}> update age</button>
            </div>
        );
    }
}
export default APP;
 */

// 2nd pgrm



// 3rd prgm


/* import React, { Component } from 'react';
import Display from './Dispaly';
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
        My name is {this.state.firstName} and age is {this.state.age}
        <Display displayData={this.state} />
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}
export default App; */

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








// task array of object
i/* mport React from "react";

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
 */
//task
//create a array of object(id, name, designation, salary) in one component, display data in another component
//complete thursday assignment & monday's assignment




//create a array of objects and display data

/* import React, { Component } from 'react';
class APP extends Component {
  state = [{ name: 'anu', id: 1, salary: 20000 },
  { name: 'usha', id: 2, salary: 15000 }]
  render()
   {
    return (
      <div>
        {
          this.state.map(info => {
            return (
              <div>
                <h2> my name is {info.name} and salary is  {info.salary} </h2>
              </div>
            );
          }
          )};
          </div>
    );
  }
}
export default APP;
 */


//create object (name,age,salary,id,designation)in one component and then
//display data in another component, on click of a button name is updated

/* import React, { Component } from 'react';
import Display from './Display';
class App extends Component {
  state = {
    firstName: 'alex',
    age: 24,
    salary: 15000,
    id: 1,
    designation: "devloper"
  }
  handleClick = () => {
    this.setState({
      firstName: 'anu'
    });
  }
  render() {
    return (
      <div>
        <br></br>
        <Display displayData={this.state} />
        <br></br>
        <button onClick={this.handleClick}>Update name</button>
      </div>
    )
  }
}
export default App;
 */



//array of object(employee data) in state in one component and
// display data in another component

/* import React, { Component } from 'react';
import Display from './Display';
class App extends Component {
  state = [{ firstName: 'A', age: 24, salary: 15000, id: 1, designation: "devloper" },
  { firstName: 'B', age: 23, salary: 10000, id: 2, designation: "Tester" },
  { firstName: 'C', age: 22, salary: 20000, id: 3, designation: "Analyst" },
  { firstName: 'D', age: 21, salary: 25000, id: 4, designation: "SE" }]
render() {
   return (
    <div>
      <Display displayData={this.state} />
    </div>
  );
}
}
export default App;
 */






/* import React, { useState } from "react";
import ProposOne from "./ProposOne";

const Mini = () => {
    const [employeeData, setemployeeData] = useState([
        { empId:1, Name: 'A', age: 21, city:"Hyd", designation:"dev"},
        { empid: 2, Name: 'B', age: 22, city:"Pune", designation:"Test" },
        { empid: 3, Name: 'C', age: 23, city:"Bnglr", designation:"Sr"}
    ]);
    
console.log(employeeData);

    return (
        <div>
        
            <p> {employeeData.map(val => {
                return (
                    <div>
                        <p onMouseOver={employeeData}> {val.empid}  </p>

                        <button onClick={() => setemployeeData({(employeeData.map(val => {
                return empId.id ? {  } : arrObj;
            })
            )}>Update age</button>
                ...employeeData })}>Update </button>

                        {this.employeeData}

                    </div>
                )
            })} </p>

            <p>{employeeData.empId} {employeeData.Name} and age is {employeeData.age}</p>

            <p> Random num:  {Math.floor(Math.random() * 10)}  </p>

<ProposOne />
        </div>
    )
}
export default Mini;
 */