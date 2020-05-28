import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form, Button, Modal, Container } from 'semantic-ui-react'

import {addison_api_url} from '../Utilities/config';
import MonthlyPayrollTable from './MonthlyPayrollTable';

import axios from 'axios';



export default class PayRoll extends Component {

	constructor(props){
		super(props);
		this.state = {
			payrolls: [],
			is_fetching: true,
			start_date: "",
			end_date : "",
			open: false,
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		this.getPayrolls();
	}

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
	}
	
	close = () => this.setState({ open: false })

	getPayrolls = async () =>{
		let payroll_query = 
		`
			query{
				getAllPayrolls{
					_id
					start_date
					end_date
					total_pay
				}
			}
		`
		let payrolls_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: payroll_query
			}
		})

		console.log(payrolls_variable.data.data.getAllPayrolls);
		this.setState({payrolls: payrolls_variable.data.data.getAllPayrolls})
		this.setState({is_fetching: false});
	}

	createPayroll = async () =>{
		let payroll_mutation = 
		`
			mutation{
				createPayroll(
					start_date: "${this.state.start_date}"
					end_date: "${this.state.end_date}"
				){
					message
					success
				}
			}
		`

		await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: payroll_mutation
			}
		})
		
		this.close();
	}

	handleChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value});
	}


	render() {
		const {payrolls, is_fetching, open, closeOnEscape, closeOnDimmerClick} = this.state;
		const panes = [
			{
				menuItem: 'Monthly Payroll', render: () => 
					<Tab.Pane>
						<Form>
							<div className='EmpDetails'>
								<div className ='desc'>
									<i className="calendar alternate outline icon"/>
										Monthly Payroll
								</div>
							</div>

							<div>
								<MonthlyPayrollTable item={payrolls}/>
							</div>  

						</Form>
					</Tab.Pane>
			},
		]

		return (
			<div className="body">

					<div center className="payroll_buttons">
						<div>

						<h2>PayRoll</h2>
						</div>
					
						<div>
						<Button primary onClick={this.closeConfigShow(true, false)}> Create Payroll </Button>
						</div>
						<Modal
							open={open}
							closeOnEscape={closeOnEscape}
							closeOnDimmerClick={closeOnDimmerClick}
							onClose={this.close}
						>
							<Modal.Header>
							
							</Modal.Header>

							<Modal.Content>
								<Form>
									<Form.Field>
										<label>Start Date</label>
										<input onChange={this.handleChange} value={this.state.start_date} name="start_date" placeholder='Start Date' type="date"/>

										<label>End Date</label>
										<input onChange={this.handleChange} value={this.state.end_date} name="end_date" placeholder='End Date' type="date"/>
									</Form.Field>
								</Form>
							</Modal.Content>


							<Modal.Actions>
								<Button primary onClick={this.createPayroll}>
									Proceed 
								</Button>

								<Button negative onClick={this.close}>
									Cancel 
								</Button>
							</Modal.Actions>
							
						</Modal>

					</div>
			
				<div>
					<hr className="hr"/>
				</div>

				{
					is_fetching	?
					<div>Loading</div>
					:
					<div className='PayrollTabs'>    
						<Tab style={{width:'100%' }} menu={{ secondary: true, pointing: true }} panes={panes} />
					</div>
				}
			</div>
		)
	}
}


