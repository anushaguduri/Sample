
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';

export default function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });


    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(" Form is submitted successfully")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 5 }}>
                    <div>
                        <TextField
                            label="FirstName"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">FirstName</InputAdornment>,
                            }}
                        />
                        <div>  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <FormHelperText id="outlined-weight-helper-text">LastName</FormHelperText>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={values.weight}
                                onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end">LastName</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </FormControl>
                        </div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                    </div>
                    <br />            <br />
                    <br />
                    <br />

                    <TextField fullWidth label="fullWidth" id="fullWidth" />

                    <br />
                    <br />
                    <br />
                    <TextField label="Filled success" variant="filled" color="success" focused />
                    <br /><br /><br /><br />

                </Box>

                <Button variant="contained" color="success" type="submit" onSubmit={handleSubmit} sx={{m:5}}> submit </Button>
                <Button variant="outlined" color="error" type="reset"> Reset </Button>

            </form>
        </div>
    );
}














// import React, { Component } from "react";
// // import { BrowserRouter, Link, Route } from "react-router-dom";
// // import './App.css'
// // import {Link} from 'react-router-dom'
// // import FormRehoc from "./FormRehoc";

// class Form extends Component {
//     constructor() {
//         super();
//         this.addEvent = React.createRef();
//         this.title = React.createRef();
//         this.short = React.createRef();
//         this.place = React.createRef();
//         this.text = React.createRef();
//         this.state = {
//             addEventError: '',
//             titleError: '',
//             categoriesError: '',
//             typeError: '',
//             textError: '',
//             formIsValid: '',
//             errorSubmit: '',
//         }
//     }
//     validateaddEvent = (val) => {
//         console.log(val);
//         let addEventError = this.state.addEventError;
//         let formValid = this.state.formIsValid;
//         if (val.trim() === "") {
//             addEventError = 'Please select atleast one option*';
//             formValid = false;
//         }
//         else {
//             addEventError = '';
//             formValid = true;
//         }
//         this.setState({
//             addEvent: val,
//             addEventError,
//             formValid
//         });
//         return formValid;
//     }

//     validatetitle = (val) => {
//         console.log(val);
//         let titleError = this.state.titleError;
//         let formValid = this.state.formIsValid;
//         let pattern = /^[A-Za-z]+$/;

//         if (val.trim() === '') {
//             titleError = 'Please Enter Title';
//             formValid = false;
//         }
//         if (!(pattern.test(val))) {
//             titleError = 'Please Enter valid Title';
//             formValid = false;
//         }
//         else {
//             titleError = '';
//             formValid = true
//         }
//         this.setState({
//             title: val,
//             titleError,
//             formValid
//         });
//         return formValid;
//     }
//     validatecategories = (val) => {
//         console.log(val);
//         let categoriesError = this.state.categoriesError;
//         let formValid = this.state.formIsValid;

//         if (val.trim() === '') {
//             categoriesError = 'Please select categories';
//             formValid = false;
//         }

//         else {
//             categoriesError = '';
//             formValid = true
//         }
//         this.setState({
//             categories: val,
//             categoriesError,
//             formValid
//         });
//         return formValid;
//     }
//     validateshort = (val) => {
//         console.log(val);
//         let shortError = this.state.shortError;
//         let formValid = this.state.formIsValid;
//         let pattern = /^[A-Za-z]+$/;

//         if (val.trim() === '') {
//             shortError = 'Please Enter data';
//             formValid = false;
//         } if (!(pattern.test(val))) {
//             shortError = 'Please Enter valid data';
//             formValid = false;
//         }
//         else {
//             shortError = '';
//             formValid = true
//         }
//         this.setState({
//             short: val,
//             shortError,
//             formValid
//         });
//         return formValid;
//     }

//     validateplace = (val) => {
//         console.log(val);
//         let placeError = this.state.placeError;
//         let formValid = this.state.formIsValid;
//         if (val.trim() === '') {
//             placeError = 'Please Enter time';
//             formValid = false;
//         }
//         else {
//             placeError = '';
//             formValid = true
//         }
//         this.setState({
//             place: val,
//             placeError,
//             formValid
//         });
//         return formValid;
//     }

//     validatetext = (val) => {
//         console.log(val);
//         let textError = this.state.textError;
//         let formValid = this.state.formIsValid;

//         if (val.trim() === '') {
//             textError = 'Please Enter data';
//             formValid = false;
//         }
//         if (val.length >= 8000) {
//             textError = 'data limit over';
//             formValid = false;

//         }
//         else {
//             textError = '';
//             formValid = true
//         }
//         this.setState({
//             text: val,
//             textError,
//             formValid
//         });
//         return formValid;
//     }
//     validateattachment = (val) => {
//         console.log(val);
//         let attachmentError = this.state.attachmentError;
//         let formValid = this.state.formIsValid;
//         let pattern = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

//         if (!(pattern.test(val))) {
//             attachmentError = 'Please Enter valid file with .jpg/.jpeg/.png/.gif';
//             formValid = false;

//         }
//         else {
//             attachmentError = '';
//             formValid = true
//         }
//         this.setState({
//             attachment: val,
//             attachmentError,
//             formValid
//         });
//         return formValid;
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         let addEvent = this.addEvent.current.value;
//         let title = this.title.current.value;
//         let categories = this.categories.current.value;
//         let short = this.short.current.value;
//         let type = this.type.current.value;
//         let place = this.type.current.value;
//         let text = this.text.current.value;
//         let attachment = this.attachment.current.value;
//         if (this.validateaddEvent(addEvent) && this.validatetitle(title)
//             && this.validatecategories(categories) &&
//             this.validateshort(short) && this.validatetype(type)
//             && this.validateplace(place)
//             && this.validatetext(text)) {
//             var person = {
//                 addEvent, title, categories, short,
//                 type, attachment
//             };
//             this.props.addInfo(person);
//             this.state = {
//                 addEventError: '',
//                 titleError: '',
//                 categoriesError: '',
//                 shortError: '',
//                 placeError: '',
//                 textError: '',
//                 attachmentError: '',
//                 formIsValid: '',
//                 errorSubmit: '',
//             }
//             alert(" Form is submitted successfully")
//         }
//         else {
//             let errorSubmit = this.state.errorSubmit;
//             errorSubmit = 'Please fill mandatory Fields*';
//             this.setState({
//                 errorSubmit
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
//                         <h5 style={{ color: "red" }}> {this.state.errorSubmit} </h5>
//                         {/* Add Event */}
//                         <label> Add Event in *</label>
//                         <select className="browser-default" ref={this.addEvent} style={{ borderStyle: "none", borderBottom: '1px solid' }}>
//                             <option value="">Select..</option>
//                             <option value="a">Option 1</option>
//                             <option value="d">Option 2</option>
//                             <option value="e">Option 3</option>
//                         </select>
//                         <p style={{ color: 'red' }}>{this.state.addEventError}</p>
//                         {/* title */}
//                         <label>Title * </label>
//                         <input type="text" ref={this.title} />
//                         <p style={{ color: 'red' }}>{this.state.titleError}</p>
//                         {/* short */}
//                         <label>Short Summary *</label>
//                         <input type="text" ref={this.short} />
//                         <p style={{ color: 'red' }}>{this.state.shortError}</p>
//                         {/* type */}
//                         <p>Type: Public</p>
//                         {/* online */}
//                         <div className="switch"> Is this a virtual event?
//                             <label>  yes
//                                 <input type="checkbox" />
//                                 <span className="lever"></span>
//                             </label>
//                             <input type="url" placeholder="Online Link" />
//                             <p style={{ color: 'red' }}> {this.state.typeError} </p>
//                         </div>
//                         {/* time */}
//                         <label> Select time * </label>
//                         {/* time and date */}
//                         <div className="row align-items-start">
//                             <div className="col">
//                                 <label> Start Date * </label>
//                                 <input type="date" ref={this.date} />
//                                 <p style={{ color: 'red' }}> {this.state.dateError} </p>
//                             </div>
//                             <div className="col">
//                                 <label> Start time * </label>
//                                 <input type="time" ref={this.time} />
//                                 <p style={{ color: 'red' }}> {this.state.timeError} </p>
//                             </div>
//                             <div className="row align-items-start">
//                                 <div className="col">
//                                     <label> End Date * </label>
//                                     <input type="date" ref={this.date} />
//                                     <p style={{ color: 'red' }}> {this.state.dateError} </p>
//                                 </div>
//                                 <div className="col">
//                                     <label> End time * </label>
//                                     <input type="time" ref={this.time} />
//                                     <p style={{ color: 'red' }}> {this.state.timeError} </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* textarea */}
//                         {/* <div className="input-group-text" id="addon-wrapping"> Paragraph
//                             <i className="material-icons right"> expand_more  insert_photo format_bold format_italic insert_link
//                                 format_quote format_list_numbered format_list_bulleted slideshow undo redo  format_align_left expand_more
//                             </i> </div> */}
//                         <textarea placeholder="Description (max limit 8000 characters)*" style={{ height: 200 }} ref={this.text} />
//                         <p style={{ color: 'red' }}> {this.state.textError} </p>
//                         {/* attachment */}
//                         <label > Attachments *  </label>
//                         <div className="file-field input-field" style={{ textAlign: "center" }} ref={this.attachment}>
//                             <div required style={{ border: "1px dashed", backgroundColor: "lightgrey", height: 60 }}>
//                                 <i className="material-icons" > insert_photo </i>
//                                 <br />
//                                 <p>Click here to upload File(s)</p>
//                                 <input type="file" ref={this.attachment} />
//                             </div>
//                             <span style={{ color: "darkblue", fontFamily: "fantasy" }}> Create Event</span>
//                             <span style={{ float: "right" }}>
//                                 <button type="submit" value="submit" style={{ backgroundColor: "darkblue", border: "1 px solid blue", color: "white", margin: 5 }} onSubmit={this.handleSubmit}> create </button>
//                                 <button type="reset" value="reset" style={{ backgroundColor: "darkblue", border: "1 px solid blue", color: "white" }}> cancel </button>
//                             </span>
//                         </div>
//                         <footer style={{ textAlign: "center" }}> Use option on the top right section of the scree to save your changes </footer>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Form;



