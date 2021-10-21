import React from "react";

const FormReDisplay = (props) => {
    const { data } = props;
    console.log(data);
   
    // const bgcolor = ['grey', 'seablue', 'pink']
    // const randombgColor = bgcolor[Math.floor(Math.random() * 3)];

    return (
        <div
        //  style={{backgroundColor: randombgColor}} 
        > 
        <br />
            {data.map(term => {
                return (
                    <div 
                    // style={{ backgroundImage: `Url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)` }}
                    >
                      <p>  View Details </p>
                       <p> Name: {term.name} </p>
                       <p> Age: {term.age} </p>
                       <p> Contact Number: {term.contactNum} </p>
                       <p>  Designation: {term.designation} </p>
                    </div>
                )
            })}
        </div>
    )
}
export default FormReDisplay;


