import React from "react";

const Display = (props) => {
    const {data} = props;
    console.log(data);

    return (
        <div>
            <h3>DATA DISPLAY</h3>
             {data.map((info) => {
                return (
                    <div>
                        <p>First Name : {info.firstName}</p>
                        <p>Last Name : {info.lastName}</p>
                        <p>Age : {info.age}</p>
                        <p>Date Of Birth : {info.dateOfBirth}</p>
                        <p>Email ID : {info.emailId}</p>
                        <p>Password : {info.password}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Display;