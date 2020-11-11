import React, { Component } from 'react'
import { Button, Form, Segment, Label, Dropdown }from 'semantic-ui-react'
import Position from './Position'
import './AddEmployeeForm.css';
import axios from 'axios';

import { addison_api_url } from '../Utilities/config';


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

			mobile_number: '',
			telephone_number: '',
			email_address: '',

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
			role: '',
		}

		this.addEmployee = this.addEmployee.bind(this);
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
			
			mobile_number: '',
			telephone_number: '',
			email_address: '',

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
		
		mobile_number: '',
		telephone_number: '',
		email_address: '',

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
		role:'',
		description:'',
		salary:0,
		});
	}

	handleChange = (e, type) => {
		console.log(e.target.value)
		this.setState({[type]: e.target.value})
	}

	handleDropdown = (e, { value }) => {
		console.log(value)
		this.setState({role: value})
	}



	addEmployee = async () => {
		let add_employee_mutation = 
		`
			mutation{
				addEmployee(
					person: {
						first: "${this.state.firstName}"
						middle: "${this.state.middleName}"
						last: "${this.state.lastName}"
						date_of_birth: "${this.state.date_of_birth}"
						contact: {
							mobile_number: "${this.state.mobile_number}"
							telephone_number: "${this.state.telephone_number}"
							email_address: "${this.state.email_address}"
						}
						address: [
							{
								number: "${this.state.number}"
								street: "${this.state.street}"
								city: "${this.state.city}"
								province: "${this.state.province}"
								country: "${this.state.country}"
							}
						]
					}
					role: "${this.state.role}"
					sss: "${this.state.sss}"
					tin: "${this.state.tin}"
					philhealth: "${this.state.philhealth}"
					hdmf: "${this.state.hdmf}"
					position: {
						title: "${this.state.title}"
						description: "${this.state.description}"
						salary: ${this.state.salary}
					}
				){
					_id
				}
			}
		`

		console.log(add_employee_mutation);

		await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: add_employee_mutation
			}
		}).then(result =>{
			const {_id} = result.data.data.addEmployee
			if(_id){
				alert("Added employee succesfully!");
				this.props.history.push("/main/employees")
			}
			else{
				alert("Complete all the forms!");
				this.addEmployee;
			}
			// else{
			// 	alert("Something went wrong");
			// }
		})
		
	}

	render() {
		const { open, closeOnEscape, closeOnDimmerClick } = this.state;
		
		const options = [
            { key: 1, text: 'Admin', value: 'admin' },
            { key: 2, text: 'Staff', value: 'staff' },
          ]

		return (
			<div>
				<div  className='Add_Staff_Header'>
					
					<div>
						<div className ='desc'>
							<i className="user icon"/>
								<p>New</p>Employee		
						</div>
					</div>

					<div className="button_group">
						<Button.Group>
							<Button primary onClick={this.addEmployee}>Save Employee</Button>
							<Button secondary onClick={this.handleCancel}>Cancel</Button>
						</Button.Group>	
					</div>

				</div>

				<div className="TabContainer">
						
					<hr className="hrName" />

					<div className='form1'> 

						<Form>
							{/* <Grid> */}
								{/* <Grid.Column width={15}> */}
							<Segment raised color = 'teal' >
								
								<Label as='a' color='teal' ribbon>
									Basic Information
								</Label>

							<br/><br/>

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

									<Form.Input  onChange={(e) => this.handleChange(e, 'date_of_birth')} value={this.state.date_of_birth} name="Birthdate" type="date" label="Birthdate" placeholder="Birthdate" />
								</Form.Group>

							<br/><br/>

								<Label as='a' color='teal' ribbon>
									Contact Information
								</Label>

							<br/><br/>

								<Form.Group>													    
									<Form.Input label='Mobile Number' placeholder='Mobile Number'  onChange={(e) => this.handleChange(e, 'mobile_number')} value={this.state.mobile_number}/>

									<Form.Input label='Email' placeholder='Email'  onChange={(e) => this.handleChange(e, 'email_address')} 
									value={this.state.email_address}/>
								</Form.Group>

							<br/><br/>
								
								<Label as='a' color='teal' ribbon>
									Address
								</Label>

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
									
									<Form.Input label='Country' placeholder='Country' onChange={(e) => this.handleChange(e, 'country')} 
									value={this.state.country}/>
								</Form.Group>

							<br/><br/>	
							
								<Label as='a' color='teal' ribbon>
									Position
								</Label>

							<br/><br/>

								<Form.Group widths="equal">
									<Dropdown selection options={options} placeholder='Choose a role' onChange={this.handleDropdown} value={this.state.role}/>

									{/* <Form.Input label='Position' placeholder='Position'  onChange={(e) => this.handleChange(e, 'title')}
									value={this.state.title}/>

									<Form.Input label='Salary' placeholder='Salary'  onChange={(e) => this.handleChange(e, 'salary')} 
									value={this.state.salary}/> */}
									<Position></Position>
								</Form.Group>

								<Form.TextArea label='Title Description' placeholder='Title Description'  onChange={(e) => this.handleChange(e, 'description')} value={this.state.description}/>

							<br/><br/>


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
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
export default (AddEmployeeForm)

