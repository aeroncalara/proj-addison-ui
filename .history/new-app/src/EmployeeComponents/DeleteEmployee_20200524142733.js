import React, { Component } from 'react'
import {addison_api_url} from '../Utilities/config'

import { Button, Header, Icon, Modal,Popup } from 'semantic-ui-react'

import axios from 'axios';
import { NavLink} from 'react-router-dom';

export default class extends Component {

	constructor(props){
		super(props)
		this.state = {
			item: this.props.item,
		
		}
		this.getTerminateEmployees = this.getTerminateEmployees.bind(this);
	}

	getTerminateEmployees = async () =>{
		let my_terminated_mutation = 
		`
		mutation{
			terminateEmployee(employee_id:"${this.state.item}"){
			}
			message
		  }
		`
		await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: my_terminated_mutation
			}
		})
		//this.setState({terminateEmployee: my_terminated_mutation.data.data.getTerminateEmployees})
	}



state = { modalOpen: false }

handleOpen = () => this.setState({ modalOpen: true })

handleClose = () => this.setState({ modalOpen: false })

render() {
	return (
		<Modal
			trigger={ <Popup
				trigger={<Button className="ui button negative " onClick={this.handleOpen}>Terminate</Button>}
				content='Terminate Employee'
				position='top center'
			/>}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				size='small'
			>

				<Header icon='remove user' content='Archive Employee:' />
				
				<Modal.Content>
					<h3>Are you sure you want to Terminate Employee?</h3>
				</Modal.Content>
			
				<Modal.Actions>
					
					<Button color='red' onClick={this.handleClose} inverted>
						<Icon name='x' /> 
						No
						
					</Button>

					<NavLink exact to="/EmployeeMain">
						<Button
							onClick={this.handleClose}
							positive
							labelPosition="right"
							icon="checkmark"
							content="Yes"
						/>
					</NavLink>
			
				</Modal.Actions>

		</Modal>
	)
}
}
