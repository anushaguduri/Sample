
import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';

class SignUp extends Component {
  state = {
    DisData: []
  }
  addInfo = (props) => {
    console.log(props);
    let DisData = [...this.state.DisData, props];
    this.setState({
      DisData
    })
  }
  render() {
    return (
      <div>
        <Form addInfo={this.addInfo} />

        <Display data={this.state.DisData} />
      </div>
    );
  }
}
export default SignUp;
