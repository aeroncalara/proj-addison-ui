import React, {Component} from 'react'
import ViewTimelogs from './ViewTimeLogs';


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
						{payroll.release_date}
					</td>
					<td data-label="Total pay">
						{payroll.total_pay}
					</td>
					<td data-label="Age">
						<ViewTimelogs item = {payroll._id}/>
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
						<th>DATE</th>
						<th>TOTAL PAY</th>
						<th>Action</th>
					
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