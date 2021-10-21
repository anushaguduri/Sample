import React, { Component } from 'react';
import FormValInfo from './FormValInfo';
import FormValDisplay from './FormValDisplay';

class FormVal extends Component {
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
                <FormValInfo addInfo={this.addInfo} />
                <FormValDisplay data={this.state.DisData} />

            </div>
        )
    }
}

export default FormVal;