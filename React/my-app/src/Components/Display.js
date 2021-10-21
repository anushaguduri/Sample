import React from "react";

const Display = (props) => {
    console.log(props.displayData);
    const { displayData } = props; //const displayData = props.displayData
    return (

        <div>
            My name is {displayData.firstName}  age is {displayData.age}  
             salary is {displayData.salary} id  is {displayData.id}
             and designation is {displayData.designation}

            {/* name, age, salary, id, designation*/}

            {/*  {displayData.map(function (val) {
                return (<li> name is {val.firstName} age is
                    {val.age} id is  {val.id} and designation
                    {val.designation} </li>)
            })} */}
        </div>
    )
}
export default Display;
