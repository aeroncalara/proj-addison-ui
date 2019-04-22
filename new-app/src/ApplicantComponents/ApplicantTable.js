// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewEmployee from '../ApplicantComponents/ViewApplicant';
import DeleteEmployee from '../ApplicantComponents/DeleteApplicant';
import HIre from '../ApplicantComponents/HIre';
import './ApplicantTable.css';

import axios from 'axios';   
                                   


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
      Employees: [],
    }
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = async () => {
    let Employee_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ Employees: Employee_variable.data.data.getAllEmployees });
  }
  render() {

    let sample_array = this.state.Employees;
    let Employee_rows = sample_array.map(Employee => {
      return {
      }
    })
    const Employees = this.state.Employees;
    console.log(Employees);
    
    let EmployeeTable = Employees.map(Employee => {
      return (

        
              <tr key={Employee._id}>
              <td data-label="Name">{Employee.person.first}</td>
              <td data-label="Age">{Employee.person.middle}</td>
              <td data-label="Job">{Employee.person.last}</td>
              <td data-label="Job">
                

                <HIre />
                <ViewEmployee />
                <DeleteEmployee />
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
           {EmployeeTable}
          
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