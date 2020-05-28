import React, { Component } from 'react'
// import './PayRoll.css';
import {Tab, Form, Button, Loader, Dimmer} from 'semantic-ui-react'
import axios from 'axios';
import jspdf from 'jspdf';


import {addison_api_url} from '../Utilities/config';
import EmployeeTimelogsTable from './EmployeeTimelogsTable';
import './EmployeeTimeLogs.css'

export default class PayRoll extends Component {

	constructor(props){
		super(props);
		this.state = {
			attendance: [],
			is_fetching: false,
			}

		this.handleChange = this.handleChange.bind(this);
		//this.getAttendanceReport = this.getAttendanceReport.bind(this);
		//this.generateAttendanceReport = this.generateAttendanceReport.bind(this);
	}

	componentDidMount(){
		//this.getAttendanceReport();
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
										Hours Rendered
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

			

				<div className="payrollbutton">
					{/* <Button primary onClick={this.generateAttendanceReport}>EXPORT TO PDF</Button> */}
					
					
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


