import React, { useState } from 'react';
const HookSix = () => {
    const [person, setPerson] = useState
    ({ name: 'sha', id: 3 });
    return (
        <div>
        <h5> create a variable name, id
        and update it value </h5>
            <p>{person.name}  and id is
            {person.id}</p>
            <button onClick={() => 
            setPerson({...person, 
            name:'anu', id: 9
            })}>Update name, id</button>
        </div>
    )
}
export default HookSix;
