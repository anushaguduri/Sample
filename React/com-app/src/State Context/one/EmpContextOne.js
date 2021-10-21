import React, { Component, createContext } from "react";

export const EmpContextOne = createContext();
export class EmpProviderOne extends Component {
    state = {
        EmpData: [{
            name: 'A',
            id: 1,
            designation: 'test',
            salary: 2000
        }, {
            name: 'B',
            id: 2,
            designation: 'dev',
            salary: 2500
        }, {
            name: 'C',
            id: 3,
            designation: 'Sr',
            salary: 1000
        }, {
            name: 'D',
            id: 4,
            designation: 'Analyst',
            salary: 2100
        }, {
            name: 'E',
            id: 5,
            designation: 'Designer',
            salary: 1500
        }]
    }

    render() {
        return (
            <div>
                <EmpContextOne.Provider value={this.state.EmpData}>
                    {this.props.children}
                </EmpContextOne.Provider>

            </div>
        )
    }
}
