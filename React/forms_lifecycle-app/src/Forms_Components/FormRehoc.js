import React from 'react';

const FormRehoc = (Prospect) => {
    const color = ['red', 'blue', 'violet'];
    const bgcolor = ['grey', 'seablue', 'pink']
    //color[0];//red
    const randomColor = color[Math.floor(Math.random() * 3)];
    const randombgColor = bgcolor[Math.floor(Math.random() * 3)];

    return (props) => {
        return (
            <div style={{ color: randomColor, backgroundColor: randombgColor}}>
                <Prospect propsVal={props} />
            </div>
        )
    }
}
export default FormRehoc;