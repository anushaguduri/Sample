import React, { Component } from "react";
// import { BrowserRouter, Link, Route } from "react-router-dom";
// import './App.css'
// import {Link} from 'react-router-dom'
// import FormRehoc from "./FormRehoc";

class Form extends Component {
    constructor() {
        super();
        this.addEvent = React.createRef();
        this.image = React.createRef();
        this.title = React.createRef();
        this.categories = React.createRef();
        this.short = React.createRef();
        this.type = React.createRef();
        this.place = React.createRef();
        this.time = React.createRef();
        this.date = React.createRef();
        this.text = React.createRef();
        this.attachment = React.createRef();
        this.state = {
            addEventError: '',
            imageError: '',
            titleError: '',
            categoriesError: '',
            shortError: '',
            typeError: '',
            placeError: '',
            timeError: '',
            dateError: '',
            textError: '',
            attachmentError: '',
            formIsValid: '',
            errorSubmit: '',
        }
    }
    validateaddEvent = (val) => {
        console.log(val);
        let addEventError = this.state.addEventError;
        let formValid = this.state.formIsValid;
        if (val.trim() === "") {
            addEventError = 'Please select atleast one option*';
            formValid = false;
        }
        else {
            addEventError = '';
            formValid = true;
        }
        this.setState({
            addEvent: val,
            addEventError,
            formValid
        });
        return formValid;
    }
    validateimage = (val) => {
        console.log(val);
        let imageError = this.state.imageError;
        let formValid = this.state.formIsValid;
        let pattern = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (val.trim() === '') {
            imageError = 'Please upload files with .jpg/.jpeg/.png/.gif only';
            formValid = false;
        }
        if ((pattern.test(val))) {
            imageError = 'Please upload files with .jpg/.jpeg/.png/.gif only';
            formValid = false;

        }
        else {
            imageError = '';
            formValid = true
        }
        this.setState({
            image: val,
            imageError,
            formValid
        });
        return formValid;
    }
    validatetitle = (val) => {
        console.log(val);
        let titleError = this.state.titleError;
        let formValid = this.state.formIsValid;
        let pattern = /^[A-Za-z]+$/;

        if (val.trim() === '') {
            titleError = 'Please Enter Title';
            formValid = false;
        }
        if (!(pattern.test(val))) {
            titleError = 'Please Enter valid Title';
            formValid = false;
        }
        else {
            titleError = '';
            formValid = true
        }
        this.setState({
            title: val,
            titleError,
            formValid
        });
        return formValid;
    }
    validatecategories = (val) => {
        console.log(val);
        let categoriesError = this.state.categoriesError;
        let formValid = this.state.formIsValid;

        if (val.trim() === '') {
            categoriesError = 'Please select categories';
            formValid = false;
        }

        else {
            categoriesError = '';
            formValid = true
        }
        this.setState({
            categories: val,
            categoriesError,
            formValid
        });
        return formValid;
    }
    validateshort = (val) => {
        console.log(val);
        let shortError = this.state.shortError;
        let formValid = this.state.formIsValid;
        let pattern = /^[A-Za-z]+$/;

        if (val.trim() === '') {
            shortError = 'Please Enter data';
            formValid = false;
        } if (!(pattern.test(val))) {
            shortError = 'Please Enter valid data';
            formValid = false;
        }
        else {
            shortError = '';
            formValid = true
        }
        this.setState({
            short: val,
            shortError,
            formValid
        });
        return formValid;
    }
    validatetype = (val) => {
        console.log(val);
        let typeError = this.state.typeError;
        let formValid = this.state.formIsValid;
        if (val.trim() === '') {
            typeError = 'please enter valid url*';
            formValid = false;
        }
        else {
            typeError = '';
            formValid = true;
        }
        this.setState({
            type: val,
            typeError,
            formValid
        });
        return formValid;
    }

    validateplace = (val) => {
        console.log(val);
        let placeError = this.state.placeError;
        let formValid = this.state.formIsValid;
        if (val.trim() === '') {
            placeError = 'Please Enter time';
            formValid = false;
        }
        else {
            placeError = '';
            formValid = true
        }
        this.setState({
            place: val,
            placeError,
            formValid
        });
        return formValid;
    }
    validatetime = (val) => {
        console.log(val);
        let timeError = this.state.timeError;
        let formValid = this.state.formIsValid;
        let pattern = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;

        if (val.trim() === '') {
            timeError = 'Please Enter time';
            formValid = false;
        }
        if ((pattern.test(val))) {
            timeError = 'Please Enter valid time';
            formValid = false;
        }

        else {
            timeError = '';
            formValid = true
        }
        this.setState({
            time: val,
            timeError,
            formValid
        });
        return formValid;
    }
    validatedate = (val) => {
        console.log(val);
        let dateError = this.state.dateError;
        let formValid = this.state.formIsValid;
        if (val.trim() === '') {
            dateError = 'Please Enter date';
            formValid = false;
        }
        else {
            dateError = '';
            formValid = true
        }
        this.setState({
            date: val,
            dateError,
            formValid
        });
        return formValid;
    }
    validatetext = (val) => {
        console.log(val);
        let textError = this.state.textError;
        let formValid = this.state.formIsValid;

        if (val.trim() === '') {
            textError = 'Please Enter data';
            formValid = false;
        }
        if (val.length >= 8000) {
            textError = 'data limit over';
            formValid = false;

        }
        else {
            textError = '';
            formValid = true
        }
        this.setState({
            text: val,
            textError,
            formValid
        });
        return formValid;
    }
    validateattachment = (val) => {
        console.log(val);
        let attachmentError = this.state.attachmentError;
        let formValid = this.state.formIsValid;
        let pattern = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!(pattern.test(val))) {
            attachmentError = 'Please Enter valid file with .jpg/.jpeg/.png/.gif';
            formValid = false;

        }
        else {
            attachmentError = '';
            formValid = true
        }
        this.setState({
            attachment: val,
            attachmentError,
            formValid
        });
        return formValid;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let addEvent = this.addEvent.current.value;
        let image = this.image.current.value;
        let title = this.title.current.value;
        let categories = this.categories.current.value;
        let short = this.short.current.value;
        let type = this.type.current.value;
        let place = this.type.current.value;
        let time = this.time.current.value;
        let date = this.date.current.value;
        let text = this.text.current.value;
        let attachment = this.attachment.current.value;
        if (this.validateaddEvent(addEvent) && this.validatetitle(title) && this.validatecategories(categories) &&
            this.validateshort(short) && this.validatetype(type) && this.validateplace(place) && this.validatetime(time) &&
            this.validatedate(date) && this.validatetext(text)) {
            var person = { addEvent, title, categories, short, type, time, attachment };
            this.props.addInfo(person);
            this.state = {
                addEventError: '',
                imageError: '',
                titleError: '',
                categoriesError: '',
                shortError: '',
                typeError: '',
                placeError: '',
                timeError: '',
                dateError: '',
                textError: '',
                attachmentError: '',
                formIsValid: '',
                errorSubmit: '',
            }
            alert(" Form is submitted successfully")
        }
        else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = 'Please fill mandatory Fields*';
            this.setState({
                errorSubmit
            })
        }
    }
    render() {
        return (
            <div>
                <nav style={{ backgroundColor: "#FEDC56" }}>
                    <ul className="hide-on-med-and-down">
                        <li><a href="#"><i className="material-icons left"> menu</i></a></li>
                        {/* <li><img src="https://t4.ftcdn.net/jpg/02/02/23/29/240_F_202232906_fVfquuX6FgAheB6YZOzjAa8PxDM7jE3E.jpg" style={{ width: 35, height: 35, borderRadius: 40, margin: 10 }} /> </li> */}
                        {/* <li style={{ color: "red", fontFamily: "fantasy" }}> Advancing For Humanity </li> */}
                        <li><a href="#" className="btn" type="submit" style={{ width: 700, backgroundColor: "grey", borderRadius: 20, marginLeft: 90 }}><i className="material-icons right">search</i> Search</a></li>
                        <a href="#">  <i className="material-icons right" style={{ marginRight: 10 }}> insert_comment </i> </a>
                        <a href="#">  <i className="material-icons right" style={{ marginRight: 10 }}> people_outline </i> </a>
                        <a href="#">  <i className="material-icons right" style={{ marginRight: 10 }}> notifications_none</i> </a>
                    </ul>
                </nav>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <span style={{ color: "darkblue", fontFamily: "fantasy" }}> Create Event</span>
                    <span style={{ float: "right" }}>
                        <button type="submit" value="submit" style={{ backgroundColor: "darkblue", border: "1 px solid blue", color: "white", margin: "5px" }} onSubmit={this.handleSubmit}> create </button>
                        <button type="reset" value="reset" style={{ backgroundColor: "darkblue", border: "1 px solid blue", color: "white" }}> cancel </button>
                    </span>
                    <hr />
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
                        <h5 style={{ color: "red" }}> {this.state.errorSubmit} </h5>
                        {/* Add Event */}
                        <label> Add Event in *</label>
                        <select className="browser-default" ref={this.addEvent} style={{ borderStyle: "none", borderBottom: '1px solid' }}>
                            <option value="">Select..</option>
                            <option value="a">Option 1</option>
                            <option value="d">Option 2</option>
                            <option value="e">Option 3</option>
                        </select>
                        <p style={{ color: 'red' }}>{this.state.addEventError}</p>
                        {/* image */}
                        <div className="file-field input-field" style={{ textAlign: "center" }}>
                            <div required style={{ border: "1px double", backgroundColor: "lightgrey", height: 80, width: 100 }}>
                                <i className="material-icons" > insert_photo </i>
                                <p> upload image</p>
                                <input type="file" ref={this.image} />
                            </div>
                        </div>
                        {/* title */}
                        <label>Title * </label>
                        <input type="text" ref={this.title} />
                        <p style={{ color: 'red' }}>{this.state.titleError}</p>
                        {/* categories */}
                        <label>Categories *</label>
                        <select className="browser-default" ref={this.categories} style={{ borderStyle: "none", borderBottom: '1px solid' }}>
                            <option value="" disabled selected>  select..</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <p style={{ color: 'red' }}>{this.state.categoriesError}</p>
                        {/* short */}
                        <label>Short Summary *</label>
                        <input type="text" ref={this.short} />
                        <p style={{ color: 'red' }}>{this.state.shortError}</p>
                        {/* type */}
                        <p>Type: Public</p>
                        <input type="url" placeholder="Registration Site" ref={this.type} />
                        <p style={{ color: 'red' }}> {this.state.typeError} </p>
                        {/* online */}
                        <div className="switch"> Is this a virtual event?
                            <label>  yes
                                <input type="checkbox" />
                                <span className="lever"></span>
                            </label>
                            <input type="url" placeholder="Online Link" />
                        </div>
                        <p style={{ color: 'red' }}> {this.state.typeError} </p>
                        {/* time */}
                        <label> Select time * </label>
                        <select class="browser-default" name="timezone" ref={this.place} >
                            <option value="" disabled selected>Select</option>
                            <option value="Etc/GMT+12">(GMT-12: 00) International Date Line West</option>
                            <option value="Pacific/Midway">(GMT-11: 00) Midway Island, Samoa</option>
                            <option value="Pacific/Honolulu">(GMT-10: 00) Hawaii</option>
                            <option value="US/Alaska">(GMT-09: 00) Alaska</option>
                            <option value="America/Los_Angeles">(GMT-08: 00) Pacific Time (US & Canada)</option>
                            <option value="America/Tijuana">(GMT-08: 00) Tijuana, Baja California</option>
                            <option value="US/Arizona">(GMT-07: 00) Arizona</option>
                            <option value="America/Chihuahua">(GMT-07: 00) Chihuahua, La Paz, Mazatlan</option>
                            <option value="US/Mountain">(GMT-07: 00) Mountain Time (US & Canada)</option>
                            <option value="America/Managua">(GMT-06: 00) Central America</option>
                            <option value="US/Central">(GMT-06: 00) Central Time (US & Canada)</option>
                            <option value="America/Mexico_City">(GMT-06: 00) Guadalajara, Mexico City, Monterrey</option>
                            <option value="Canada/Saskatchewan">(GMT-06: 00) Saskatchewan</option>
                            <option value="America/Bogota">(GMT-05: 00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value="US/Eastern">(GMT-05: 00) Eastern Time (US & Canada)</option>
                            <option value="US/East-Indiana">(GMT-05: 00) Indiana (East)</option>
                            <option value="Canada/Atlantic">(GMT-04: 00) Atlantic Time (Canada)</option>
                            <option value="America/Caracas">(GMT-04: 00) Caracas, La Paz</option>
                            <option value="America/Manaus">(GMT-04: 00) Manaus</option>
                            <option value="America/Santiago">(GMT-04: 00) Santiago</option>
                            <option value="Canada/Newfoundland">(GMT-03: 30) Newfoundland</option>
                            <option value="America/Sao_Paulo">(GMT-03: 00) Brasilia</option>
                            <option value="America/Argentina/Buenos_Aires">(GMT-03: 00) Buenos Aires, Georgetown</option>
                            <option value="America/Godthab">(GMT-03: 00) Greenland</option>
                            <option value="America/Montevideo">(GMT-03: 00) Montevideo</option>
                            <option value="America/Noronha">(GMT-02: 00) Mid-Atlantic</option>
                            <option value="Atlantic/Cape_Verde">(GMT-01: 00) Cape Verde Is.</option>
                            <option value="Atlantic/Azores">(GMT-01: 00) Azores</option>
                            <option value="Africa/Casablanca">(GMT+00: 00) Casablanca, Monrovia, Reykjavik</option>
                            <option value="Etc/Greenwich">(GMT+00: 00) Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London</option>
                            <option value="Europe/Amsterdam">(GMT+01: 00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option value="Europe/Belgrade">(GMT+01: 00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option value="Europe/Brussels">(GMT+01: 00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option value="Europe/Sarajevo">(GMT+01: 00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option value="Africa/Lagos">(GMT+01: 00) West Central Africa</option>
                            <option value="Asia/Amman">(GMT+02: 00) Amman</option>
                            <option value="Europe/Athens">(GMT+02: 00) Athens, Bucharest, Istanbul</option>
                            <option value="Asia/Beirut">(GMT+02: 00) Beirut</option>
                            <option value="Africa/Cairo">(GMT+02: 00) Cairo</option>
                            <option value="Africa/Harare">(GMT+02: 00) Harare, Pretoria</option>
                            <option value="Europe/Helsinki">(GMT+02: 00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option value="Asia/Jerusalem">(GMT+02: 00) Jerusalem</option>
                            <option value="Europe/Minsk">(GMT+02: 00) Minsk</option>
                            <option value="Africa/Windhoek">(GMT+02: 00) Windhoek</option>
                            <option value="Asia/Kuwait">(GMT+03: 00) Kuwait, Riyadh, Baghdad</option>
                            <option value="Europe/Moscow">(GMT+03: 00) Moscow, St.Petersburg, Volgograd</option>
                            <option value="Africa/Nairobi">(GMT+03: 00) Nairobi</option>
                            <option value="Asia/Tbilisi">(GMT+03: 00) Tbilisi</option>
                            <option value="Asia/Tehran">(GMT+03: 30) Tehran</option>
                            <option value="Asia/Muscat">(GMT+04: 00) Abu Dhabi, Muscat</option>
                            <option value="Asia/Baku">(GMT+04: 00) Baku</option>
                            <option value="Asia/Yerevan">(GMT+04: 00) Yerevan</option>
                            <option value="Asia/Kabul">(GMT+04: 30) Kabul</option>
                            <option value="Asia/Yekaterinburg">(GMT+05: 00) Yekaterinburg</option>
                            <option value="Asia/Karachi">(GMT+05: 00) Islamabad, Karachi, Tashkent</option>
                            <option value="Asia/Calcutta">(GMT+05: 30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option value="Asia/Calcutta">(GMT+05: 30) Sri Jayawardenapura</option>
                            <option value="Asia/Katmandu">(GMT+05: 45) Kathmandu</option>
                            <option value="Asia/Almaty">(GMT+06: 00) Almaty, Novosibirsk</option>
                            <option value="Asia/Dhaka">(GMT+06: 00) Astana, Dhaka</option>
                            <option value="Asia/Rangoon">(GMT+06: 30) Yangon (Rangoon)</option>
                            <option value="Asia/Bangkok">(GMT+07: 00) Bangkok, Hanoi, Jakarta</option>
                            <option value="Asia/Krasnoyarsk">(GMT+07: 00) Krasnoyarsk</option>
                            <option value="Asia/Hong_Kong">(GMT+08: 00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option value="Asia/Kuala_Lumpur">(GMT+08: 00) Kuala Lumpur, Singapore</option>
                            <option value="Asia/Irkutsk">(GMT+08: 00) Irkutsk, Ulaan Bataar</option>
                            <option value="Australia/Perth">(GMT+08: 00) Perth</option>
                            <option value="Asia/Taipei">(GMT+08: 00) Taipei</option>
                            <option value="Asia/Tokyo">(GMT+09: 00) Osaka, Sapporo, Tokyo</option>
                            <option value="Asia/Seoul">(GMT+09: 00) Seoul</option>
                            <option value="Asia/Yakutsk">(GMT+09: 00) Yakutsk</option>
                            <option value="Australia/Adelaide">(GMT+09: 30) Adelaide</option>
                            <option value="Australia/Darwin">(GMT+09: 30) Darwin</option>
                            <option value="Australia/Brisbane">(GMT+10: 00) Brisbane</option>
                            <option value="Australia/Canberra">(GMT+10: 00) Canberra, Melbourne, Sydney</option>
                            <option value="Australia/Hobart">(GMT+10: 00) Hobart</option>
                            <option value="Pacific/Guam">(GMT+10: 00) Guam, Port Moresby</option>
                            <option value="Asia/Vladivostok">(GMT+10: 00) Vladivostok</option>
                            <option value="Asia/Magadan">(GMT+11: 00) Magadan, Solomon Is., New Caledonia</option>
                            <option value="Pacific/Auckland">(GMT+12: 00) Auckland, Wellington</option>
                            <option value="Pacific/Fiji">(GMT+12: 00) Fiji, Kamchatka, Marshall Is.</option>
                            <option value="Pacific/Tongatapu">(GMT+13: 00) Nuku'alofa</option>
                        </select>
                        <p style={{ color: 'red' }}> {this.state.placeError} </p>
                        {/* time and date */}
                        <div className="row align-items-start">
                            <div className="col">
                                <label> Start Date * </label>
                                <input type="date" ref={this.date} />
                                <p style={{ color: 'red' }}> {this.state.dateError} </p>
                            </div>
                            <div className="col">
                                <label> Start time * </label>
                                <input type="time" ref={this.time} />
                                <p style={{ color: 'red' }}> {this.state.timeError} </p>
                            </div>
                            <div className="row align-items-start">
                                <div className="col">
                                    <label> End Date * </label>
                                    <input type="date" ref={this.date} />
                                    <p style={{ color: 'red' }}> {this.state.dateError} </p>
                                </div>
                                <div className="col">
                                    <label> End time * </label>
                                    <input type="time" ref={this.time} />
                                    <p style={{ color: 'red' }}> {this.state.timeError} </p>
                                </div>
                            </div>
                        </div>

                        {/* textarea */}
                        <div className="input-group-text" id="addon-wrapping"> Paragraph
                            <i className="material-icons right"> expand_more  insert_photo format_bold format_italic insert_link
                                format_quote format_list_numbered format_list_bulleted slideshow undo redo  format_align_left expand_more
                            </i> </div>
                        <textarea placeholder="Description (max limit 8000 characters)*" style={{ height: 200 }} ref={this.text} />
                        <p style={{ color: 'red' }}> {this.state.textError} </p>
                        {/* attachment */}
                        <label > Attachments *  </label>
                        <div className="file-field input-field" style={{ textAlign: "center" }} ref={this.attachment}>
                            <div required style={{ border: "1px dashed", backgroundColor: "lightgrey", height: 60 }}>
                                <i className="material-icons" > insert_photo </i>
                                <br />
                                <p>Click here to upload File(s)</p>
                                <input type="file" ref={this.attachment} />
                            </div>
                        </div>
                        <footer style={{ textAlign: "center" }}> Use option on the top right section of the scree to save your changes </footer>
                    </div>
                </form>
            </div>

        )
    }
}
export default Form;
