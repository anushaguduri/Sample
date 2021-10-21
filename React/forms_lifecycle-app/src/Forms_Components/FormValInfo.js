import React, { Component } from 'react';


class FormValInfo extends Component {
    state = {
        name: '',
        age: '',
        password: '',
        email: '',
        error: {
            nameError: '',
            ageError: '',
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

        if (e.target.id === 'name') {
            this.validatename(e.target.value);
        }
        if (e.target.id === 'age') {
            this.validateAge(e.target.value);
        }
        if (e.target.id === 'email') {
            this.validateEmail(e.target.value);
        }

        if (e.target.id === 'password') {
            this.validatePassword(e.target.value);
        }
    }
    validatename = (val) => {
        console.log(val);
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === '') {
            nameError = 'Please Enter name';
            formValid = false;
        }
        else {
            nameError = '';
            formValid = true
        }

        this.setState({
            name: val,
            error: { ...error, nameError },
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
    validateEmail = (val) => {
        console.log(val);
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  //regex

        if (val.trim() === '') {
            emailError = 'Please Enter email';
            formValid = false;
        }
        else if (!(pattern.test(val))) {
            emailError = 'enter valid email';
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
        if (this.state.formValid === true && this.validateAge(this.state.age) && this.validatename(this.state.name) && this.validateEmail(this.state.email)) {
            this.props.addInfo(this.state);
            this.setState({
                name: '',
                age: '',
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
                <h4> Form </h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Name :</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name} id="name" placeholder="Enter name" />
                    <p>{this.state.error.nameError}</p>

                    <label>Age :</label>
                    <input type="text" onChange={this.handleChange} value={this.state.age} id="age" placeholder="Enter Age" />
                    <p>{this.state.error.ageError}</p>

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
export default FormValInfo;


// waste data
// import React, { Component } from 'react';


// class FormInfo extends Component {
//     state = {
//         name: '',
//         age: '',
//         password: '',
//         email: '',
//         error: {
//             nameError: '',
//             ageError: '',
//             emailError: '',
//             passwordError: ''
//         },
//         formValid: false,
//         errorSubmit: ''

//     }

//     handleChange = (e) => {
//         console.log(e.target.id);
//         this.setState({
//             [e.target.id]: e.target.value
//         })

//         if (e.target.id === 'name') {
//             this.validatename(e.target.value);
//         }
//         if (e.target.id === 'age') {
//             this.validateAge(e.target.value);
//         }
//         if (e.target.id === 'email') {
//             this.validateEmail(e.target.value);
//         }

//         if (e.target.id === 'password') {
//             this.validatePassword(e.target.value);
//         }
//     }
//     validatename = (val) => {
//         console.log(val);
//         let nameError = this.state.error.nameError;
//         let formValid = this.state.formValid;
//         let error = this.state.error;

//         if (val.trim() === '') {
//             nameError = 'Please Enter name';
//             formValid = false;
//         }
//         else {
//             nameError = '';
//             formValid = true
//         }

//         this.setState({
//             name: val,
//             error: { ...error, nameError },
//             formValid
//         });
//         return formValid;

//     }
//     validateAge = (val) => {
//         console.log(val);
//         let ageError = this.state.error.ageError;
//         let formValid = this.state.formValid;
//         let error = this.state.error;

//         if (val.trim() === '') {
//             ageError = 'Please Enter Age';
//             formValid = false;
//         }
//         else {
//             ageError = '';
//             formValid = true
//         }

//         this.setState({
//             age: val,
//             error: { ...error, ageError },
//             formValid
//         });
//         return formValid;
//     }
//     validateEmail = (val) => {
//         console.log(val);
//         let emailError = this.state.error.emailError;
//         let formValid = this.state.formValid;
//         let error = this.state.error;
//         let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  //regex

//         if (val.trim() === '') {
//             emailError = 'Please Enter email';
//             formValid = false;
//         }
//         else if (!(pattern.test(val))) {
//             emailError = 'enter valid email';
//             formValid = false;
//         }
//         else {
//             emailError = '';
//             formValid = true;
//         }

//         this.setState({
//             emailError: val,
//             error: { ...error, emailError },
//             formValid
//         });
//         return formValid;
//     }

//     validatePassword = (val) => {
//         console.log(val);
//         let passwordError = this.state.error.passwordError;
//         let formValid = this.state.formValid;
//         let error = this.state.error;

//         if (val.trim() === '') {
//             passwordError = 'Please Enter password';
//             formValid = false;
//         }
//         else {
//             passwordError = '';
//             formValid = true
//         }

//         this.setState({
//             password: val,
//             error: { ...error, passwordError },
//             formValid
//         });
//         return formValid;
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         // this.props.addInfo(this.state);
//         if (this.state.formValid === true && this.validateAge(this.state.age) && this.validatename(this.state.name) && this.validateEmail(this.state.email)) {
//             this.props.addInfo(this.state);
//             this.setState({
//                 name: '',
//                 age: '',
//                 email: '',
//                 password: '',
//                 errorSubmit: ''
//             })
//         }
//         else {
//             let errorSubmit = this.state.errorSubmit;
//             errorSubmit = 'Enter credentials';
//             this.setState({
//                 errorSubmit
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h4> Form </h4>

//                 https://societyforpsychotherapy.org/wp-content/uploads/2019/04/iStock-931069122-e1566233380273.jpg

//                 https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-bell-icon-png-image_927119.jpg

//                 https://www.clipartmax.com/png/middle/341-3410307_my-best-friend-friend-friends-icon-icon.png

//                 https://icon-library.com/images/msg-icon/msg-icon-18.jpg

//                 https://static.vecteezy.com/system/resources/thumbnails/000/421/494/small/Multimedia__28128_29.jpg

//                 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZ0UxE3r_O-OKkKoJeAMWhKcslyZXBqECTRACeCCliC11Wk3f-cLtZM1N8NeY41kVb5E&usqp=CAU

//                 <form onSubmit={this.handleSubmit}>

//                     <label> Add Event in *</label>
//                     <select placeholder='Select'  >
//                         <option value="BSC"> BSC </option>
//                         <option value="BCom"> BCom </option>
//                         <option value="BZA"> BZA </option>
//                         <option value="BCA"> BCA </option>
//                     </select>

//                     <input type="file" id="photo" name="photo" placeholder="Select" />

//                     <img src='https://static.vecteezy.com/system/resources/thumbnails/000/421/494/small/Multimedia__28128_29.jpg' alt='image not loaded' />

//                     <label>Title * </label>
//                     <input type="text" onChange={this.handleChange} value={this.state.Title} id="name" placeholder="Enter name" />
//                     <p>{this.state.error.TitleError}</p>

//                     <label>Categories *</label>
//                     <select placeholder='Select'>
//                         <option value="BSC"> BSC </option>
//                         <option value="BCom"> BCom </option>
//                         <option value="BZA"> BZA </option>
//                         <option value="BCA"> BCA </option>
//                     </select>

//                     <input type="text" onChange={this.handleChange} value={this.state.age} id="age" placeholder="Enter Age" />
//                     <p>{this.state.error.ageError}</p>

//                     <label>Short Summary *</label>
//                     <input type="email" onChange={this.handleChange} value={this.state.email} id="email" placeholder="Enter email" />
//                     <p>{this.state.error.emailError}</p>

//                     <label>Type: Public</label>
//                     <label>Registration Site </label>
//                     <input type="password" onChange={this.handleChange} value={this.state.password} id="password" placeholder="Enter password" />
//                     <p>{this.state.error.passwordError}</p>

//                     <label> </label>
//                     <input type='datetime-local' />
//                     <p> </p>

//                     <input type="text" />



//                     <label for="jobdescription" style="color: rgb(211, 47, 148);">job description</label>
//                     <textarea id="jobdescription" name="jobdescription" rows="5" cols="50"> jobdescription</textarea>


//                     <p>{this.state.errorSubmit}</p>
//                     <button value="submit">Sign Up</button>
//                 </form>

//             </div>
//         )
//     }
// }
// export default FormInfo;

/////