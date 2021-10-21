import React, { Component } from "react";
import MFormProps from "./MFormProps";



class MFormInfo extends Component {
    state = {
        firstName: '',
        lastName: '',
        contactNum: '',
        DOBirth: '',
        email: '',
        password: '',
        error: {
            firstNameError: '',
            lastNameError: '',
            contactNumError: '',
            DOBirthError: '',
            emailError: '',
            passwordError: ''
        },
        formValid: false,
        errorSubmit: ''
    }
    handleUpdate = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'firstName') {
            this.validatefirstName(e.target.value);
        }
        if (e.target.id === 'lastName') {
            this.validatelastName(e.target.value);
        }
        if (e.target.id === 'contactNum') {
            this.validatecontactNum(e.target.value);
        }
        if (e.target.id === 'DOBirth') {
            this.validateDOBirth(e.target.value);
        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value);
        }
        if (e.target.id === 'password') {
            this.validatePassword(e.target.value);
        }
    }

    validatefirstName = (val) => {
        console.log(val);
        let firstNameError = this.state.error.firstNameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^[A-Za-z]+$/;

        if (val.trim() === '') {
            firstNameError = 'Please Enter firstName*';
            formValid = false;
        }
        else if (!(pattern.test(val))) {
            firstNameError = 'Please Enter valid firstName*';
            formValid = false;
        }
        else {
            firstNameError = '';
            formValid = true
        }
        this.setState({
            firstName: val,
            error: { ...error, firstNameError },
            formValid
        });
        return formValid;
    }
    validatelastName = (val) => {
        console.log(val);
        let lastNameError = this.state.error.lastNameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^[A-Za-z]+$/;
        if (val.trim() === '') {
            lastNameError = 'Please Enter lastName*';
            formValid = false;
        }

        else if (!(pattern.test(val))) {
            lastNameError = 'Please Enter valid lastName without space*';
            formValid = false;
        }
        else {
            lastNameError = '';
            formValid = true;
        }
        this.setState({
            lastName: val,
            error: { ...error, lastNameError },
            formValid
        });
        return formValid;
    }
    validatecontactNum = (val) => {
        console.log(val);
        let contactNumError = this.state.error.contactNumError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === '') {
            contactNumError = 'please Enter phone Number*';
            formValid = false;
        }
        else if (val.length !== 10) {
            contactNumError = 'please Enter 10 digits phone Number *';
            formValid = false;
        }
        else {
            contactNumError = '';
            formValid = true;
        }
        this.setState({
            contactNum: val,
            error: { ...error, contactNumError },
            formValid
        });
        return formValid;
    }
    validateDOBirth = (val) => {
        console.log(typeof (val));
        let DOBirthError = this.state.error.DOBirthError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        // let pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

        if (val == "") {
            DOBirthError = 'select date*';
            formValid = false;
        }
        // else if (!(pattern.test(val))) {
        //     DOBirthError = 'please select corect date*';
        //     formValid = false;
        // }
        else {
            DOBirthError = '';
            formValid = true
        }
        this.setState({
            DOBirth: val,
            error: { ...error, DOBirthError },
            formValid
        });
        return formValid;

    }
    validateEmail = (val) => {
        console.log(val);
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  //regex

        if (val.trim() === '') {
            emailError = 'Please Enter email*';
            formValid = false;
        }
        else if (!(pattern.test(val))) {
            emailError = 'please enter valid email*';
            formValid = false;
        }
        else {
            emailError = '';
            formValid = true;
        }

        this.setState({
            emailError: val,
            error: { ...error, emailError },
            formValid
        });
        return formValid;
    }
    validatePassword = (val) => {
        console.log(val);
        let passwordError = this.state.error.passwordError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^[A-Za-z]\w{7,14}$/;


        if (val.trim() === '') {
            passwordError = 'Please Enter password*';
            formValid = false;
        }
        else if (!(pattern.test(val))) {
            passwordError = 'Please Enter password atleast 8 characters *';
            formValid = false;
        }
        else {
            passwordError = '';
            formValid = true
        }

        this.setState({
            password: val,
            error: { ...error, passwordError },
            formValid
        });
        return formValid;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.formValid === true && this.validatefirstName(this.state.firstName) && this.validatelastName(this.state.lastName) && this.validateEmail(this.state.email)) {
            this.props.addInfo(this.state);
            this.setState({
                firstName: '',
                lastName: '',
                contactNum: '',
                DOBirth: '',
                email: '',
                password: '',
                errorSubmit: ''
            })
        }
        else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = 'Enter credentials*';
            this.setState({
                errorSubmit
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <h3> Registration Form</h3>
                    <br />
                    <label> FirstName: </label>
                    <input type="text" onChange={this.handleUpdate} value={this.state.firstName} id="firstName" placeholder="Enter your firstname" />
                    <p style={{ color: 'red' }}>{this.state.error.firstNameError}</p>

                    <label> LastName: </label>
                    <input type="text" onChange={this.handleUpdate} value={this.state.lastName} id="lastName" placeholder="Enter your lastname" />
                    <p style={{ color: 'red' }}>{this.state.error.lastNameError}</p>

                    <label> Contact Number: </label>
                    <input type="text" onChange={this.handleUpdate} value={this.state.contactNum} id="contactNum" placeholder="Enter your phone number" />
                    <p style={{ color: 'red' }}> {this.state.error.contactNumError} </p>

                    <label> Date of Birth: </label>
                    <input type="date" onChange={this.handleUpdate} value={this.state.DOBirth} id="DOBirth" placeholder="Select the Date of Birth" />
                    <p style={{ color: 'red' }}> {this.state.error.DOBirthError}</p>

                    <label> Email: </label>
                    <input type="email" onChange={this.handleUpdate} value={this.state.email} id="email" placeholder="Enter your Email" />
                    <p style={{ color: 'red' }}>{this.state.error.emailError}</p>

                    <label> Password:</label>
                    <input type="password" onChange={this.handleUpdate} value={this.state.password} id="password" placeholder="Enter password" />
                    <p style={{ color: 'red' }}>{this.state.error.passwordError}</p>

                    <p style={{ color: 'red' }}> {this.state.errorSubmit} </p>
                    <button value="submit"> Login </button>

                </form>
                <p> <MFormProps confirm={this.state.firstName, this.state.lastName, this.state.contactNum, this.state.DOBirth, this.state.email, this.state.password} /> </p>

            </div>
        )
    }
}
export default MFormInfo;










