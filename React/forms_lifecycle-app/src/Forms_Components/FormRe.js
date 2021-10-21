import React, { Component } from 'react';
import FormReInfo from './FormReInfo';
import FormReDisplay from './FormReDisplay';
import FormRehoc from './FormRehoc';

class FormRe extends Component {
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
                <FormReInfo addInfo={this.addInfo}/>
               
               <br/>
                <FormReDisplay data={this.state.personData} />
            </div>
        )
    }
}
// export default FormRe;
export default FormRehoc(FormRe);

