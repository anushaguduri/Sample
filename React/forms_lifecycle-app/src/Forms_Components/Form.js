import React, { Component } from 'react';
import FormInfo from './FormInfo';
import FormDisplay from './FormDisplay';

class Form extends Component {
    state = {
        personData: []
    }

    addInfo = (props) => {
        console.log(props);
        let personData = [...this.state.personData, props];
        this.setState({
            personData
        })
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <FormInfo addInfo={this.addInfo} />
                <FormDisplay data={this.state.personData} />

            </div>
        )
    }
}

export default Form;