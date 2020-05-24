import React, {Component} from 'react'
import { Grid, Button, List } from 'semantic-ui-react';

import {addison_api_url} from '../Utilities/config';

import axios from 'axios';
import jspdf from 'jspdf';




class MonthlyPayrollTable extends Component {

	constructor(props){
		super(props);
		this.state = { 
			item: this.props.item,
			attendance: [],
			start_date: '',
			end_date: '',
		}

		this.getAttendanceReport = this.getAttendanceReport.bind(this);
		this.generateAttendanceReport = this.generateAttendanceReport.bind(this);
	}

	handleChange = (e) =>{
		const {target} = e;
		const {name, value} = target;

		this.setState({[name]: value});
	}

	getAttendanceReport = async () => {
		let attendance_query =
		`
			query{
				getAttendanceReport(start_date: "${this.state.start_date}", end_date: "${this.state.end_date}"){
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

	generateAttendanceReport = () =>{
        let pdf = new jspdf('p', 'mm', 'a4');
        pdf.setFont("times");

        pdf.setFontSize(12);
        // pdf.text(50, 42, this.state.employee_name);
        // pdf.text(50, 50, this.state.position);
        // pdf.text(50, 58, this.state.base_salary.toString());

        pdf.line(15, 18, 185, 18, "closed");
        pdf.line(15, 20, 185, 20, "closed");

        pdf.setFontSize("10");
        pdf.text(70,25, "AUTOMATED ATTENDANCE REPORT");
        pdf.setFontSize("8")
        pdf.text(55,29, "Generated as of" + new Date());
        
        pdf.line(15, 32, 185, 32, "closed");
        pdf.line(15, 34, 185, 34, "closed");
        pdf.text(15, 42, "EMPLOYEE");
		pdf.text(50, 42, "POSITION");
		pdf.text(83, 42, "ATTENDANCE ENTRIES");
		pdf.text(128, 42, "TOTAL HOURS");
		pdf.text(155, 42, "HOURS/ENTRY");

		let current_y = 46;


		console.log(this.state.attendance);
		pdf.setFontSize("10");
		this.state.attendance.map(sessions =>{
			pdf.text(7, current_y, sessions.employee.person.first + " " +sessions.employee.person.last);
			pdf.text(40, current_y, sessions.position);
			pdf.text(95, current_y, sessions.attendance_entries.toString());
			pdf.text(130, current_y, sessions.total_hours.toString());
			let rates = (!sessions.hours_per_entry)? 0: sessions.hours_per_entry;
			pdf.text(165, current_y, rates.toString());
			current_y += 5;
		})
		


        pdf.line(15, 195, 50, 195);
        pdf.text(15, 200, "         APPROVED BY:")

        pdf.line(15, 220, 50, 220);
        pdf.text(15, 225, "         CREATED BY:")

        pdf.line(0, 280, 220, 280, "closed");
        pdf.text(15, 286, "As signed, all of the information stated above is true and correct to best knowledge of the company.\nIn case any of the above information is false or untrue, the company may be held liable for.\nThis serves as an official document from the company\n")

        pdf.output('dataurlnewwindow');
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
				<div>

					<List vertical>

						<List.Item>
							<List horizontal>
								<List.Item>
									<label>Start Date</label>
									<input onChange={this.handleChange} name="start_date" type = "date" value={this.state.start_date}/>
								</List.Item>

								<List.Item>
									<label>End Date</label>
									<input onChange={this.handleChange} name="end_date" type ="date" value={this.state.end_date}/>
								</List.Item>
							</List>
						</List.Item>

						<List.Item>

						<List horizontal>
							<List.Item>
								<Button primary onClick={this.getAttendanceReport}> GENERATE RENDERED HOURS </Button>
							</List.Item>

							<List.Item>
								<Button primary onClick={this.generateAttendanceReport}>EXPORT TO PDF</Button>
							</List.Item>

							</List>
						</List.Item>

					</List>
					

					
				</div>
				
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