import React, { Component } from 'react'
import './ViewStaffProfile.css';
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Message,  Label, Popup , Modal ,Segment,Grid} from 'semantic-ui-react'

import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import TIME from '../EmployeeTimeLogs/TIME';
import Incentives from '../EmployeeComponents/Incentives';
import Deduction from '../EmployeeComponents/Deduction';
import TimeLogs from '../TimeInOutComponents/TimeLogs';
import PayslipReport from '../EmployeeComponents/PayslipReport';

import axios from 'axios';      
import {addison_api_url} from '../Utilities/config';

export default class ViewStaffProfile extends Component {

	state = { open: false };

closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
	this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
};

close = () => this.setState({ open: false });

	
	constructor(props) {
	super(props)
	this.state = {
		item: this.props.item,
		is_fetching: true,
		visible: true,
		isEdit : false,
		first_name: '',
		middle_name: '',
		last_name: '',
		date_of_birth: '',
	
		mobile_number: '',
		telephone_number: '',
		email_address: '',
	
		number:'',
		street: '',
		city: '',
		province:'',
		country: '',
	
		title:'',
		description:'',
		salary:'',
	
		tin:'',
		sss:'',
		philhealth:'',
		hdmf: '',
	
		sessions: [],
		incentives:[],
		deductions:[],
	
		employee: {
			_id: "",
			person:
				{
				first:'',
				middle:'',
				last:'',
				date_of_birth:'',
				
			contact:
				{
					type:'',
					number:'',
				},
	
				address:
				{
					number:'',
					street:'',
					city:'',
					province:'',
					country:'',
				}		
			},
	
			position:{
				title:'',
				description:'',
				salary:'',
			},
	
			tin:'',
			sss:'',
			philhealth:'',
			hdmf: '',
			},
			
		}
	}
	
	handleEdit = () => { 
		this.setState({ isEdit: !this.state.isEdit });
	}
	
	
	
	getEmployee = async () => {
		let my_query = 
		`
			query
			{
				getEmployee(employee_id: "${this.props.match.params.id}")
				{
					_id
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
						description
						salary
					}
					sss
					tin
					philhealth
					hdmf
				}
			}
		`
	
		let employee_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: my_query
			}
		})
	
		this.setState({ employee: employee_variable.data.data.getEmployee });
		//PERSONAL INFORMATION
		this.setState({ first_name: this.state.employee.person.first, middle_name: this.state.employee.person.middle, last_name: this.state.employee.person.last });
		this.setState({ date_of_birth: this.state.employee.person.date_of_birth});
		this.setState({ tin: this.state.employee.tin, sss: this.state.employee.sss, philhealth: this.state.employee.philhealth, hdmf: this.state.employee.hdmf });
		//CONTACT
		this.setState({ mobile_number: this.state.employee.person.contact.mobile_number});
		this.setState({ telephone_number: this.state.employee.person.contact.telephone_number});
		this.setState({	email_address: this.state.employee.person.contact.email_address});
	
		//ADDRESS
		this.setState({ number: this.state.employee.person.address[0].number, street: this.state.employee.person.address[0].street, city: this.state.employee.person.address[0].city, province: this.state.employee.person.address[0].province, country: this.state.employee.person.address[0].country});
		
		//POSITION
		this.setState({ title: this.state.employee.position.title, description: this.state.employee.position.description, salary: this.state.employee.position.salary });
		this.setState({is_fetching: false});
	}
	
	
	
	getTimeLogs = async () =>{
		let timelogs_query = 
		`
			query{
				getAttendanceOfEmployee(employee_id:"${this.props.match.params.id}"){
					sessions{
						date 
						time_in
						time_out
						difference
					}
				}
			  }
		`
	  
		let timelogs_variable = await axios({
		  url: addison_api_url,
		  method: `post`,
		  data: {
			query: timelogs_query
		  }
		})
	
		this.setState({sessions: timelogs_variable.data.data.getAttendanceOfEmployee})
	  }

render() {

	const { open, closeOnEscape, closeOnDimmerClick, employee, incentives, deductions, sessions, terminateEmployee} = this.state;
const panes = [

{menuItem: 'Personal', render: () =>
	<Tab.Pane> 
		<div className='EmpDetails'>
			<div className ='Position_titles'>
				<i className="user icon"/>
					Personal Information
			</div>
		</div>

		
		<Form key={employee}>
			<Grid className='personal_info'>
				<Grid.Column>
					
					<Segment >
					<div className="ui big form">
		
						<Label as='a' color='teal' ribbon>
							Basic Information
						</Label>
						
						<Form.Group>
						<Form.Input name="first_name" label='First name' placeholder='First Name' value={this.state.first_name}/>

						<Form.Input name="middle_name" label='Mid Name ' placeholder='Middle Name' width={2} readOnly={this.state.isEdit?false:true} onChange={this. handleChange} value={this.state.middle_name} />

						<Form.Input name="last_name" label='Last Name' placeholder='Last Name' width={3} readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.last_name}/>
						</Form.Group>

						<Form.Group>
							{this.state.isEdit?
								<Form.Input name="date_of_birth" type="date" label='Birthdate' placeholder='Birthdate' width={2}  readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.date_of_birth}/>
								:
								<Form.Input name="date_of_birth" label='Birthdate' placeholder='Birthdate' width={2}  readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.date_of_birth}/>	
							}
						</Form.Group>
						
			{/* ADDITIONAL INFORMATION */}
						<Label as='a' color='teal' ribbon>
							{/* Addtional Information */}
							Contact Information
						</Label>

						{/* <Form.Group>
							<Form.Input name="tin" label='TIN #' placeholder='TIN #' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.tin}/>
							<Form.Input name="sss" label='SSS #' placeholder='SSS#' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.sss}/>
							<Form.Input name="philhealth" label='PHILHEALTH #' placeholder='PHILHEALTH #' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.philhealth}/>
							<Form.Input name="hdmf" label='HDMF #' placeholder='HDMF #' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.hdmf}/>
						</Form.Group> */}
					
						<Form.Group>
							<Form.Input name="mobile_number" label='Contact Number' placeholder='Mobile Number' readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.mobile_number}/>

							{/* <Form.Input name="telephone_number" label='Telephone Number' placeholder='Telephone Number'readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.telephone_number} /> */}
							<Form.Input name="email_address" label='Email' placeholder='Email' readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.email_address}/>
						</Form.Group>
					
						<Label as='a' color='teal' ribbon>
							{/* Addtional Information */}
							Address
						</Label>

						<Form.Group>
							<div className="two wide field">
								<Form.Input name="number" label='House No.' placeholder='House No.' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.number}/>
							</div>

							<div className="six wide field">
								<Form.Input name="street" label='Street' placeholder='Street' readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.street}/>
							</div>
						</Form.Group>
							

						<Form.Group widths={2}>
							
							<Form.Input name="city" label='City / Town' placeholder='City / Town'readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.city}/>

							<Form.Input name="province" label='Province' placeholder='Province'readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.province}/>

							<Form.Input name="country" label='Country' placeholder='Country'readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.country}/>

						</Form.Group>
						</div>
					</Segment>
				</Grid.Column>
			</Grid>
		</Form>
	</Tab.Pane> 
	},


{menuItem: this.newMethod(), render: () => 
<Tab.Pane>
<Form>
	<div className='Staff_Position'>
		<div className ='Position_title'>
		{
			this.state.isEdit?

			
			<List horizontal>
				<List.Item>
					<TIME/>
				</List.Item>
				
				<List.Item>
					<Button primary onClick={this.handleEdit}> Time in </Button>
				</List.Item>

			{/* Message pops when timed in/out */}
				<List.Item>
					<Message info compact>
						You've successfuly time in at 9:45am
					</Message>
				</List.Item>

			</List>

			:

			<List horizontal>
				<List.Item>
					<TIME/>
				</List.Item>
				
				<List.Item>
					<Button positive onClick={this.handleEdit}> Time out </Button>
				</List.Item>

{/* Message pops when timed in/out */}
				<List.Item>
					<Message info compact>
						You've successfuly time out at 9:45am
					</Message>
				</List.Item>

			</List>
		}
		</div>
	
	
	</div>

	<div>
	{/* <hr className="hrName" /> */}
	
	{/* <TimeLogs sessions={sessions.sessions}/> */}
	</div>  

</Form>
</Tab.Pane> 
}


{menuItem: 'Payslip', render: () => 
<Tab.Pane>
	{/* <Payslip_Page/> */}



	<div className="TimeLogsTables">
<table className="ui teal table celled">

	<thead>
		<tr>
			<th>Payslip Date</th>
			<th>Action</th>
		</tr>

		<tr>
			<th>sample date</th>
			<th>
	
					
			<PayslipReport item={this.state.employee}/>
					
					
			</th>
		
		</tr>

	</thead>



</table>

</div>        

</Tab.Pane> 
},
]
	return (
		<div>
			{/* EmployeeHeader */}
			<div className = "Staff_header">

				{/* ViewEmployeeimage */}
				<div className='Staff_Img'>
					<Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='massive' circular />
				</div>

				{/* eMPLoYEEname */}
				<div className='Staff_Name_on_top'>
					<Header as='h2'>
						<Header.Content>
							{employee.person.first} {employee.person.middle} {employee.person.last}
							{/* John Doe Smith					 */}
							<Header.Subheader>  
								{/* {employee.position.title} */}
							Developer
							</Header.Subheader>
						</Header.Content>
					</Header> 
				</div>

			
			</div>
			
				{/* EMployee contents */}
				<div className='Staff_Content'>
					
					{/* Details in the left */}
					<div className ='left_details'>

						{/*contact Details in the left */}
						<div className ='left_details_content'>
				
							{/* Contact Details */}
							<List animated verticalAlign='middle' selection>
								<List.Item>
									<i className="mobile icon"/>
									{/* {employee.person.contact.mobile_number} */}
									562-330-0815
								</List.Item>

								<List.Item>	
									<i className="mail icon"/>
									{/* {employee.person.contact.email_address} */}
									JhonDoe@example.com
								</List.Item>

							</List>

							<hr className='hr'/>

							{/* Address in the left */}
							<List animated verticalAlign='middle' selection >

								<List.Item>
									<i className="group icon"/>
									{/* {employee.position.title} */}
									Staff
								</List.Item>

								{/* <List.Item>
									<i className="map marker alternate icon"/>
									{this.state.employee.person.address[0].city}
								</List.Item> */}
								
								<List.Item>
									<i className="address card icon"/>
									{/* {this.state.employee.position.description} */}
									Front End Developer
								</List.Item>
								
							</List>

							<hr className='hr'/>

							{
								this.state.is_fetching?
								<p>Loading</p>
								:
								<List>
									<List.Item>
										<PayslipReport item={this.state.employee}/>
									</List.Item>
								</List>
							}
							
						</div>
					</div>

				{/* Tabs */}
				<div className='Tabs'>
					<Tab style={{width:1500 ,height:50 }}menu={{ secondary: true, pointing: true }} panes={panes}/>
				</div>
			</div>
		</div>
		)
}

	newMethod() {
		return 'Time Logs';
	}
}


