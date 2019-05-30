	// import {Button} from 'semantic-ui-react'
	import React, {Component} from 'react'
	import ViewEmployee from '../EmployeeComponents/ViewEmployee';
	import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
	import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
	import './PayRollTable.css';
	import { Dropdown, List, Image, Popup } from 'semantic-ui-react'
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
						{/* {employee.person.first} */}
						Aeron
					</td>
					<td data-label="Base Salary">
						{/* {employee.person.middle} */}
						20,000P
					</td>
					<td data-label="Deduction">
						{/* {employee.person.last} */}
						500 P
					</td>
					<td data-label="Incentive">
						{/* {employee.person.last} */}
						0.00 P
					</td>
					<td data-label="Total">
						{/* {employee.person.last} */}
						15,500 P
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
			
		</table>
		

		</div>        
	);
	}
	}
	export default PayRollTable;