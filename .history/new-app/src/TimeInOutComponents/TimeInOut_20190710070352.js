import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './TimeInOut.css';
import {addison_api_url} from '../Utilities/config'
import axios from 'axios';

export default class extends Component {



constructor(props){
		super(props)
		this.state = {
			item: this.props.item,
			isEdit: false,	
			time: new Date().toLocaleString()
	
		}
	}

	timeInOutEmployee= async () =>{
		let time_in_mutation = 
		`
			mutation{
				timeInEmployee(employee_id:"${this.state.item}")
				{
				message
				success
				}
			}

		`
		let time_out_mutation =
		`
		mutation{
			timeOutEmployee(employee_id:"${this.state.item}")
			{
			message
			success
			}
		}

		`

		this.handleClose()
		
		console.log(this.state.isEdit);

		if(this.state.isEdit===false){

			await axios({
				url: addison_api_url,
				method: `post`,
				data: {
					query: time_in_mutation
				}
			}).then(result =>{
				console.log(result);
			})

		}else{

			await axios({
				url: addison_api_url,
				method: `post`,
				data: {
					query: time_out_mutation
				}
			})
		}		
	}



state = { 
modalOpen: false,
isEdit: false 
}

handleOpen = () => this.setState({ modalOpen: true })

handleClose = () => {
	let status = this.state.isEdit;
	this.setState({ isEdit: !status });
	this.setState({ modalOpen: false })
	this.setState(prevState => ({ active: !prevState.active }))
}

render() {

	console.log(this.state.item)
	const { active } = this.state
return (
	<Modal


	trigger={  
		<Button className="ui button blue " color={active ?'red':null} onClick={this.handleOpen}>{this.state.isEdit !== true? "Time In":"Time Out"} </Button>
		
	
}
	open={this.state.modalOpen}
	onClose={this.handleClose}
	size='small'
	>
	<Header icon='check' content='Successfully'  />
	{this.state.isEdit !== true? "Timed In":"Timed Out"}
	<div className="timeText">
		<Modal.Content>
		<h3>{this.state.isEdit !== true? "Timed In":"Timed Out"}
		{this.state.time}
		</h3>
		
		</Modal.Content>
	</div>
	<Modal.Actions>

		<Button color='green' onClick={this.timeInOutEmployee}inverted>
		
			<Icon name='checkmark' />
			OK
		</Button>
	</Modal.Actions>
	</Modal>
)
}
}
