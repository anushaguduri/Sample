import React from 'react';

const hoc = (Prospect) => {
    const color = ['red', 'blue', 'orange'];   //color[0];//red
    const randomColor = color[Math.floor(Math.random() * 3)];
    return (props) => {
        return (
            <div style={{ color: randomColor }}>
                <Prospect propsVal={props} />
            </div>
        )
    }
}
export default hoc;