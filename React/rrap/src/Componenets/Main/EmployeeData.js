import React, { Component } from "react";
import {connect} from 'react-redux';

class EmployeeData extends Component {
    render() {
        return (
            <div>
                {this.props.employeeData.map(emp => {
                    return (
                        <div>
                            {emp.firstName}
                            {emp.age}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employeeData: state.employeeData
    }
}

export default connect(mapStateToProps, null)(EmployeeData);