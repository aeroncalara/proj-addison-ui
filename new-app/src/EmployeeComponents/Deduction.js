import React, { Component } from 'react'
import './DeductionList.js';
import './incentives.css';
import {Tab, Form ,Grid, Segment,Button, Modal} from 'semantic-ui-react'
import axios from 'axios';

import DeductionList from '../EmployeeComponents/DeductionList';
import {addison_api_url} from '../Utilities/config';

export default class Deduction extends Component {

	state = { open: false };

	constructor(props){
		super(props);
		this.state = {
			item: this.props.item,
			employee_id: this.props.employee_id,
			date_incurred: "",
			description: "",
			amount: "",
		}

		this.handleChange = this.handleChange.bind(this);
		this.addDeduction = this.addDeduction.bind(this);
	}

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
	  this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

	close = () => this.setState({ open: false })
	
	addDeduction = async () =>{
		let add_deduction_mutation = 
		`
			mutation{
				addDeductionToEmployee(
					employee_id: "${this.state.employee_id}"
					deduction_input: {
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
				query: add_deduction_mutation
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

	render() {
		const {open, closeOnEscape, closeOnDimmerClick, item} = this.state
		const panes = [
			{menuItem: 'Deduction list', render: () => 
				<Tab.Pane>
					<Form>
						<DeductionList item={item}/>
					</Form>
				</Tab.Pane>
			},	
		]

	return (
		<div>		
			

				<div className="addincentive">
					<Button primary onClick={this.closeConfigShow(true, false)}>

						Add Deduction
						
					</Button>
				</div>
		

		<Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
		  onClose={this.close}
		  basic
		  size='small'
        >

		<Modal.Header>Add Deduction</Modal.Header>
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
					onClick={this.addDeduction}
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


