import React, { Component } from 'react';
import FormInfoOne from './FormInfoOne';
import FormDisplayOne from './FormDisplayOne';

class FormOne extends Component {
    state = {
        FormData: []
    }
    addInfo = (props) => {
        console.log(props);
        let FormData = [...this.state.FormData, props];
        this.setState({
            FormData
        })
    }
    render() {
        return (
            <div>
                <FormInfoOne addInfo={this.addInfo} />
                <FormDisplayOne data={this.state.FormData} />

            </div>
        )
    }
}
export default FormOne;