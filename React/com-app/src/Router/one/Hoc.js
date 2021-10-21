import React from 'react';

const Hoc = (Prospect) => {
    const bgcolor = ['grey', 'seablue', 'red', 'violet']
    const randombgColor = bgcolor[Math.floor(Math.random() * 4)];
    return (props) => {
        return (
            <div style={{backgroundColor: randombgColor}}>
                <Prospect propsVal={props} />
            </div>
        )
    }
}
export default Hoc;