// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import './PayRollTable.css';
import { Dropdown, List, Image } from 'semantic-ui-react'
import TimeInOut from '../TimeInOutComponents/TimeInOut';


// import { Menu, Segment ,Header, Divider } from 'semantic-ui-react'

import axios from 'axios';        


let my_query = 
`
  query{
    getAllEmployees{
      person{
        first
        middle
        last
        date_of_birth
        address{
          number
          street
          city
          province
          country
          
        }
      }
    }
  }
`


                                 
class PayRollTable extends Component {

  
  constructor(props){
    super(props);
    this.state = { 
      employees: [],
    }
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = async () => {
    let employee_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ employees: employee_variable.data.data.getAllEmployees });
  }
  render() {

  
 
    const employees = this.state.employees;
    console.log(employees);
    
    let employeeTable = employees.map((employee, index) => {
      return (

        
              <tr key={employee.id}>
                <td data-label="Name"> 
                 {employee.person.first}
              </td>
                <td data-label="Age">{employee.person.middle}</td>
                <td data-label="Job">{employee.person.last}
                </td>
                <td data-label="Job">{employee.person.last}
                </td>
                <td data-label="Job">{employee.person.last}
                </td>
                </tr> 
       
         
      )
    }
    )
    //here

    return (
      
      

      <div className="PayrollTables">
        <table className="ui teal table celled">
        
        <thead>
              <tr><th>Employee</th>
              <th>Base Salary</th>
            <th>Deduction</th>
            <th>Incentive</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
           {employeeTable}
          
           </tbody>
           {/* <tfoot>
          <tr>
          <th colSpan="5">
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
        </tr>
        </tfoot> */}
        </table>
        
      </div>        
    );
  }
}
export default PayRollTable;