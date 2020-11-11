import React, { Component } from 'react'
import { Button, Form, Segment, Label, Dropdown }from 'semantic-ui-react'

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
			firstNameError: ''
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

	validate = () =>{
		let firstNameError = "";

		if (!this.state.firstname) {
			firstNameError = "name cannot be blank";
		  }
		  if (firstNameError) {
			this.setState({ firstNameError });
			return false;
		  }
	  
		  return true;
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
			const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(this.addEmployee);
    }
			const {_id} = result.data.data.addEmployee
			if(_id){
				alert("Added employee succesfully!");
				this.props.history.push("/main/employees")
			}else{
				alert("Something went wrong");
			}
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
							<Button secondary>Cancel</Button>
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
									<div style={{ fontSize: 12, color: "red" }}>
            							{this.state.firstNameError}
          							</div>

									{/* <Form.Input label='Middle name' placeholder='Middle name'  onChange={(e) => this.handleChange(e, 'middleName')} 
									value={this.state.middleName}/>

									<Form.Input label='Last name' placeholder='Last name'  onChange={(e) => this.handleChange(e, 'lastName')}
									value={this.state.lastName}/> */}
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

