import React from "react";
import PropTypes from 'prop-types';

const MFormProps = (props) => {
    console.log(props);
    const { firstName, lastName, contactNum, DOBirth, email, password } = props;
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{contactNum}</p>
            <p>{DOBirth}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
}
MFormProps.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    contactNum: PropTypes.number,
    password: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default MFormProps;


