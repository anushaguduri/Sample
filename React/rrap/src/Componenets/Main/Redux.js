import React, { Component } from "react";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import EmployeeData from "./EmployeeData";

class Redux extends Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterTwo />
        <EmployeeData />
      </div>
    )
  }
}

export default Redux;

//task
//add operation decrement counter value: when user click on decremnet button counter value should be decreased by 2