import React, { Component } from "react";
import Counter from "./CounterOne";

class ReduxOne extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

export default ReduxOne;

//task
//add operation decrement counter value: when user click on decremnet button counter value should be decreased by 2