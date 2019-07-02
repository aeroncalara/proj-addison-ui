import React, { Component } from 'react'

import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import Incentives from '../EmployeeComponents/Incentives';
import Deduction from '../EmployeeComponents/Deduction';
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Label, Popup , Modal ,Segment,Grid} from 'semantic-ui-react'
import './EmployeeDetails.css';
import TimeLogs from '../TimeInOutComponents/TimeLogs';

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
	visible: true,
	isEdit : false,
	firstName: '',
	middleName: '',
	lastName: '',
	date_of_birth: '',

	mobile: '',
	telephone: '',
	email: '',

	number:'',
	street: '',
	city: '',
	province:'',
	country: '',

	title:'',
	position:'',
	salary:'',

	tin:'',
	sss:'',
	philhealth:'',
	hdmf: '',

	sessions: [],
	incentives:[],
	deductions:[],
	employee: {
		person:
			{
			first:'',
			middle:'',
			last:'',
			date_of_birth:'',
			
		contact:
			{
			type:'',
			telephone:'',
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
		id: ""
	}
}

handleEdit = () => { ;
	this.setState({ isEdit: !this.state.isEdit });
}

handleCancel = () => {;
	this.setState({ 
		firstName: '',
		middleName: '',
		lastName: '',
		birthDate: '',

		type:'',
		mobile: '',
		telephone: '',
		email: '',

		number:'',
		street:'',
		city:'',
		province:'',
		country:'',

		title:'',
		description:'',
		salary:'',

		tin:'',
		sss:'',
		philhealth:'',
		hdmf: '',

		isEdit: !this.state.isEdit,
		open: !this.state.open
	});
}

handleChange = (e, type) => {
	this.setState({[type]: e.target.value})
}

componentDidMount(){
	this.getEmployee();
	this.getIncentives();
	this.getDeductions();
	this.getTimeLogs();
	this.getTerminateEmployees();

}

getTerminateEmployees = async () => {

	let my_terminated_query = 
	`
	query{
		getTerminateEmployees(employee_id: "${this.props.match.params.id}"){
			_id
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
				type
				number
			}
			}
			tin
			sss
			philhealth
			hdmf
			position{
			title
			description
			salary
			}
		}
		}
	`

	let terminateEmployee_variable = await axios({
		url: addison_api_url,
		method: `post`,
		data: {
		query: my_terminated_query
		}
		})
	this.setState({ terminateEmployee: terminateEmployee_variable.data.data.getTerminateEmployees });
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
							type
							number
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
            time_in
            time_out
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

const { open, closeOnEscape, closeOnDimmerClick, employee, incentives, deductions, sessions,terminateEmployee} = this.state;
console.log("HELLO");
const panes = [

	{menuItem: 'Personal', render: () =>
	<Tab.Pane> 
			<div className='EmpDetails'>
			<div className ='desc'>
				<i className="user icon"/>
					Personal Information
			</div>
		</div>

		<div>
			<hr className="hrName" />
		</div>  
	<Form key={employee} liquid>
	<Grid>
	<Grid.Column width={11}>
	<Segment raised>
		<Label as='a' color='teal' ribbon>
         	 Basic Information
        </Label>
		<Form.Group>


			<Form.Input label='First name' placeholder='First Name' width={3} readOnly={this.state.isEdit?false:true}  onChange={(e) => this.handleChange(e, 'firstName')} value={employee.person.first} />
			

			<Form.Input label='Middle Name' placeholder='Middle Name' width={2} readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'middleName')} value={employee.person.middle} />


			<Form.Input label='Last Name' placeholder='Last Name' width={3} readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'lastName')} value={employee.person.last}/>


		</Form.Group>

		<Form.Group>
		<Form.Input label='Birthdate' placeholder='Birthdate' width={2}  readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'birthDate')} value={employee.person.date_of_birth}/>
		</Form.Group>
		




		<Label as='a' color='teal' ribbon>
         	Addtional Information
        </Label>

		<Form.Group>
			
			<Form.Input label='TIN #' placeholder='TIN #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'tin')} value={employee.tin}/>
		
			<Form.Input label='SSS #' placeholder='SSS#' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'sss')} value={employee.sss}/>
	
			<Form.Input label='PHILHEALTH #' placeholder='PHILHEALTH #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'philhealth')} value={employee.philhealth}/>
			
			<Form.Input label='HDMF #' placeholder='HDMF #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'hdmf')} value={employee.hdmf}/>


		</Form.Group>
	</Segment>
	</Grid.Column>
	</Grid>
	
	</Form>
	
	</Tab.Pane> 
	},

	{menuItem: 'Contact', render: () => 
	<Tab.Pane>
		<Form key={employee} liquid>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="phone square icon"/>
				Contact Information
		</div>
		</div>

		<div>
		<hr className="hrName" />
		</div>  


	<Grid>
	<Grid.Column width={11}>
	<Segment raised>
	
		<Form.Group>
            
		<Form.Input label='Mobile Number' placeholder='Mobile Number' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'mobile')} value={employee.person.contact[0].number}/>
		<Form.Input label='Telephone Number' placeholder='Telephone Number'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'telephone')} />
		<Form.Input label='Email' placeholder='Email' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'email')} value={this.state.email}/>
	
		</Form.Group>
		
	</Segment>
	</Grid.Column>
	</Grid>
	
	</Form>
	</Tab.Pane>
	},

	{menuItem: 'Address', render: () => 
	<Tab.Pane>
	<Form key={employee} liquid>
	<div className='EmpDetails'>  
		<div className ='desc'>
		<i className="map marker alternate icon"/>
			Address
		</div>
	</div>

	<div>
		<hr className="hrName" />
	</div>  
	
	<Grid>
	<Grid.Column width={11}>
	<Segment raised>
			
	<Form.Group>
			<Form.Input label='House No.' placeholder='House No.' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'street')} value={employee.person.address[0].number}/>
	
			<Form.Input label='Street' placeholder='Street' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'street')} value={employee.person.address[0].street}/>
		
			<Form.Input label='City' placeholder='City'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'city')} value={employee.person.address[0].city}/>

			<Form.Input label='Province' placeholder='Province'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'Province')} value={employee.person.address[0].province}/>
		
		
			<Form.Input label='Country' placeholder='Country'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'country')} value={employee.person.address[0].country}/>

			</Form.Group>
	</Segment>
	</Grid.Column>
	</Grid>		
		

	</Form>
	</Tab.Pane> 
	},

	{menuItem: 'Position', render: () => 
	<Tab.Pane>
	<Form>
		<div className='EmpDetails'>    
		<div className ='desc'>
			<i className="users icon"/>
			Position
		</div>
		</div>

		<div>
		<hr className="hrName" />
		</div>  
		


	<Grid>
	<Grid.Column width={11}>
	<Segment raised>
			
	<Form.Group>
	
	
			<Form.Input label='Position' placeholder='Possition' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'title')} value={employee.position.title}/>
			<Form.Input label='Title Description' placeholder='Title Description'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'title')} value={employee.position.description}/>
			<Form.Input label='Salary' placeholder='Salary' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'salary')} value={employee.position.salary}/>
		</Form.Group>
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
				<i className="clock outline icon"/>
				Time Logs
			</div>
		</div>

		<div>
		<hr className="hrName" />
		
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
			<List horizontal>
				<List.Item>
		
					{!this.state.isEdit &&(
						<div className="Options">
							<List divided horizontal>
								<List.Item>
									<Popup
										trigger={<Dropdown text="Request a Change" />}
										content={<Button color='green'icon="edit" content='Edit'onClick={this.handleEdit} />}
										on='click'
										position='bottom center'
									/>
								</List.Item>

								<List.Item>
									<Popup
										trigger={<Dropdown icon="cogs icon" />}
										// <Button color='red'icon="close" content='Terminate'/ >
										content={ 
											<DeleteEmployee item={terminateEmployee} employee_id={employee._id}/>
												}
										on='click'
										position='bottom right'
									/>
								</List.Item>
							</List>
						</div>
					)}
				</List.Item>
					
					<List.Item>
						{this.state.isEdit &&
							<div className='deSave'>

								<Button.Group>
									<Button animated negative fluid onClick={this.closeConfigShow(true, false)}>
										<Button.Content visible>
										<Icon name='close' />
										</Button.Content>
										<Button.Content hidden>
										Cancel
										</Button.Content>
										</Button>      
									<Button.Or />
										<Button animated positive fluid onClick={this.handleEdit}>
										<Button.Content visible>
											<Icon name='save' />
										</Button.Content>
										<Button.Content hidden>
											Save
										</Button.Content>     
									</Button>
								</Button.Group>    
							</div>
						}
								<Modal
									open={open}
									closeOnEscape={closeOnEscape}
									closeOnDimmerClick={closeOnDimmerClick}
									onClose={this.close}
								>

								<Modal.Header>Cancel Update</Modal.Header>

									<Modal.Content>
										<p>Are you sure you want to Cancel updating Employee Information?</p>
									</Modal.Content>

									<Modal.Actions>
										<Button onClick={this.close} negative>
											No
										</Button>
										<Button
											onClick={this.handleCancel}
											positive
											labelPosition="right"
											icon="checkmark"
											content="Yes"
										/>
									</Modal.Actions>

								</Modal>

					</List.Item>
				{/* </List.Item> */}
			</List>

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
							+639167105579
						</List.Item>

						<List.Item>
							<i className="text telephone icon"/>
								+639167105579
						</List.Item>

						<List.Item
							icon='mail' 
							content={<a href='mailto:jack@semantic-ui.com'>
								Dave@semantic-ui.com
							</a>}
						/>
					</List>

					<hr />

					{/* Address in the left */}
					<List animated verticalAlign='middle' selection >

						<List.Item>
							<i className="group icon"/> HR
						</List.Item>

						<List.Item>
							<i className="map marker alternate icon"/>
							Sydney Australia
						</List.Item>
						
						<List.Item>
							<i className="address card icon"/>
							HR manager
						</List.Item>

					</List>
				</div>
			</div>

		{/* Tabs */}
		<div className='Tabs'>
			
			<Tab style={{width:1500 ,height:10000 }}menu={{ secondary: true, pointing: true }} panes={panes}/>
		
		</div>
	</div>
</div>
)
}

newMethod() {
	return 'Time Logs';
}
}


