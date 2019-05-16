// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import './EmployeeTable.css';
import { Dropdown, List, Image } from 'semantic-ui-react'
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

  
 
    const employees = this.state.employees;
    console.log(employees);
    
    let employeeTable = employees.map((employee, index) => {
      return (

        
              <tr key={index}>
                <td data-label="Name"><h4 class="ui image header">
         <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
          <div class="content">
          {employee.person.first}
            <div class="sub header">
            Human Resources
          </div>
        </div>
      </h4>
      </td>
                <td data-label="Age">{employee.person.middle}</td>
                <td data-label="Job">{employee.person.last}</td>
                <td data-label="Job">
                <List divided horizontal>
                <List.Item>
                  
                  <List.Content>
                  <ViewEmployee Employee={employee}/>
                  </List.Content>
                </List.Item>
                <List.Item>
                 
                  <List.Content>
                <DeleteEmployee Employee={employee} />
                  </List.Content>
                </List.Item>
                
          </List>
                  
                 
                </td>
              </tr> 
       
         
      )
    }
    )
    //here

    return (
      
      

      <div className="EmployeeTables">

      {/* <div className='head'>
          
          <div className ='Title'>
              <Header icon='users' content='Employee' />
          </div>

          <div className="find">
              <div className="ui right aligned category search">
                   <div className="ui icon input">
                   <input className="prompt" type="text" placeholder="Search..." />
                   <i classn="search icon"></i>
                   </div>
                   <div classn="results"></div>
              </div>
          </div>


      </div> */}



        <table className="ui teal table celled">
        
        <thead>
              <tr><th>Name</th>
              <th>Age</th>
              <th>Email Address</th>
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
        </tr>
        </tfoot>
        </table>
        
      </div>        
    );
  }
}
export default EmployeeTable;