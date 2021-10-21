// task
// Create a form that will take following input from the user:
// -Name
// -Contact Number
// -Date of birth
// -Email Id
// -Tell me about yourself
// Display user input in a card just below the form.

// Add following validation: 
// -All fields are mandatory
// -Name: should contain alphabets only
// -Contact: length should be 10, should only include digits
// -Email: Add Email validation
// Apart from above mentioned validation, you can include other validations as well.
// props validation 
// hook (if needed)


import React, { Component } from "react";
import MFormInfo from "./MFormInfo";
import MFormDisplay from "./MFormDisplay";

class MForm extends Component {
    state = {
        content: []
    }
    addInfo = (props) => {
        console.log(this.props);
        let content = [...this.state.content, props];
        this.setState({
            content
        })
    }
    render() {
        return (
            <div>
                <p>   <MFormInfo addInfo={this.addInfo} /> </p>
                <p>  <MFormDisplay info={this.state.content} /> </p>
            </div>
        )
    }
}
export default MForm;
