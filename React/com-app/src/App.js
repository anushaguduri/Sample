import React, { Component } from 'react';
import Para from './Router parameters/main/para';
import ParaOne from './Router parameters/one/ParaOne';
// import List from './components/List';

// import Router from './Router/main/Router';
// import RouterOne from './Router/one/RouterOne';

import Content from './State Context/main/Content';

import Mini from './Mini/one/Mini';
import ContentOne from './State Context/one/ContentOne';

class App extends Component {
  state = {
    userData: []
  }
  render() {
    return (
      <React.Fragment>
        {/* <List/> */}

        {/* <Router/> */}
        {/* <RouterOne /> */}

        {/* <Para/> */}
        {/* <ParaOne /> */}

        {/* <Content /> */}
        <ContentOne />

        {/* <Mini /> */}
      </React.Fragment>
    )
  }
}
export default App;


//task
//add random color to the cards using hoc;
//complete prev task API, add styling
//practice list, key, fragment code