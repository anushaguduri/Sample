import React, { Component } from 'react';

class FormInfo extends Component {
    state = {
        firstname: '',
        age: '',
        designation: '',
        error: {
            firstnameError: '',
            ageError: ''
        },
        formValid: false,
        errorSubmit: ''
    }
    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'firstname') {
            this.validateName(e.target.value);
        }
        if (e.target.id === 'age') {
            this.validateAge(e.target.value);
        }
    }
    validateName = (val) => {
        console.log(val);
        let firstnameError = this.state.error.firstnameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        // let pattern = xyz;//regex
        if (val.trim() === '') {
            firstnameError = 'Please Enter Name';
            formValid = false;
        }
        // else if (pattern.test(val)) {

        // }
        else {
            firstnameError = '';
            formValid = true;
        }

        this.setState({
            firstname: val,
            error: { ...error, firstnameError },
            formValid
        });
        return formValid;
    }

    validateAge = (val) => {
        console.log(val);
        let ageError = this.state.error.ageError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === '') {
            ageError = 'Please Enter Age';
            formValid = false;
        }
        else {
            ageError = '';
            formValid = true
        }

        this.setState({
            age: val,
            error: { ...error, ageError },
            formValid
        });
        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.addInfo(this.state);
        if (this.state.formValid === true && this.validateAge(this.state.age) && this.validateName(this.state.firstname)) {
            this.props.addInfo(this.state);
            this.setState({
                firstname: '',
                age: '',
                designation: '',
                errorSubmit: ''
            })
        }
        else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = 'Enter credentials';
            this.setState({
                errorSubmit
            })
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" onChange={this.handleChange} value={this.state.firstname} id="firstname" placeholder="Enter first name" />
                    <p>{this.state.error.firstnameError}</p>
                    <label>Age</label>
                    <input type="text" onChange={this.handleChange} value={this.state.age} id="age" placeholder="Enter Age" />
                    <p>{this.state.error.ageError}</p>
                    <label>Designation</label>
                    <input type="text" onChange={this.handleChange} value={this.state.designation} id="designation" placeholder="Enter Designation" />
                    <p>{this.state.errorSubmit}</p>
                    <button value="submit">Sign Up</button>
                </form>

            </div>
        )
    }
}
export default FormInfo;