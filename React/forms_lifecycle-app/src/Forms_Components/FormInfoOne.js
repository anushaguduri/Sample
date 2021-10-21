import React, { Component } from 'react';

class FormInfoOne extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        error: {
            userNameError: '',
            emailError: '',
            passwordError: ''
        },
        formValid: false,
        errorSubmit: ''
    }
    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'userName') {
            this.validateuserName(e.target.value);

        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value);
        }

        if (e.target.id === 'password') {
            this.validatePassword(e.target.value);
        }
    }
    validateuserName = (val) => {
        console.log(val);
        let userNameError = this.state.error.userNameError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === '') {
            userNameError = 'Please Enter username';
            formValid = false;
        }
        else {
            userNameError = '';
            formValid = true
        }

        this.setState({
            userName: val,
            error: { ...error, userNameError },
            formValid
        });
        return formValid;

    }
    validateEmail = (val) => {
        console.log(val);
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//regex

        if (val.trim() === '') {
            emailError = 'Please Enter email';
            formValid = false;
        }
        else if (pattern.test(val)) {
            emailError = '';
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

        if (val.trim() === '') {
            passwordError = 'Please Enter password';
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
        // this.props.addInfo(this.state);
        if (this.state.formValid === true && this.validateuserName(this.state.userName) && this.validatePassword(this.state.password) && this.validateEmail(this.state.email)) {
            this.props.addInfo(this.state);
            this.setState({
                userName: '',
                email: '',
                password: '',
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
                <h5>
                    {/* create a form having following inputs: */}
                    {/* userName, password, email id */}
                    {/* display data once user submit the form */}
                    validate email & password (use regex)
                </h5>

                <form onSubmit={this.handleSubmit}>
                    <label>userName</label>
                    <input type="text" onChange={this.handleChange} value={this.state.userName} id="userName" placeholder="Enter name" />
                    <p>{this.state.error.userNameError}</p>

                    <label>email :</label>
                    <input type="email" onChange={this.handleChange} value={this.state.email} id="email" placeholder="Enter email" />
                    <p>{this.state.error.emailError}</p>

                    <label>password :</label>
                    <input type="password" onChange={this.handleChange} value={this.state.password} id="password" placeholder="Enter password" />
                    <p>{this.state.error.passwordError}</p>

                    <p>{this.state.errorSubmit}</p>
                    <button value="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default FormInfoOne;