import React, { Component } from 'react';
// import Form from './Components/Form';

// import Hooks from './Components/Hooks';
// import HookOne from './Components/HookOne';
// import HookTwo from './Components/HookTwo';
// import HookFour from './Components/HookFour';
// import HookFive from './Components/HookFive';
// import HookSix from './Components/HookSix';

// import Form from './Components/Form';
import FormOne from './Components/FormOne';

// import Propos from './Components/Propos';
// import ProposOne from './Components/ProposOne';

// import Mini from './Components/Mini';



class App extends Component {
    state = {
        firstNAme: 'anusha',
        lastName: 'anu',
        age: '24'
    }
    render() {
        return (
            <div>
                {/* <h2> my name is {this.state.firstNAme} and age is {this.state.age}</h2> */}
                {/* <Hooks /> */}
                {/* <HookOne /> */}
                {/* <HookTwo /> */}
                {/* <HookFour /> */}
                {/* <HookFive /> */}
                {/* <HookSix /> */}

                {/* <Form /> */}
                 <FormOne />

                {/* <Propos /> */}
                {/* <ProposOne /> */}

                {/* <Mini /> */}
            </div>
        );
    }
}
export default App;


