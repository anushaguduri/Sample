// mini assignment 
// Create an application which will display employee data:
// -Employee Data will have following data set values: empId, Name, age, city, designation.
// -If someone mouseover on empId, console emp Name, age.
// -Include a button that will generate a random integer number.
// -Add Props Validation.
// -Add Hook(if needed).



import React, { Component } from 'react';
class Mini extends Component {
    state = {
        obj: [{ empId: 1, Name: 'A', age: 21, city: "Hyd", designation: "dev" },
        { empid: 2, Name: 'B', age: 22, city: "Pune", designation: "Test" },
        { empid: 3, Name: 'C', age: 23, city: "Bnglr", designation: "Sr" }],
    };
    handleClick = (info => {
        console.log("employeeData", this.Name, this.age, this.city, this.designation)
    });
    render() {
        return (
            <div>
                {this.state.obj.map(info => {
                    return (
                        <div>
                            <p onMouseOver={this.handleClick}> {info.empId} </p>
                            {info.Name}  ,
                            {info.age} ,
                            {info.city}  ,
                        </div>
                    )
                })}
                <button onClick={this.handleClick}> update </button>
                <p> {Math.floor(Math.random() * 10)}</p>
            </div>
        );
    }
}
export default Mini;

