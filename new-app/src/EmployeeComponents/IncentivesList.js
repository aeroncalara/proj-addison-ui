// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'


import './Incentives';



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
                <td data-label="Age"> {employee.person.middle}</td>
                
                </tr> 
       
      )
    }
    )
    //here

    return (
      
      

      <div className="IncentivesTables">
        <table className="ui teal table celled" width="50">
        
        <thead>
              <tr><th>DATE</th>
              <th>Total</th>
            
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
export default PayRollTable;