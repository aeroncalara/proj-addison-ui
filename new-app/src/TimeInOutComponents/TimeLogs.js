// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import './TimeLogs.css';
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

        
              <tr key={employee.id}>
                <td data-label="Date">
{/*          
          {employee.person.first}
             */}
             05/10/19

      </td>
                <td data-label="TimeIn">
					{/* {employee.person.middle} */}
					8:00 am
				</td>
				<td data-label="TimeOut">
					{/* {employee.person.last} */}
					5:01 pm
				</td>
                </tr> 
       
         
      )
    }
    )
    //here

    return (
      
      

      <div className="TimeLogsTables">
        <table className="ui teal table celled">
        
        <thead>
              <tr><th>Date</th>
              <th>Timed In</th>
            <th>Timed Out</th>
          </tr>
          </thead>
          <tbody>
           {employeeTable}
          
           </tbody>
  
        </table>
        
      </div>        
    );
  }
}
export default EmployeeTable;