// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import './EmployeeTable.css';

import axios from 'axios';         //import axios from 'axios';
                           
                                   


                                    //add componentDidMount()
                                    //Create get all employees function
                                    //Get all employees : this.setState({employees: chenes})

                                      let my_query = 
                                       `query{
                                         getAllEmployees{
                                           person{
                                              first
                                              middle
                                              last
                                            }
                                          }
                                        }`
class EmployeeTable extends Component {

  
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

    let sample_array = this.state.employees;
    let employee_rows = sample_array.map(employee => {
      return {
      }
    })
    const employees = this.state.employees;
    console.log(employees);
    
    let employeeTable = employees.map(employee => {
      return (

        
              <tr key={employee._id}>
              <td data-label="Name">{employee.person.first}</td>
              <td data-label="Age">{employee.person.middle}</td>
              <td data-label="Job">{employee.person.last}</td>
              <td data-label="Job">
            
              <ViewEmployee Employee={employee}/>
                <DeleteEmployee Employee={employee} />
              </td>
              </tr> 
       
         
      )
    })
    //here

    return (
      <div className="EmployeeTable">

        <table className="ui celled table">
        <thead>
              <tr><th>Name</th>
              <th>Age</th>
              <th>Email Address</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
           {employeeTable}
          
           </tbody>
           <tfoot>
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
        </tr></tfoot>
        </table>
        
      </div>        
    );
  }
}
export default EmployeeTable;