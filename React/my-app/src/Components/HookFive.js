import React, { useState } from 'react';
const HookFive = () => {
    const [name, setFirstName] = useState({
        firstName: "anu",
        age: 24,
        designation: "dev",
        salary: 15000,
        hobbies: "music"
    });
    return (
        <div>
            <h5>create a variable which will have designation, salary, hobbies
                as properties and update salary when use click on a button</h5>
            <p> my name is {name.firstName} , age is {name.age} , coming to
                designation {name.designation} with salary {name.salary} and hobby is {name.hobbies} </p>
            <button onClick={() => setFirstName ({ ...name, salary: 20000 })}> update salary</button>
        </div>
    )
}
export default HookFive;
