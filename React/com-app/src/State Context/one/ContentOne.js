import React, { Component } from 'react';
import EmpOne from './EmpOne';
import DetailsOne from './DetailsOne';
import { EmpProviderOne } from './EmpContextOne';

class ContentOne extends Component {
  render() {
    return (
      <EmpProviderOne>
        <EmpOne />
        <DetailsOne />
      </EmpProviderOne>
    )
  }
}
export default ContentOne;



//task3 react-context
//create employeedata: array of object
//display all employeedata
//display count of employee whose salary is greater than 20k