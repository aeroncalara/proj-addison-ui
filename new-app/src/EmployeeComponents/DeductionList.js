import React, {Component} from 'react'
import './Deduction';
import './incentives.css';
import axios from 'axios';        
import ViewIncentives from '../EmployeeComponents/ViewIncentives';
import ViewDeduction from './ViewDeduction';

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


                                 
class Deduction extends Component {

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

                <td data-label="Age">
					      {employee.person.middle}
			        	</td>    

                {/* <td data-label="Age">
                    <ViewDeduction/>
                </td>    */}
            </tr> 
       
      )
    }
    )
    //here

    return (
      
      

    <div className="IncentivesTables">
        <table className="ui teal table celled" width="50">
        
        <thead>
              <tr>
				         <th>DATE</th>
              		<th>Total</th>
                  {/* <th>Action</th> */}
            
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
export default Deduction;