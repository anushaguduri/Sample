
//create a object, array and diplay data in function based component using useState hook

import React, { useState } from "react";


const Hooks = () => {
    const [data, setData] = useState([
        { firstName: 'A', age: 21, id: 1 },
        { firstName: 'B', age: 22, id: 2 },
        { firstName: 'C', age: 24, id: 3 }
    ])
    return (
        <div>
            <p> {data.map(val => {
                return (
                    <div>
                        <p onMouseOver={data}> {val.id}  </p>
                        {this.data}
                    </div>
                )
            })} </p>


        </div>
    )
}
export default Hooks;




