import React, { Component } from 'react';
import DisplayEmpListOne from './DisplayEmpListOne';
import { EmpContextOne } from './EmpContextOne';

class EmpOne extends Component {
    static contextType = EmpContextOne;
    render() {
        return (
            <React.Fragment>
                <DisplayEmpListOne EmpData={this.context} />
            </React.Fragment>
        )
    }
}
export default EmpOne;