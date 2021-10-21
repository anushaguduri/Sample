
// Dispaly.js
import React from "react";
import PropTypes from 'prop-types';

const ProposDisplay = (props) => {
    console.log(props);
    const { age, firstName, strOrNum, arr } = props;

    return (
        <div>
            <p>{age}</p>
            <p>{firstName}</p>
            <p>{strOrNum}</p>
        </div>
    )
}

ProposDisplay.propTypes = {
    firstName: PropTypes.string,
    age: PropTypes.number,
    arr: PropTypes.arrayOf(PropTypes.number),
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ProposDisplay;
