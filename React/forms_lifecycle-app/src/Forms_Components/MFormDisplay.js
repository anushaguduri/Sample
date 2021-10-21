import React from "react";

const MFormDisplay = (props) => {
    const { info } = props;
    console.log(info);
    return (
        <div>
            <h5> User Data </h5>
            {info.map(term => {
                return (
                    <div>
                        <div className="card text-white bg-danger mb-3" style={{maxwidth: 18}}>
                            <div className="card-header">Header</div>
                            <div className="card-body" style={{ backgroundImage:('F:\UX Factory front end\git\UXFactory\React\forms-app')}}>
                                <h5 className="card-title">  View Details   </h5>
                                <p className="card-text"> FirstName: {term.firstName} </p>
                                <p className="card-text"> LastName: {term.lastName} </p>
                                <p className="card-text"> Contact Number: {term.contactNum} </p>
                                <p className="card-text"> Date of Birth: {term.DOBirth} </p>
                                <p className="card-text"> Email: {term.email} </p>
                                <p className="card-text"> Password: {term.password} </p>
                            </div>
                        </div>
                   
                    </div>
                )})}
        </div>
    )}
export default MFormDisplay;


