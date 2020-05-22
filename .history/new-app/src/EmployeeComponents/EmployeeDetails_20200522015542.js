import React, { Component } from 'react'

import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import TIME from '../EmployeeTimeLogs/TIME';
import Incentives from '../EmployeeComponents/Incentives';
import Deduction from '../EmployeeComponents/Deduction';
import './EmployeeDetails.css';
import TimeLogs from '../TimeInOutComponents/TimeLogs';
import PayslipReport from '../EmployeeComponents/PayslipReport';

import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Label, Popup , Modal ,Segment,Grid,Message} from 'semantic-ui-react'

import axios from 'axios';      
  
import {addison_api_url} from '../Utilities/config';

export default class EmployeeDetails extends Component {

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

editEmployee = async () => {
	let edit_query = 
	`
	mutation{
		editEmployee(
		  employee_id:"${this.props.match.params.id}"
		  person:{
		    first:"${this.state.first_name}"
		    middle:"${this.state.middle_name}"
		    last:"${this.state.last_name}"
		    date_of_birth:"${this.state.date_of_birth}"
		    contact:{
			 mobile_number:"${this.state.mobile_number}"
			 telephone_number:"${this.state.telephone_number}"
			 email_address: "${this.state.email_address}"
		    }
		    address:{
			 number:"${this.state.number}"
			 street:"${this.state.street}"
			 city:"${this.state.city}"
			 province:"${this.state.province}"
			 country:"${this.state.country}"
		    }
		  }
		  tin:"${this.state.tin}"
		  philhealth:"${this.state.philhealth}"
		  sss:"${this.state.sss}"
		  hdmf:"${this.state.hdmf}"
		  position:{
		    title:"${this.state.title}"
		    description:"${this.state.description}"
		    salary:${this.state.salary}
		  }
		  
		){
		  _id
		  employee_number
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
		    contact{
				mobile_number
				telephone_number
				email_address
		    }
		  }
		  position{
		    title
		    description
		    salary
		  }
		  tin
		  philhealth
		  hdmf
		  sss
		}
	   }
	`
// Edit EmployeeDetails
	let edited_employee = await axios({
		url: addison_api_url,
		method: `post`,
		data: {
			query: edit_query
		}
	})

	this.setState({ employee: edited_employee.data.data.editEmployee });
	this.setState({ first_name: this.state.employee.person.first, middle_name: this.state.employee.person.middle, last_name: this.state.employee.person.last });
	this.setState({ date_of_birth: this.state.employee.person.date_of_birth});
	this.setState({ tin: this.state.employee.tin, sss: this.state.employee.sss, philhealth: this.state.employee.philhealth, hdmf: this.state.employee.hdmf });
	//CONTACT
	this.setState({ mobile_number: this.state.employee.person.contact.mobile_number});
	this.setState({ telephone_number: this.state.employee.person.contact.telephone_number});
	this.setState({ email_address: this.state.employee.person.contact.email_address});

	//ADDRESS
	this.setState({ number: this.state.employee.person.address[0].number, street: this.state.employee.person.address[0].street, city: this.state.employee.person.address[0].city, province: this.state.employee.person.address[0].province, country: this.state.employee.person.address[0].country});
	
	//POSITION
	this.setState({ title: this.state.employee.position.title, description: this.state.employee.position.description, salary: this.state.employee.position.salary });
	this.handleEdit();

}

handleCancel = () => {;
	this.setState({ first_name: this.state.employee.person.first, middle_name: this.state.employee.person.middle, last_name: this.state.employee.person.last });
	this.setState({ date_of_birth: this.state.employee.person.date_of_birth});
	this.setState({ tin: this.state.employee.tin, sss: this.state.employee.sss, philhealth: this.state.employee.philhealth, hdmf: this.state.employee.hdmf });
	//CONTACT
	
	this.setState({ mobile_number: this.state.employee.person.contact.mobile_number });
	this.setState({ telephone_number: this.state.employee.person.contact.telephone_number });
	this.setState({ email_address: this.state.employee.person.contact.email_address });

	//ADDRESS
	this.setState({ number: this.state.employee.person.address[0].number, street: this.state.employee.person.address[0].street, city: this.state.employee.person.address[0].city, province: this.state.employee.person.address[0].province, country: this.state.employee.person.address[0].country});
	
	//POSITION
	this.setState({ position: this.state.employee.position.title, description: this.state.employee.position.description, salary: this.state.employee.position.salary });

	this.handleEdit();
}

handleChange = (e) => {
	const {target} = e;
	const {name, value} = target;
	this.setState({[name]: value})
}

componentDidMount(){
	this.getEmployee();
	this.getIncentives();
	this.getDeductions();
	this.getTimeLogs();
	//this.getTerminateEmployees();
}

	terminateEmployee = async () => {
		let terminate_mutation =
		`
			mutation{
				terminateEmployee(
					employee_id: "${this.props.match.params.id}"
				){
					message
					success
				}
			}
		`;

		await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: terminate_mutation
			}
		}).then(result =>{
			console.log(result.data.data.terminateEmployee);
			const {message, success} = result.data.data.terminateEmployee;
			alert(message, success);
			this.props.history.push("/main/employees");
		})

		
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

getIncentives = async () =>{
	let incentive_query = 
	`
		query{
			getAllActiveIncentivesOfEmployee(employee_id:"${this.props.match.params.id}"){
		  		date_incurred
		  		description
		  		amount
				is_active
			}
	  	}
	`

	let incentive_variable = await axios({
		url: addison_api_url,
		method: `post`,
		data: {
			query: incentive_query
		}
	})

	this.setState({incentives: incentive_variable.data.data.getAllActiveIncentivesOfEmployee})
}

getDeductions = async () => {
	//INSERT QUERY HERE
	let deductions_query =
	`
		query{
			getAllActiveDeductionsOfEmployee(employee_id:"${this.props.match.params.id}"){
				date_incurred
				description
				amount
				is_active
			}
		}
	`

	let deductions_variable = await axios({
		url: addison_api_url,
		method: `post`,
		data: {
			query: deductions_query
		}
	})

	this.setState({deductions: deductions_variable.data.data.getAllActiveDeductionsOfEmployee})
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
				<div className ='desc'>
					<i className="user icon"/>
						Personal Information
				</div>
			</div>

			
			<Form key={employee} liquid>
				<Grid className='personal_info'>
			
					<Grid.Column>
						
						<Segment >
						<div class="ui big form">
				{/* Basic INFORMATION */}
							<Label as='a' color='teal' ribbon>
								Basic Information
							</Label>
							
							<Form.Group>
								<Form.Input name="first_name" label='First name' placeholder='First Name' readOnly={this.state.isEdit?false:true} width={3} onChange={this.handleChange} value={this.state.first_name}/>
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
								<div class="two wide field">
									<Form.Input name="number" label='House No.' placeholder='House No.' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.number}/>
								</div>
								<div class="six wide field">
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

	// {menuItem: 'Contact', render: () => 
	// 	<Tab.Pane>
	// 		<Form key={employee} liquid>
	// 			<div className='EmpDetails'>
	// 				<div className ='desc'>
	// 					<i className="phone square icon"/> Contact Information
	// 				</div>
	// 			</div>

	// 			<div>
	// 				<hr className="hrName" />
	// 			</div>  


	// 			<Grid>
	// 				<Grid.Column width={11}>
	// 					<Segment raised>
	// 						<Form.Group>
	// 							<Form.Input name="mobile_number" label='Mobile Number' placeholder='Mobile Number' readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.mobile_number}/>
	// 							{/* <Form.Input name="telephone_number" label='Telephone Number' placeholder='Telephone Number'readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.telephone_number} /> */}
	// 							<Form.Input name="email_address" label='Email' placeholder='Email' readOnly={this.state.isEdit?false:true}  onChange={this.handleChange} value={this.state.email_address}/>
	// 						</Form.Group>
	// 					</Segment>
	// 				</Grid.Column>
	// 			</Grid>
	// 		</Form>
	// 	</Tab.Pane>
	// },

	// {menuItem: 'Address', render: () => 
	// 	<Tab.Pane>
	// 		<Form key={employee} liquid>
	// 			<div className='EmpDetails'>  
	// 				<div className ='desc'>
	// 					<i className="map marker alternate icon"/> Address
	// 				</div>
	// 			</div>

	// 			<div>
	// 				<hr className="hrName" />
	// 			</div>  
			 
	// 			<Grid>
	// 				<Grid.Column width={11}>
	// 					<Segment raised>
					
	// 						<Form.Group  unstackable widths={2}>
	// 								<Form.Input name="number" label='House No.' placeholder='House No.' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.number}/>

	// 								<Form.Input name="street" label='Street' placeholder='Street' readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.street}/>
	// 							</Form.Group>

	// 							<Form.Group widths={2}>
	// 								<Form.Input name="city" label='City / Town' placeholder='City / Town'readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.city}/>

	// 								<Form.Input name="province" label='Province' placeholder='Province'readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.province}/>

	// 								<Form.Input name="country" label='Country' placeholder='Country'readOnly={this.state.isEdit?false:true}onChange={this.handleChange} value={this.state.country}/>

	// 						</Form.Group>
						
	// 					</Segment>
	// 				</Grid.Column>
	// 			</Grid>		
	// 		</Form>
	// 	</Tab.Pane> 
	// },

	{menuItem: 'Position', render: () => 
		<Tab.Pane>
			<Form>
				<div className='EmpDetails'>    
					<div className ='desc'>
						<i className="users icon"/>
						Position
					</div>
				</div>

				{/* <div>
					<hr className="hrName" />
				</div>   */}
					
				<Grid>
					<Grid.Column width={11}>
						<Segment raised>
						<div class="ui big form">
							<Form.Group widths="equal">
								<Form.Input name="title" label='Position' placeholder='Position' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.title}/>

								<Form.Input name="salary" label='Salary' placeholder='Salary' readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.salary}/>
								</Form.Group>

								<Form.TextArea name="description" label='Title Description' placeholder='Title Description'readOnly={this.state.isEdit?false:true} onChange={this.handleChange} value={this.state.description}/>

							</div>
						</Segment>
					</Grid.Column>
				</Grid>		
			</Form>
		</Tab.Pane>
	},

	{menuItem: 'Incentives', render: () => 
	<Tab.Pane>
		<Incentives item={incentives} employee_id={employee._id}/>
	</Tab.Pane> 
	},
	
	{menuItem: 'Deduction', render: () => 
	<Tab.Pane>
		<Deduction item={deductions} employee_id={employee._id}/>
	</Tab.Pane> 
	},

	{menuItem: this.newMethod(), render: () => 
	<Tab.Pane>
	<Form>
		<div className='EmpDetails'>
			 <div className ='desc'>
			 <List horizontal>
								<List.Item>
									<TIME/>
								</List.Item>
								
								<List.Item>
									<Button positive>Time in</Button>
								</List.Item>

								<List.Item>
									
								<Message info>
									<Message.Header>You've successfuly time in at 9:45am</Message.Header>
									
									</Message>
								</List.Item>

								
							</List>
			
					
			</div>
		
		</div>

		<div>
		{/* <hr className="hrName" /> */}
		
		<TimeLogs sessions={sessions.sessions}/>
	
		</div>  
	
	</Form>
	</Tab.Pane> 
	}
]
	return (
		<div>
			{/* EmployeeHeader */}
			<div className = "EmpTop">
				{/* ViewEmployeeimage */}
				<div className='Img'>
					<Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='massive' circular />
				</div>

				{/* eMPLoYEEname */}
				<div className='EmpName'>
					<Header as='h2'>
						<Header.Content>
							{employee.person.first} {employee.person.middle} {employee.person.last}
							<Header.Subheader>  
								{employee.position.title}
							</Header.Subheader>
						</Header.Content>
					</Header> 
				</div>

				{/* EmployeeOptions */}
				<div className="Edit">
					{
						this.state.isEdit?
							<List horizontal>
								<List.Item>
									<Button positive onClick={this.editEmployee}> Apply Changes </Button>
								</List.Item>
								
								<List.Item>
									<Button negative onClick={this.handleCancel}> Cancel</Button>
								</List.Item>

								
							</List>
						:
						<List horizontal>
							<List.Item>
								<Button primary onClick={this.handleEdit}> Edit Details </Button>
							</List.Item>

							<List.Item>
								<Button onClick={this.terminateEmployee} negative>Terminate</Button>
							</List.Item>
						</List>			
					}
				</div>
			</div>
			
				{/* EMployee contents */}
				<div className='EmployeeContent'>
					
					{/* Details in the left */}
					<div className ='DetailsBg'>

						{/*contact Details in the left */}
						<div className ='Details'>
				
							{/* Contact Details */}
							<List animated verticalAlign='middle' selection>
								<List.Item>
									<i className="mobile icon"/>
									{employee.person.contact.mobile_number}
								</List.Item>

								{/* <List.Item>
									<i className="text telephone icon"/>
										+639167105579
								</List.Item> */}

								<List.Item>	
									<i className="mail icon"/>
									{employee.person.contact.email_address}
								</List.Item>
							</List>

							<hr />

							{/* Address in the left */}
							<List animated verticalAlign='middle' selection >

								<List.Item>
									<i className="group icon"/>
									{employee.position.title}
								</List.Item>

								{/* <List.Item>
									<i className="map marker alternate icon"/>
									{this.state.employee.person.address[0].city}
								</List.Item> */}
								
								<List.Item>
									<i className="address card icon"/>
									{this.state.employee.position.description}
								</List.Item>
							</List>

							<hr></hr>

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
				{/* <div className='Tabs'> */}
					<Tab style={{width:1500 ,height:10000 }}menu={{ secondary: true, pointing: true }} panes={panes}/>
				{/* </div> */}
			</div>
		</div>
		)
}

	newMethod() {
		return 'Time Logs';
	}
}


