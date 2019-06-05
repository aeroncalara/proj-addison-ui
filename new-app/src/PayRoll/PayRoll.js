import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form , Button } from 'semantic-ui-react'
import axios from 'axios';

import {addison_api_url} from '../Utilities/config';


import MonthlyPayrollTable from './MonthlyPayrollTable';


export default class PayRoll extends Component {

	constructor(props){
		super(props);
		this.state = {
			payrolls: [],
			is_fetching: true,
		}
	}

	componentDidMount(){
		this.getPayrolls();
	}

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

	render() {

		const {payrolls, is_fetching} = this.state;
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
							<List.Item><i className="money bill alternate outline icon"/>PayRoll</List.Item>
						</List>
					</div>
				</div>

				<div>
					<hr className="hr"/>
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


