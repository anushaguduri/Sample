import React, { Component } from "react";
import FormRehoc from "./FormRehoc";

class FormReInfo extends Component {
    constructor() {
        super();
        this.name = React.createRef();
        this.age = React.createRef();
        this.designation = React.createRef();
        this.contactNum = React.createRef();
        this.state = {
            nameError: '',
            contactNumError: '',
            ageError: '',
            designationError: '',
            formIsValid: '',
            errorSubmit: '',
        }
    }
    validateName = (val) => {
        console.log(val);
        let nameError = this.state.nameError;
        let formValid = this.state.formIsValid;
        let pattern = /^[A-Za-z]+$/;
        if (val.trim() === '') {
            nameError = 'Please Enter Name*';
            formValid = false;
        }
        if (!(pattern.test(val))) {
            nameError = 'Please Enter Name*';
            formValid = false;
        }
        else {
            nameError = '';
            formValid = true
        }
        this.setState({
            name: val,
            nameError,
            formValid
        });
        return formValid;
    }
    validateAge = (val) => {
        console.log(val);
        let ageError = this.state.ageError;
        let formValid = this.state.formIsValid;
        if (val.trim() === '') {
            ageError = 'Please Enter Age';
            formValid = false;
        }
        if (val <= 0) {
            ageError = 'Please Enter valid Age';
            formValid = false;

        }
        else {
            ageError = '';
            formValid = true
        }
        this.setState({
            age: val,
            ageError,
            formValid
        });
        return formValid;
    }
    validateDesignation = (val) => {
        console.log(val);
        let designationError = this.state.designationError;
        let formValid = this.state.formIsValid;
        if (val.trim() === '') {
            designationError = 'Please Enter designation';
            formValid = false;
        }

        else {
            designationError = '';
            formValid = true
        }
        this.setState({
            designation: val,
            designationError,
            formValid
        });
        return formValid;
    }
    validateContactNum = (val) => {
        console.log(val);
        let contactNumError = this.state.contactNumError;
        let formValid = this.state.formIsValid;
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
            contactNumError,
            formValid
        });
        return formValid;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.name.current.value);
        console.log(this.age.current.value);
        console.log(this.designation.current.value);
        console.log(this.contactNum.current.value);
        let name = this.name.current.value;
        let age = this.age.current.value;
        let designation = this.designation.current.value;
        let contactNum = this.contactNum.current.value;
        if (this.validateName(name) && this.validateAge(age) && this.validateDesignation(designation) && this.validateContactNum(contactNum)) {
            var person = { name, age, designation, contactNum };
            this.props.addInfo(person);
            this.state = {
                nameError: '',
                contactNumError: '',
                ageError: '',
                designationError: '',
                formIsValid: '',
                errorSubmit: '',
            }

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
            <div 
            // style={{ textAlign: "center", backgroundImage: `url(http://rightman.co.th/images/bg/gray/bg_history.jpg)` }}
            >
                <h3>Uncontrolled Input</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>Name: </label>
                    <input type="text" placeholder="Enter Name" ref={this.name} />
                    <p style={{ color: 'red' }}>{this.state.nameError}</p>
                    <label>Age: </label>
                    <input type="number" placeholder="Enter Age" ref={this.age} />
                    <p style={{ color: 'red' }}>{this.state.ageError}</p>
                    <label> designation: </label>
                    <input type="text" placeholder="Enter designation" ref={this.designation} />
                    <p style={{ color: 'red' }}> {this.state.designationError} </p>
                    <label> contactNum: </label>
                    <input type="number" placeholder="Enter number" ref={this.contactNum} />
                    <p style={{ color: 'red' }}> {this.state.contactNumError} </p>
                   
                    <p style={{ color: 'red' }}> {this.state.errorSubmit} </p>
                    <button value="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default FormReInfo;
// export default FormRehoc(FormReInfo);





// var name = document.getElementById('').value;
// var age = document.getElementById('').value;

// restsructuring
// var obj = { name, age};// var obj = { name: name, age: age}


// task for existing code 
// add new fields designation, contact Number
// add validation to all the input fields
// display data in the form of cards below
// add stlying