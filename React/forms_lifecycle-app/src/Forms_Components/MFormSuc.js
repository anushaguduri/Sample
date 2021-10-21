
import React from "react";

const MFormSuc = (props) => {
    
    const { sucess } = props;
    console.log(sucess); 
    return (
        <div>
        <h3 style={{ color: 'green'}} > Registration Sucessfull</h3>
            <p> Thank you for registrating </p>
        </div>
    )
}

export default MFormSuc;
