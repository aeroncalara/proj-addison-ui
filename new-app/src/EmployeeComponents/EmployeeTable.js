import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import './EmployeeTable.css';
import { List, Image, Button } from 'semantic-ui-react'
import TimeInOut from '../TimeInOutComponents/TimeInOut';
import AttendanceReport from './AttendanceReport';
import PayslipReport from './PayslipReport';
import axios from 'axios';
import {addison_api_url} from '../Utilities/config'


let my_query = 
`query
{
    getAllEmployees
    {
	_id
	employee_number
    person
    {
        first
        middle
        last
        date_of_birth
        contact
        {
			mobile_number
			telephone_number
			email_address
          }
        address
        {
          number
          street
          city
          province
          country
          
        }
      }
      position
      {
		title
		salary
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
		this.getAllEmployees();
	}

	getAllEmployees = async () => {
    	let employee_variable = await axios({
      		url: addison_api_url,
      		method: `post`,
      		data: {
        		query: my_query
      		}
		})
		
		console.log({employee_variable})

    	this.setState({ employees: employee_variable.data.data.getAllEmployees });
	  }

	render() {
    	let employees = this.state.employees;
    	let employeeTable = employees.map((employee, index) => {
			return (
				<tr key={employee._id}>
					<td data-label="Name">
						<h4 className="ui image header">
							<Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
							<div className="content">
								{employee.person.first}
									<div className="sub header">
										{employee.position.title}
									</div>
							</div>
						</h4>
					</td>

					<td data-label="Address">
						{employee.person.address[0].city + ", " + employee.person.address[0].province}
					</td>

					<td data-label="Contact Info">  
						<h4 className="ui image header">
							<div className="sub header">
								{employee.person.contact.mobile_number}
							</div>
						</h4>
					</td>

					<td data-label="Job">
						<List divided horizontal>
							<List.Item >
								<List.Content>
									<ViewEmployee item={employee}/>
								</List.Content>
							</List.Item>

							{/* <List.Item>
								<List.Content>
									<TimeInOut item={employee._id} />
								</List.Content>
							</List.Item> */}


							{/* <List.Item>
								<List.Content>
									<PayslipReport item={employee}/>
								</List.Content>
							</List.Item>							 */}
						</List>
					</td>
				</tr> 
			)
   		}
    )

    
    return (
      <div className="EmployeeTables">
        <table className="ui teal table celled">
			<thead>
				<tr>
					<th>Employee JM UNLIMITED</th>
					<th>Address</th>
					<th>Contact Number.</th>
					<th> 
						<List divided horizontal>
							<List.Item>
								<List.Content>
									Actions
								</List.Content>
							</List.Item>
						</List>
					</th>
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