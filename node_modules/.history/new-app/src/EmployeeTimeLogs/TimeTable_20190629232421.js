import React, {Component} from 'react'

									
class PayRollTable extends Component {
	constructor(props){
		super(props);
		this.state = { 
			item: this.props.item,
		}
	}

	render() {

		const {item} = this.state;
		let payroll_entities = item.entities.map((entity, index) => {
			return (
				<tr key={entity.employee_id}>

					<td data-label="Name">
						{entity.employee_name}
					</td>

					<td data-label="Salary">
						{entity.base_salary}
					</td>

					<td>
						{entity.deductions.length === 0?
								<i>n/a</i>
							:
							entity.deductions.map(deduction => {
								return (
									<ul key={deduction.description}>
										<li>DESCRIPTION: {deduction.description}</li>
										<li>AMOUNT: {deduction.amount}</li>
										<li>DATE INCURRED: {deduction.date_incurred}</li>
									</ul>
								)
							})	
						}
					</td>

					<td>
					{entity.incentives.length === 0?
								<i>n/a</i>
							:
						
							entity.incentives.map(incentive => {
								return (
									<ul key = {incentive._id}>
										<li>DESCRIPTION: {incentive.description}</li>
										<li>AMOUNT: {incentive.amount}</li>
										<li>DATE INCURRED: {incentive.date_incurred}</li>
									</ul>
								)
							})	
						}
					</td>

					<td>
						{entity.total_pay}
					</td>
				</tr>
			)
		})
		
		return (
			<div className="PayrollTables">

			<table className="ui teal table celled">
			
			<thead>
							
				<tr>
					<th>Employee</th>
					<th>Base Salary</th>
					<th>Deduction</th>
					<th>Incentive</th>
					<th>Total</th>
				</tr>
				
				</thead>
				<tbody>
					{payroll_entities}
				</tbody>
				
			</table>
			

			</div>        
		);
	}
}

export default PayRollTable;