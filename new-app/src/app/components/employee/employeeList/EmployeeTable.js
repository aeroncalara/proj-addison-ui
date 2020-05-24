import React, {Component} from 'react'
import { List, Image } from 'semantic-ui-react'
import './EmployeeTable.css';

import ViewEmployee from '../../../../EmployeeComponents/ViewEmployee'
import { employee } from '../../../api/employee'

export default class EmployeeTable extends Component {
	constructor(props){
		super(props);
		this.state = { 
			employees: [],
			is_fetching: true,
		}
	}

	componentDidMount(){
		this.getAllEmployees();
	}

	getAllEmployees = async () => {
		let employee_variable = await employee.getAll()
		
		this.setState({ employees: employee_variable.data.data.getAllEmployees });
	}

	render() {
		let { employees } = this.state;
		let employeeTable = employees.map((employee, index) => {
			return (
				<tr key={ employee._id }>
					<td data-label="Name">
						<h4 className="ui image header">
							<Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
							<div className="content">
								{ employee.person.first }
								<div className="sub header">
									{ employee.position.title }
								</div>
							</div>
						</h4>
					</td>
					<td>{ employee.employee_number }</td>
					<td data-label="Address">
						{ employee.person.address[0].city + ", " + employee.person.address[0].province }
					</td>
					<td data-label="Contact Info">  
						<h4 className="ui image header">
							<div className="sub header">
								{ employee.person.contact.mobile_number }
							</div>
						</h4>
					</td>
					<td data-label="Job">
						<List divided horizontal>
							<List.Item >
								<List.Content>
									<ViewEmployee item={ employee }/>
								</List.Content>
							</List.Item>
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
							<th>Employee</th>
							<th>Employee Number</th>
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
						{ employeeTable }
					</tbody>
        </table>
      </div>        
    );
  }
}