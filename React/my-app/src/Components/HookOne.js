
// 15 sep 
import React, { useState } from 'react';

const HookOne = () => {
    // [state variables, function to update state variable]
    const [firstName, setFirstName] = useState('alex');
    const [lastName, setLastName] = useState('jen');
    const [age, setAge] = useState(21);
    const [person, setPerson] = useState({
        nameVal: 'alina',
        lastNameVal: 'joe',
        ageVal: 20
    });
    const [arr, setArr] = useState([1, 2, 3, 4]);

    //think above state variable like mentioned below
    // firstName = 'alex';
    // person = {
    //     nameVal: 'alina',
    //     ageVal: 20
    // }
    // var arr = [1, 2, 5]

    return (
        <div>
            <p>{firstName} {lastName} </p>
            <p>{age}</p>
            <p>{person.nameVal} {person.lastNameVal} and age is {person.ageVal}</p>
            <p>{arr.map(val => {
                return (
                    <div>
                        {val}
                    </div>
                )
            })}</p>
            <button onClick={() => setFirstName('harry')}>Update Name</button>
            <button onClick={() => setAge(22)}>Update Age</button>
            <button onClick={() => setLastName('joe')}>Update LastName</button>
            {/*there is issue here, because of useState it is replacing current obj with new ibj value*/}
            <button onClick={() => setPerson({
                nameVal: 'yuvika'
            })}>Update Person</button>

            {/*here we are resolving that issue using spread opeator*/}
            <button onClick={() => setPerson({
                ...person, nameVal: 'yuvika'
            })}>Update Person Solution</button>
        </div>
    )
}
export default HookOne;
