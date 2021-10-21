import React from 'react';

const DisplayEmpListOne = (props) => {
    const { EmpData } = props;
    const EmpDataList = EmpData.map(info => {
        return (
            <div key={info.id}>
                <p>Name: {info.name}</p>
                <p>Designation: {info.designation}</p>
                <p>Salary: {info.salary}</p>
            </div>
        )
    });
    return (
        <React.Fragment>
            {EmpDataList}
        </React.Fragment>
    )
}

export default DisplayEmpListOne;