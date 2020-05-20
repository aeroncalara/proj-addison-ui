import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form, Button, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios';

import {addison_api_url} from '../Utilities/config';


import MonthlyPayrollTable from './MonthlyPayrollTable';


export default class PayRoll extends Component {

	constructor(props){
		super(props);
		this.state = {
			payrolls: [],
			is_fetching: true,
			release_date: "",
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
					release_date
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
		this.setState({payrolls: payrolls_variable.data.data.getAllPayrolls})
		this.setState({is_fetching: false});
	}

	createPayroll = async () =>{
		let payroll_mutation = 
		`
			mutation{
				createPayroll(
					release_date: "${this.state.release_date}"
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
			<div>
				<div className='Payrollhead'>
					<div className ='payTitle'>
						<List horizontal size='massive'>
							<List.Item><i className="money bill alternate outline icon"/>PayRolls</List.Item>
						</List>
					</div>
				</div>

				<div>
					<hr className="hr"/>
				</div>

				<div className="payrollbutton">
					<Button primary onClick={this.closeConfigShow(true, false)}>Create Payroll</Button>
					<Modal
						open={open}
						closeOnEscape={closeOnEscape}
						closeOnDimmerClick={closeOnDimmerClick}
						onClose={this.close}
					>
						<Modal.Header>	
							<div className='EmpDetails'>
								<div className ='desc'>
									<i className="money bill alternate outline icon"/>Create Payroll
								</div>
							</div>
						</Modal.Header>

						<Modal.Content image scrolling>
							
							<Form>
								<Form.Field>
									<label>Release Date</label>
									<input onChange={this.handleChange} value={this.state.release_date} name="release_date" placeholder='Release date' type="date"/>
								</Form.Field>
								<Button onClick={this.createPayroll} type="submit">Submit</Button>
							</Form>


						</Modal.Content>

						<Modal.Actions>

						
							<Button primary onClick={this.close}>
								Proceed 
							</Button>
							
						</Modal.Actions>
					</Modal>
				</div>
				
				{
					is_fetching?
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


