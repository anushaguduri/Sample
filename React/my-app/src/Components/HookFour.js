import React, { useState } from 'react';
const HookFour = () => {
    const [arr, setArr] = useState([1, 2, 3, 4]);
    return (
        <div>
            <h5> update array of number (that 
            is done in the class) </h5>
            {arr.map(val => {
                return (
                    <div>
                        {val}
                    </div>
                )
            })}
            <button onClick={() => {
                setArr([...arr, arr[arr.length
                 - 1] + 1])
            }}>arr update </button>
        </div>
    )
}
export default HookFour;
