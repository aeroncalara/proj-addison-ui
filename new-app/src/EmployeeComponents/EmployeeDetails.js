import React, { Component } from 'react'
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Label, Popup , Modal } from 'semantic-ui-react'
import './EmployeeDetails.css';
import TimeInOut from '../TimeInOutComponents/TimeInOut';
import TimeLogs from '../TimeInOutComponents/TimeLogs';

import axios from 'axios';        

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
	town: '',
	city: '',
	country: '',

	title:'',
	position:'',
	salary:'',

	tin:'',
	sss:'',
	philhealth:'',
		hdmf: '',

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
			town:'',
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

componentDidUpdate() {
	console.log(this.state.isEdit, 'hello')
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
	town:'',
	city:'',
	province:'',
	country:'',

	position:'',
	title:'',
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
}

getEmployee = async () => {

	console.log(this.props.match.params.id);

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
			}
		}
	`

let employee_variable = await axios({
	url: `http://localhost:4000`,
	method: `post`,
	data: {
	query: my_query
	}
	})
this.setState({ employee: employee_variable.data.data.getEmployee });
}

render() {

const { open, closeOnEscape, closeOnDimmerClick, employee } = this.state;

console.log(employee);

const {isEdit} = this.state;

// TABS
const panes = [

	{menuItem: 'Personal', render: () =>
	<Tab.Pane> 
	<Form>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="user icon"/>
				Personal Information
		</div>
		</div>

		<div>
		<hr className="hrName" />
		</div>  

		<List key={employee}>
		<List.Item>
			<Form.Group unstackable widths={2}>
			<Form.Input label='First name' placeholder='First name' readOnly={this.state.isEdit?false:true}  onChange={(e) => this.handleChange(e, 'firstName')} value={employee.person.first} />
			</Form.Group>
		</List.Item>
		
		<List.Item>
			<Form.Group unstackable widths={1}>
			<Form.Input label='Middle name' placeholder='Middle name' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'middleName')} value={employee.person.middle}/>
			</Form.Group>
		</List.Item>

		<List.Item>
			<Form.Group unstackable widths={2}>
			<Form.Input label='Last name' placeholder='Last name' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'lastName')} value={employee.person.last}/>
			</Form.Group>
		</List.Item>

		<List.Item>
			<Form.Group unstackable widths={1}>
			<Form.Input label='Birthdate' placeholder='Birthdate' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'birthDate')} value={employee.person.date_of_birth}/>
			</Form.Group>
		</List.Item>
		</List>

	</Form>
	</Tab.Pane> 
	},

	{menuItem: 'Contact', render: () => 
	<Tab.Pane>
	<Form>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="phone square icon"/>
				Contact Information
		</div>
		</div>

		<div>
		<hr className="hrName" />
		</div>  
		
		<List>
		<List.Item>
			<Form.Group unstackable widths={1}>																	  
			<Form.Input label='Mobile Number' placeholder='Mobile Number' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'mobile')} value={employee.person.contact[0].number}/>
			</Form.Group>
		</List.Item>
		
		<List.Item>
			<Form.Group unstackable widths={1}>
			<Form.Input label='Telephone Number' placeholder='Telephone Number'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'telephone')} />
			</Form.Group>
		</List.Item>

		<List.Item>
			<Form.Group unstackable widths={.05}>
			<Form.Input label='Email' placeholder='Email' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'email')} value={this.state.email}/>
			</Form.Group>
		</List.Item>
		</List>
	</Form>
	</Tab.Pane>
	},

	{menuItem: 'Address', render: () => 
	<Tab.Pane>
	<Form>
	<div className='EmpDetails'>  
		<div className ='desc'>
		<i className="map marker alternate icon"/>
			Address
		</div>
	</div>

	<div>
		<hr className="hrName" />
	</div>  
		
	<List>
		<List.Item>
		<Form.Group unstackable widths={2}>
			<Form.Input label='Street' placeholder='Street' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'street')} value={employee.person.address[0].street}/>
		</Form.Group>
		</List.Item>
		
		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='Town' placeholder='Town'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'town')} value={employee.person.address[0].town}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={2}>
			<Form.Input label='City' placeholder='City'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'city')} value={employee.person.address[0].city}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={1}>
			{/* <Dropdown label='country'
			placeholder='Select Country'
			search
			selection
			options={countryOptions}
			
			/> */}
				<Form.Input label='Country' placeholder='Country'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'country')} value={employee.person.address[0].country}/>
		</Form.Group>
		</List.Item>
	</List>
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
		
	<List>
		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='Possition' placeholder='Possition' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'position')} value={employee.position.position}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={2}>
			<Form.Input label='Title Description' placeholder='Title Description'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'title')} value={employee.position.title}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='Salary' placeholder='Salary' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'salary')} value={employee.position.salary}/>
		</Form.Group>
		</List.Item>
	</List>
	</Form>
	</Tab.Pane>
	},

	{menuItem: 'Benefits', render: () => 
	<Tab.Pane>
	<Form>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="user icon"/>
			Personal
		</div>
				</div>

		<div>
		<hr className="hrName" />
		</div>  
		
	<List>
		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='TIN #' placeholder='TIN #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'tin')} value={employee.tin}/>
		</Form.Group>
		</List.Item>
		
		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='SSS #' placeholder='SSS#' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'sss')} value={employee.sss}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='PHILHEALTH #' placeholder='PHILHEALTH #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'philhealth')} value={employee.philhealth}/>
		</Form.Group>
		</List.Item>

		<List.Item>
		<Form.Group unstackable widths={1}>
			<Form.Input label='HDMF #' placeholder='HDMF #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'hdmf')} value={this.state.hdmf}/>
		</Form.Group>
		</List.Item>
	</List>
	</Form>
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
		
			<TimeLogs/>
	
		</div>  
	
	</Form>
	</Tab.Pane> 
	}
	
]
return (
<div>
	{/* EmployeeHeader */}
	<div className = "EmployeeTop">
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
										trigger={<Dropdown icon="cog icon" />}
										// <Button color='red'icon="close" content='Terminate'/ >
										content={ <DeleteEmployee/>}
										on='click'
										position='bottom right'
									/>
								</List.Item>
							</List>
						</div>
					)}
				</List.Item>

				<List.Item>
					{!this.state.isEdit &&(
						<div className="PrevNxt">
							<List horizontal>

								<List.Item>
									<i className="users icon"/>3 of 100
								</List.Item>

								<List.Item>
									<Label as='a'>
										<Icon name='arrow left icon' />Prev
									</Label>
								</List.Item>
								
								<List.Item>
									<Label as='a'>
										Next
										<Icon name='arrow right icon' />
									</Label>
								</List.Item> 
							</List>
						</div> 
					)}
					
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
				</List.Item>
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
					<List animated verticalAlign='middle' selection verticalAlign='middle'>
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
					<List animated verticalAlign='middle' selection verticalAlign='middle'>
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

												{/* <List.Item>
						<TimeInOut/>
						</List.Item> */}
					</List>
				</div>
			</div>

		{/* Tabs */}
		<div className='Tabs'>
			
			<Tab style={{width:1500 ,height:10000 }} panes={panes}/>
		</div>
	</div>
</div>
)
}

newMethod() {
	return 'Time Logs';
}
}


