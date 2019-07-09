import React, { Component } from 'react'
import {Button ,Header, Tab, Form, Icon, Grid, Segment,Label, Modal }from 'semantic-ui-react'
import './AddEmployeeForm.css';
import { NavLink} from 'react-router-dom';
import {Mutation } from 'react-apollo';
const { ADD_EMPLOYEE } = require('../Queries/Queries')

// TABS
class AddEmployeeForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			visible: true,
			isEdit : false,
			firstName: '',
			middleName: '',
			lastName: '',
			birthDate: '',

			mobile: '',
			telephone: '',
			email: '',

			number:'',
			street: '',
			town: '',
			city: '',
			country: '',

			tin:'',
			sss:'',
			philhealth:'',
			hdmf: '',
			
			title:'',
			description:'', 
			salary:0,
			open: false,
		}
	}

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
	};
	
	close = () => this.setState({ open: false });

	handleEdit = () => { ;
		this.setState({ isEdit: !this.state.isEdit });
	}

	handleCancel = () => { ;
		this.setState({ 
			firstName: '',
			middleName: '',
			lastName: '',
			date_of_birth: '',
			
			type:'',
			mobile: '',
			telephone: '',
			email: '',

			number:'',
			street: '',
			town: '',
			city: '',
			province:'',
			country: '',

			sss:'',
			tin:'',
			philhealth:'',
			hdmf: '',

			title:'',
			description:'',
			salary:0,

			open: !this.state.open
		});
	}

	handlesave = () => { ;
		this.setState({ 
		firstName: '',
		middleName: '',
		lastName: '',
		date_of_birth: '',
		
		type:'',
		mobile: '',
		telephone: '',
		email: '',

		number:'',
		street: '',
		town: '',
		city: '',
		province:'',
		country: '',

		sss:'',
		tin:'',
		philhealth:'',
		hdmf: '',

		title:'',
		description:'',
		salary:0,
		});
	}

	handleChange = (e, type) => {
		this.setState({[type]: e.target.value})
	}

	render() {
		const { open, closeOnEscape, closeOnDimmerClick } = this.state;
		const panes = [
			{menuItem: 'Personal', render: () =>
				<Tab.Pane> 
					<div className="TabContainer">
						<div className='EmpDetails'>
							<div className ='desc'>
								<i className="user icon"/>
									Personal Information
							</div>
						</div>

						<div>
							<hr className="hrName" />
						</div>  

						<Form>
							<Grid>
								<Grid.Column width={11}>
									<Segment raised>
							<Label as='a' color='teal' ribbon>
								Basic Information
							</Label>

								<Form.Group>
									<Form.Input label='First name' placeholder='First name' onChange={(e) => this.handleChange(e, 'firstName')} 
									value={this.state.firstName} />

									<Form.Input label='Middle name' placeholder='Middle name'  onChange={(e) => this.handleChange(e, 'middleName')} 
									value={this.state.middleName}/>

									<Form.Input label='Last name' placeholder='Last name'  onChange={(e) => this.handleChange(e, 'lastName')}
									value={this.state.lastName}/>
								</Form.Group>

								<Form.Group width="equal">
									
									{/* <Form.Input label='Birthdate'  fluid type="date" placeholder='Birthdate'  onChange={(e) => this.handleChange(e, 'date_of_birth')} value={this.state.date_of_birth}/> */}

									<Form.Input  onChange={(e) => this.handleChange(e, 'date_of_birth')} value={this.state.date_of_birth} name="Birthdate" type="date" label="Date Given" placeholder="Birthdate" />
								</Form.Group>

							<Label as='a' color='teal' ribbon>
								Additional Information
							</Label>

								<Form.Group>
									<Form.Input label='TIN #' placeholder='TIN #' onChange={(e) => this.handleChange(e, 'tin')}
									value={this.state.tin}/>
									
									<Form.Input label='SSS #' placeholder='SSS#' onChange={(e) => this.handleChange(e, 'sss')}
									value={this.state.sss}/>
							
									<Form.Input label='PHILHEALTH #' placeholder='PHILHEALTH #' onChange={(e) => this.handleChange(e, 'philhealth')} 
									value={this.state.philhealth}/>
							
									<Form.Input label='HDMF #' placeholder='HDMF #'  onChange={(e) => this.handleChange(e, 'hdmf')}
									value={this.state.hdmf}/>
								</Form.Group>
									</Segment>
								</Grid.Column>
							</Grid>
						</Form>
					</div>
				</Tab.Pane> 
			},

			{menuItem: 'Contact', render: () => 
				<Tab.Pane>
					<div className="TabContainer">
						<div className='EmpDetails'>
							<div className ='desc'>
								<i className="phone square icon"/>
									Contact Information
							</div>
						</div>
					<div>
						<hr className="hrName" />
					</div>  

				<Form>
					<Grid>
						<Grid.Column width={11}>
							<Segment raised>
					
								<Form.Group>													    
									<Form.Input label='Mobile Number' placeholder='Mobile Number'  onChange={(e) => this.handleChange(e, 'mobile')} value={this.state.mobile}/>

									<Form.Input label='Telephone Number' 
									placeholder='Telephone Number' onChange={(e) => this.handleChange(e, 'telephone')}
									value={this.state.telephone}/>

									<Form.Input label='Email' placeholder='Email'  onChange={(e) => this.handleChange(e, 'email')} 
									value={this.state.email}/>
								</Form.Group>
						
							</Segment>
						</Grid.Column>
					</Grid>


				</Form>
				</div>
				</Tab.Pane>
			},

			{menuItem: 'Address', render: () => 
			<Tab.Pane>
				<div className="TabContainer">
					<div className='EmpDetails'>  
						<div className ='desc'>
							<i className="map marker alternate icon"/>
								Address
						</div>
					</div>
			<div>
				<hr className="hrName" />
			</div>  

			<Form>
				<Grid>
					<Grid.Column width={11}>
						<Segment raised>
					
							<Form.Group unstackable widths={2}>
								<Form.Input label='House number' placeholder='House Number' onChange={(e) => this.handleChange(e, 'number')} 
								value={this.state.number}/>

								<Form.Input label='Street' placeholder='Street' onChange={(e) => this.handleChange(e, 'street')}
								value={this.state.street}/>
							</Form.Group>

							<Form.Group widths={2}>
								<Form.Input label='City / Town' placeholder='City / Town' onChange={(e) => this.handleChange(e, 'city')} 
								value={this.state.city}/>

								<Form.Input label='Province' placeholder='province' onChange={(e) => this.handleChange(e, 'province')}
								value={this.state.province}/>
								
								<Form.Input label='Brgy' placeholder='Brgy' onChange={(e) => this.handleChange(e, 'country')} 
								value={this.state.country}/>
							</Form.Group>
						</Segment>
					</Grid.Column>
				</Grid>		
			</Form>
			</div>
			</Tab.Pane> 
			},

			{menuItem: 'Position', render: () => 
			<Tab.Pane>
				<div className="TabContainer">
					<div className='EmpDetails'>    
						<div className ='desc'>
							<i className="users icon"/>
								Position
						</div>
					</div>
			<div>
				<hr className="hrName" />
			</div>  
			
			<Form>
				<Grid>
					<Grid.Column width={11}>
						<Segment raised >
					
							<Form.Group widths="equal">
								<Form.Input label='Possition' placeholder='Possition'  onChange={(e) => this.handleChange(e, 'title')}
								value={this.state.title}/>

								<Form.Input label='Salary' placeholder='Salary'  onChange={(e) => this.handleChange(e, 'salary')} 
								value={this.state.salary}/>
								</Form.Group>

							<Form.TextArea label='Title Description' placeholder='Title Description'  onChange={(e) => this.handleChange(e, 'description')} value={this.state.description}/>

						</Segment>
					</Grid.Column>
				</Grid>		
			</Form>
			</div>
			</Tab.Pane>
			},
		]
		return (
		<div>

		{/* EmployeeHeader */}
		<div className = "EmployeeTop">
			<div className='AppName'>
				<Header as='h2'>
					<Header.Content>
						<i className="plus icon"/>
							Add Employee
					</Header.Content>
				</Header> 
			</div>

			{/* EmployeeOptions */}
				<div className="Edit">
					<div className="Save">

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
		<Mutation mutation={ADD_EMPLOYEE}>
			{addEmployee => (
				<Button animated positive fluid onClick={() => {
					addEmployee({ variables: {
					first: this.state.firstName,
					middle: this.state.middleName,
					last: this.state.lastName,
					date_of_birth: this.state.date_of_birth,

					contact: [{type: this.state.type, number: this.state.number,}],
					address: [{number: this.state.number, street: this.state.street, city: this.state.city, 
								province: this.state.province, country: this.state.country,}],

					title: this.state.title,
					description: this.state.description,
					salary:parseFloat(this.state.salary),
				
					sss: this.state.sss,
					tin: this.state.tin,
					philhealth: this.state.philhealth,
					hdmf: this.state.hdmf
					}})
					this.setState({  firstName: '',
					middleName: '',
					lastName: '',
					date_of_birth: '',
					
					type:'',
					mobile: '',
					telephone: '',
					email: '',
				
					number:'',
					street: '',
					town: '',
					city: '',
					province:'',
					country: '',
				
					sss:'',
					tin:'',
					philhealth:'',
					hdmf: '',
				
					title:'',
					description:'',
					salary:'',})
					alert("adding complete")
				}}>

				<Button.Content visible>
					<Icon name='save' />
				</Button.Content>

				<Button.Content hidden>
						Save
				</Button.Content>     
			</Button>
			)}
		</Mutation>
						</Button.Group>   
						
						<Modal
							open={open}
							closeOnEscape={closeOnEscape}
							closeOnDimmerClick={closeOnDimmerClick}
							onClose={this.close}
						>
							<Modal.Header>Cancel Adding</Modal.Header>
								<Modal.Content>
									<p>Are you sure you want to Cancel adding Employee?</p>
								</Modal.Content>

								<Modal.Actions>
									<Button onClick={this.close} negative>
										No
									</Button>
									<NavLink exact to="/main/employees">
										<Button
											onClick={this.handleCancel}
											positive
											labelPosition="right"
											icon="checkmark"
											content="Yes"
										/>
									</NavLink>
								</Modal.Actions>
							</Modal>
					</div>
				</div>

			</div>


			{/* EMployee contents */}
		<div className='EmployeeContent'>
			<div className='Tabs'>    
				<Tab style={{width:1500 ,height:10000 }} menu={{ secondary: true, pointing: true }}panes={panes} />
			</div>
		</div>
	</div>
		)
	}
}
export default (AddEmployeeForm)

