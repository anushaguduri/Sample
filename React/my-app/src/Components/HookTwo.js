import React, { useState } from 'react';
const HookTwo = () => {
    const [arrObj, setArrObj] = useState([
        { firstName: 'A', age: 21, id: 1 },
        { firstName: 'B', age: 22, id: 2 },
        { firstName: 'C', age: 24, id: 3 }
    ])
    return (
        <div>
            <h2> create array of object and display and update array </h2>
            <p>  {arrObj.map((val) => {
                return (
                    <div>
                        Name is {val.firstName} and age {val.age}
                    </div>
                )
            })}
            </p>
            <button onClick={() => setArrObj(arrObj.map(arrObj => {
                return arrObj.id === 3 ? { ...arrObj, age: 23 } : arrObj;
            })
            )}>Update age</button>
        </div>
    )
}
export default HookTwo;
