import React, { Component } from 'react';
import ProposDisplayOne from './ProposDisplayOne';

class ProposOne extends Component {
    state = {
        obj: { firstName: 'A', age: 20, },
        data: [{ salary: 20000, designation: 'deve', id: 1 },
        { salary: 30000, designation: 'tester', id: 2 },
        { salary: 60000, designation: 'dev', id: 3 }],
    }
    render() {
        return (
            <div>
                <h5> add prop-types validation for a object, array of objects </h5>
                <ProposDisplayOne data={this.state.data} obj={this.state.obj} />
                <button onClick=  {Math.floor(Math.random() * 10)}> </button> 

            </div>
        )
    }
}
export default ProposOne;





