import React, { Component } from 'react';

class EmpData extends Component {
    state = {
        obj: [{ empid: 1, Name: 'A', age: 21, city: "Hyd", designation: "dev" },
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
                            <p> Emp Id :  {info.empid} </p>
                           <p> Emp Name:  {info.Name}, </p>
                           <p> Emp Age:  {info.age}, </p>
                           <p> Emp city:  {info.city}, </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default EmpData;