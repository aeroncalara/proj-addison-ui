import React, {Component} from 'react'
import './Deduction';
import './incentives.css';

                                 
class Deduction extends Component {

	constructor(props){
		super(props);
		this.state = { 
		item: this.props.item
		}
	}
  
  	render() {
    
		const {item} = this.state;
		console.log(item);
			
		let deductions_table = item.map((deduction, index) => {
		return (
				<tr key={deduction.id}>
					<td data-label="Date Incurred"> 
						{deduction.date_incurred}
					</td>

					<td data-label="Description">
						{deduction.description}
					</td> 

					<td data-label="Amount">
						{deduction.amount}
					</td>    
				</tr> 
			)
		})
	
    return (

		<div className="decTables">
			<table className="ui teal table celled" >
				<thead>
					<tr>
						<th>DATE</th>
						<th>DESCRIPTION</th>
						<th>AMOUNT</th>
										
					</tr>
				</thead>
				<tbody>
					{deductions_table}
				</tbody>
			</table>
		</div>        
    );
  }
}
export default Deduction;