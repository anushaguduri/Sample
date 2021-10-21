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