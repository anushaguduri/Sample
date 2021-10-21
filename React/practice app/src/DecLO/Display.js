import React from 'react';

const Display = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div>
            {data.map(info => {
                return (
                    <div>
                        <p>AddEvent : {info.addEvent}</p>
                        <p> Title : {info.title}</p>
                        <p> categories : {info.categories}</p>
                        <p> Short : {info.short}</p>
                        <p> Type : {info.type}</p>
                        <p> Time : {info.time}</p>
                        <p> Attachment : {info.attachment}</p>
                        <p> Image  : {info.image}</p>
                        <p> Date : {info.date}</p>
                        <p> Text : {info.text}</p>
                        <p> link : {info.link}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Display;



// Instructions:

// Refer the given image and create the screen using ReactJS. Your screen should look similar to the given image.

// You do not have to work with all the fields seen in the image. You can choose to work with some of the fields
//  given in the image. However, you need to make sure that you are able to include field validations and form submission when you submit.

// Fields marked with "*" are mandatory fields. If you submit the form (by clicking on Create) without filling in the mandatory 
// field, it should show message "Please fill mandatory Fields". 

// After clicking on Create, if all validations are clear, it should show Dialog box/Alert "Form is submitted successfully".   

// DO NOT include node_modules folder when you submit your assignment over email. That increases the size of the zip file.

// Submitting a solution with React-Redux will be a significant plus.

// Make suitable assumptions where required.