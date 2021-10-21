import React, { Component } from 'react';
class Event extends Component {
  state = {
    firstNAme: 'anu',
    city: 'hyd'

  }
  handleClick = () => {
    this.setState({
      firstNAme: "anusha",
      city: 'ongole'
    });
  }
  render() {
    return (
      <div>
        <h2> my name is {this.state.firstNAme} and city is {this.state.city}</h2>
        <button onMouseOver={this.handleClick}> update </button>

        <h2> my name is {this.state.firstNAme} and city is {this.state.city}</h2>
        <button onClick={this.handleClick}> update </button>
        <p> {Math.floor(Math.random() * 10)}</p>
      </div>
    );
  }
}
export default Event;
