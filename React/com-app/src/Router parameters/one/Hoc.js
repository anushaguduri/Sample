import React from 'react';

const Hoc = (Prospect) => {
    const color = ['darkgrey', 'seablue', 'violet']
    const bgcolor = ['lightred', 'lightgreen', 'pink']
    const randombgColor = bgcolor[Math.floor(Math.random() * 3)];
    const randomcolor = color[Math.floor((Math.random)*3)];
    return (props) => {
        return (
            <div style={{backgroundColor: randombgColor, color: randomcolor}}>
                <Prospect propsVal={props} />
                
            </div>
        )
    }
}
export default Hoc;