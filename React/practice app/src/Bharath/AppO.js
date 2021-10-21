import React, { Component } from "react";
import AddInfo from "./AddInfo";
import Display from "./Display";

class AppO extends Component {
    state = {
        personData: []
    }
    addInfo = (props) => {
console.log(props);

let personData = [...this.state.personData, props]
this.setState({
    personData
})
    }
    render() {
        return (
            <div>
                <h1>REGISTRATION FORM</h1>
                <AddInfo addInfo = {this.addInfo}/>
                <Display data = {this.state.personData}/>
            </div>
        )
    }
}
export default AppO;