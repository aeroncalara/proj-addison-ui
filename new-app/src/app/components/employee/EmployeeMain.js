
import React, { Component } from 'react';
// import EmployeeHeader from '../../../EmployeeComponents/EmployeeHeader';
import EmployeeHeader from './webComponents/header'
import EmployeeBody from './webComponents/body'
export default class EmployeeMain extends Component {

  render() {
    return (
      <div>
          <EmployeeHeader />
          <EmployeeBody />
      </div>        
    );
  }
}
