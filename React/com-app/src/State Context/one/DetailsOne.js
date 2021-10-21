import React, { useContext } from "react";
import { EmpContextOne } from "./EmpContextOne";

const DetailsOne = () => {
    const Emps = useContext(EmpContextOne);
    console.log(Emps);

    // const Count = Emps.filter(sal => sal.salary > 20000).length;
    return (
        <React.Fragment>

           Count: {Emps.filter(sal => sal.salary > 20000).length}


           {/* <Count/> */}

        </React.Fragment>
    )
}

export default DetailsOne;