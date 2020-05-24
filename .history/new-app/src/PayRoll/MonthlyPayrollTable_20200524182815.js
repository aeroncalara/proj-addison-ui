import React, {Component} from 'react'
import {List} from 'semantic-ui-react';
import ViewPayRoll from './ViewPayRoll';
import './PayRollTable.css';
	

class MonthlyPayrollTable extends Component {

	constructor(props){
		super(props);
		this.state = { 
			item: this.props.item
		}
	}

	render() {
		const {item} = this.state;
		let payroll_table = item.map((payroll, index) => {
			return (
				<tr key={payroll._id}>
					<td data-label="Release date"> 
						{payroll.start_date} - {payroll.end_date}
					</td>
					<td data-label="Total pay">
						{payroll.total_pay}
					</td>
					<td data-label="Action">
						<List horizontal>
							<List.Item>
								<ViewPayRoll item = {payroll._id}/>	
							</List.Item>
						</List>
					</td>
				</tr> 
			)
		})
		//here
		return (
		
			<div className="PayrollTables">
				<table className="ui teal table celled">
				<thead>
					<tr>
						<th>DATE INTERVAL</th>
						<th>TOTAL PAY</th>
						<th>ACTIONS</th>
					</tr>
				</thead>

				<tbody>
					{payroll_table}
				</tbody>
				</table>
			</div>        
		);
	}
}
export default MonthlyPayrollTable;