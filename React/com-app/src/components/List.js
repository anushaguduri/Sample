import React, { Component } from 'react';
import Ref from './Ref';
import Table from './Table';
import hoc from './hoc';

class List extends Component {
  state = {
    userData: [
      {
        userName: 'alex',
        age: 22,
        id: 1
      },
      {
        userName: 'alina',
        age: 24,
        id: 2
      },
      {
        userName: 'jen',
        age: 26,
        id: 3
      }
    ]
  }

  handleClick = (id) => {
    let userData = this.state.userData;
    // const result = userData.filter(() => {
    // });
  }

  render() {
    //userDataList is a list
    const userDataList = this.state.userData.map(info => {
      return (
        <React.Fragment key={info.id}>
          <p>{info.userName}</p>
          <p>{info.age}</p>
          <button onClick={this.handleClick()}>Delete</button>
        </React.Fragment>
      )
    });
    return (
      <React.Fragment>
          {userDataList}
          <br />
          <Ref />
          <br/>
          <Table />
      </React.Fragment>
    )
  }
}

export default hoc(List);

//task
//add random color to the cards using hoc;
//complete prev task API, add styling
//practice list, key, fragment code