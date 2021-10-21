import React, { Component } from 'react';

class Life extends Component {
  // Initialization 
  constructor() {
    super();
    this.state = {
      name: 'alex'
    }
  }

  // Mounting
  // componentWillMount = () => {
  //   console.log('Component Will Mount');
  // }

  componentDidMount = () => {
    // for API calls
    console.log('Component Did Mount');
  }

  handleClick = () => {
    this.setState({
      name: 'alina'
    })
  }
  
  // Updation
  shouldComponentUpdate = (newProps, newState) => {
    console.log(newProps);
    console.log(newState);
    return true;
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log(nextProps);
    console.log(nextState);
    console.log('Component Will Update');
  }

  componentDidUpdate = () => {
    console.log('Component Did Update');
  }

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default Life;

// task
// try existing code, make changes and see output