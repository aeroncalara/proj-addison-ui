import React, {Component} from 'react'
import axios from 'axios';
import {addison_api_url} from '../Utilities/config';



class MonthlyPayrollTable extends Component {

	constructor(props){
		super(props);
		this.state = { 
			item: this.props.item,
			attendance: [],
		}

		this.getAttendanceReport = this.getAttendanceReport.bind(this);
	}

	componentDidMount = () =>{
		this.getAttendanceReport()
	}

	getAttendanceReport = async () => {
		let attendance_query =
		`
			query{
				getAttendanceReport{
					employee{
						person{
							first
							middle
							last
					}
				}
				position
				attendance_entries
				total_hours
				hours_per_entry
				}
			}
		`

		let attendance_logs = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
			  query: attendance_query
			}
		})

		let data = attendance_logs.data.data.getAttendanceReport;
		this.setState({attendance: data});

	}

	render() {
		let {attendance} = this.state;
		let attendance_table = attendance.map(session =>{
			return (
				<tr key={session.employee._id}>
					<td>{session.employee.person.first + " " +session.employee.person.last}</td>
					<td>{session.position}</td>
					<td>{session.attendance_entries}</td>
					<td>{session.total_hours}</td>
					<td>{session.hours_per_entry || 0}</td>
				</tr>
			)
		})
		return (
		
			<div className="PayrollTables">
				<table className="ui teal table celled">
				<thead>
					<tr>
						
						<th>Employee</th>
						<th>Position</th>
						<th>Attendance Entries</th>
						<th>Total Hours</th>
						<th>Hours/Entry</th>
					</tr>
				</thead>

				<tbody>
					{attendance_table}
				</tbody>
				</table>
			</div>        
		);
	}
}
export default MonthlyPayrollTable;