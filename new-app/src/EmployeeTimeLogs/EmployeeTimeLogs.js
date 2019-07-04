import React, { Component } from 'react'
// import './PayRoll.css';
import {Tab, Form, Button, Loader, Dimmer} from 'semantic-ui-react'
import axios from 'axios';
import jspdf from 'jspdf';

import {addison_api_url} from '../Utilities/config';


import EmployeeTimelogsTable from './EmployeeTimelogsTable';


export default class PayRoll extends Component {

	constructor(props){
		super(props);
		this.state = {
			attendance: [],
			is_fetching: true,
			}

		this.handleChange = this.handleChange.bind(this);
		this.getAttendanceReport = this.getAttendanceReport.bind(this);
		this.generateAttendanceReport = this.generateAttendanceReport.bind(this);
	}

	componentDidMount(){
		this.getAttendanceReport();
	}
	
	close = () => this.setState({ open: false })

	getAttendanceReport = async () =>{
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
		this.setState({is_fetching: false});
	}

	handleChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value});
	}

	generateAttendanceReport = () =>{
		let date = new Date();

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

		const {is_fetching} = this.state;
		
		const panes = [
			{
				menuItem: 'Employee Attendances', render: () => 
				<Tab.Pane>
					<Form>
						<div className='EmpDetails'>
							<div className ='desc'>
								<i className="calendar alternate outline icon"/>
									Time logs
							</div>
						</div>
						<div>
							<EmployeeTimelogsTable/>
						</div>  
					</Form>
				</Tab.Pane>
			},
		]
		return (
			<div>
				<div className='Payrollhead'>
					<div className ='payTitle'>
						
						
					</div>
				</div>

				<div>
					<hr className="hr"/>
				</div>

				<div className="payrollbutton">
					<Button primary onClick={this.generateAttendanceReport}>EXPORT TO PDF</Button>
					
					
				</div>
				
				{
					is_fetching?
						<Dimmer active>
							<Loader active>Fetching data</Loader>
						</Dimmer>
							
						:
						<div className='PayrollTabs'>    
							<Tab style={{width:'100%' }} menu={{ secondary: true, pointing: true }} panes={panes} />
						</div>
				}
			</div>
		)
	}
}


