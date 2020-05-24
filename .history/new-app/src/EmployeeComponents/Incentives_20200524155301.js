import React, { Component } from 'react'
import './IncentivesList.js';
import './incentives.css';
import {Tab, Form ,Grid, Segment,Button, Modal} from 'semantic-ui-react'
import axios from 'axios';
import {addison_api_url} from '../Utilities/config'
import IncentivesList from '../EmployeeComponents/IncentivesList';

export default class Incentives extends Component {

	constructor(props){
		super(props)
		this.state = {
			item: this.props.item,
			employee_id: this.props.employee_id,
			date_incurred: "",
			description: "",
			amount: "",
		}

		this.addIncentive = this.addIncentive.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	state = { open: false }

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
		this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
	}

	addIncentive = async () =>{
		let add_incentive_mutation = 
		`
			mutation{
				addIncentiveToEmployee(
					employee_id: "${this.state.employee_id}"
					incentive_input: {
						date_incurred: "${this.state.date_incurred}"
						description: "${this.state.description}"
						amount: ${this.state.amount}
					}
				){
					success
					message
				}
			}
		`
		await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: add_incentive_mutation
			}
		})

		this.close()
	}

	handleChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({[name]: value});
	}

  	close = () => this.setState({ open: false })

render() {

	const { open, closeOnEscape, closeOnDimmerClick, item } = this.state
	console.log(this.state.employee_id);
	const panes = [
		
		{menuItem: 'Incentives list', render: () => 
			<Tab.Pane>
				<Form>
					<IncentivesList item = {item}/>
				</Form>
			</Tab.Pane>
		},	
	]

	return (
		<div>		
			
			<div className="addincentive">
				<Button primary onClick={this.closeConfigShow(true, false)}>Add Incentives</Button>
			</div>
		

		<Modal
          open={open}c
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
		  onClose={this.close}
		  size='small'
        >

		<Modal.Header>Add Incentives</Modal.Header>
			<Modal.Content>
				<Form inverted>
					<Grid>
						<Grid.Column width={11}>
							<Segment raised inverted>

								<Form.Group widths="equal">
									<Form.Input onChange={this.handleChange} value={this.state.amount} name="amount" fluid label="Amount" placeholder="Amount" />
									<Form.Input onChange={this.handleChange} value={this.state.date_incurred} name="date_incurred" fluid type="date" label="Date Given" placeholder="Date Given" />
								</Form.Group>

									<Form.TextArea onChange={this.handleChange} value={this.state.description} name="description" label="Description" placeholder="Description" />
							</Segment>
						</Grid.Column>
					</Grid>		
				</Form>
			</Modal.Content>

			<Modal.Actions>
				<Button onClick={this.close} negative>
					cancel
				</Button>

					<Button
					onClick={this.addIncentive}
					positive
					labelPosition='right'
					icon='checkmark'
					content='Submit'
					/>
          	</Modal.Actions>
        </Modal>

		<div className='IncentivesTabs'>    
			<Tab style={{width:'75%' }} menu={{ secondary: true, pointing: true }} panes={panes} />
		</div>

	</div>
	)
}
}


