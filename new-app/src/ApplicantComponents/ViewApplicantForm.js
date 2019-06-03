import React, { Component } from 'react'
import { Header, Image,Form } from 'semantic-ui-react'
export default class ViewApplicantForm extends Component {


render() {
	return (
		<div>
			<Header as='h2'>
				<Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />  {this.props.Employee.person.first}
			</Header>

			<Form>
				<span>Account Details</span>
					<Form.Group unstackable widths={2}>
						<Form.Input label='First name' placeholder='First name' readOnly={this.props.isEdit!==true?"readonly":"" } 
						value = {this.props.Employee.person.first}/>
						
						<Form.Input label='Middle name' placeholder='Middle Name' readOnly={this.props.isEdit!==true?"readonly":"" } 
						value = {this.props.Employee.person.middle}/>

						<Form.Input label='Last Name' placeholder='Last Name' readOnly={this.props.isEdit!==true?"readonly":"" } 
						value = {this.props.Employee.person.last}/>
					</Form.Group>
				<hr></hr>

				<span>Contact Information</span>
					<Form.Group widths={2}>
						<Form.Input label='Birthdate (mm-dd-yyyy)' placeholder='Birthdate (01-22-1998)' readOnly ={this.props.isEdit!==true?"readonly":"" } value = {this.props.Employee.person.date_of_birth} />

							<Form.Field label='Type' control='select' disabled={this.props.isEdit!==true?"enabled":""}>
								<option value='mobile'>Mobile</option>
								<option value='landline'>Landline</option>
							</Form.Field>

						<Form.Input label='Number' placeholder='Number' readOnly ={this.props.isEdit!==true?"readonly":"" } value = {this.props.Employee.person.address.number}/>
					</Form.Group>
				<hr></hr>

				<span>Position</span>
					<Form.Group widths={3}>
						<Form.Input label='Title' placeholder='Title' readOnly ={this.props.isEdit!==true?"readonly":"" }/>
						<Form.Input label='Description' placeholder='Description'readOnly={this.props.isEdit!==true?"readonly":"" } />
						<Form.Input label='Salary' placeholder='Salary' readOnly={this.props.isEdit!==true?"readonly":"" }/>
					</Form.Group>
				<hr></hr>

				<span>Account Details</span>
					<Form.Group widths={3}>
						<Form.Input label='TIN#' placeholder='TIN#' readOnly={this.props.isEdit!==true?"readonly":"" }/>
						<Form.Input label='SSS#' placeholder='SSS#' readOnly={this.props.isEdit!==true?"readonly":"" }/>
						<Form.Input label='PHILHEALTH#' placeholder='PHILHEALTH' readOnly={this.props.isEdit!==true?"readonly":"" }/>
						<Form.Input label='HDMF#' placeholder='HDMF#' readOnly={this.props.isEdit!==true?"readonly":"" }/>
					</Form.Group>  
			</Form>
		</div>
	)
}
}
