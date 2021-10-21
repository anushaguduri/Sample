// 16 sep 
import React, {Component} from 'react';
import ProposDisplay from './ProposDisplay';

class Propos extends Component {
  state = {
    firstName: 'alina',
    age: 20,
    arr: [1, 3, 89, 90],
    strOrNum: 24
  }

  render() {
    return(
      <div>
      <ProposDisplay age={this.state.age} firstName={this.state.firstName} strOrNum={this.state.strOrNum}/>
      </div>
    )
  }
}
export default Propos;

// task
// add prop-types validation for a object, array of objects

