import React from 'react';

const FormDisplayOne = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            <h4>Data Display</h4>
            {data.map(info => {
                return (
                    <div>
                        <p>UserName: {info.userName}</p>
                        <p>password: {info.password}</p>
                        <p>email: {info.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FormDisplayOne;