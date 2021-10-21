import React, { Component } from "react";

class AddInfo extends Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        dateOfBirth: "",
        emailId: "",
        password: ""
    }
    handleChange = (e) => {
        console.log(e.target.id);
        this.setState ({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addInfo(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            dateOfBirth: "",
            emailId: "",
            password: ""
         })
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>First Name :</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.firstName} id ="firstName" placeholder = "Enter First Name"/>
                    <label> Last Name :</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.lastName} id = "lastName" placeholder = "Enter Last Name"/>
                    <label> Age :</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.age} id = "age" placeholder = "Enter Age" />
                    <label> Date Of Birth : </label>
                    <input type="date" onChange={this.handleChange} value = {this.state.dateOfBirth} id = "dateOfBirth" placeholder = "Enter Date Of Birth"/>
                    <label>Email ID : </label>
                    <input type="email" onChange={this.handleChange} value = {this.state.emailId} id = "emailId" placeholder = "Enter Email ID"/>
                    <label> Password :</label>
                    <input type="password" onChange={this.handleChange} value = {this.state.password} id = "password" placeholder = "Enter Password" />
                    <button value="submit"> SIGN UP</button>
                </form>

            </div>
        )
    }
}
export default AddInfo;