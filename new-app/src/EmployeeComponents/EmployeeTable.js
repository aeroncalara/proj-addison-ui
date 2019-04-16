import React, {Component} from 'react'
// import {Button} from 'semantic-ui-react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import './EmployeeTable.css';

import axios from 'axios';          //Use axios here: import axios from 'axios';
//add componentDidMount()
//Create get all employees function
//Get all employees : this.setState({employees: chenes})


export default class EmployeeTable extends Component {

  componentDidMount(){
    //Add get employees
  }
  
  render() {

    //let sample_array = this.state.employees;
    //let employee_rows = sample_array.map(employee => {
    //   return {
    //   }
    // })



    return (
      <div className="EmployeeTable" >
        <table className="ui celled table">
        <thead>
            <tr><th>Name</th>
            <th>Age</th>
            <th>Email Address</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="Name"></td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job">
          
              <ViewEmployee />
              <DeleteEmployee />
            </td>
            </tr>
            <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job">
               <ViewEmployee />
               <DeleteEmployee />
            </td>
            </tr>
            <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
            <td data-label="Job">
               <ViewEmployee />
               <DeleteEmployee />
            </td>
            </tr>
            <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
            <td data-label="Job">
               <ViewEmployee />
               <DeleteEmployee />
            </td>
            </tr>
            
            
          </tbody>
        <tfoot>
        <tr><th colSpan="5">
        <div className="EmployeePagination">
          <div className="ui right floated pagination menu ">
            <a className="icon item">
            <i className="left chevron icon"></i></a>
              <a className="item">1</a>
              <a className="item">2</a>
              <a className="item">3</a>
              <a className="item">4</a>
              <a className="icon item">
            <i className="right chevron icon"></i>
            </a>
          </div>
        </div>
        </th>
      </tr></tfoot>
</table>
        </div>
       
    )
  }
}
    