import React from 'react';

const FormDisplay = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            <h4>Data Display</h4>
            {data.map(info => {
                return (
                    <div>
                        <p>Name: {info.name}</p>
                        <p>Age: {info.age}</p>
                        <p>Designation: {info.designation}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FormDisplay;