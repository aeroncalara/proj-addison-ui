import React, {Component} from 'react'
import './Incentives';
import './incentives.css';
import axios from 'axios';        
import ViewIncentives from '../EmployeeComponents/ViewIncentives';


let my_query = 
`
query{
  getAllIncentivesOfEmployee{
    date_incurred
    description
    amount
    is_active
  }
}
`


                             
class Incentives extends Component {

  constructor(props){
    super(props);
    this.state = { 
	  item: this.props.item,
    }
  }

  componentDidMount(){
  }

  
  render() {

    const {item} = this.state;
        
    let incentivesTable = item.map((incentive, index) => {
      return (
            <tr key={incentive.id}>
                <td data-label="Date Incurred"> 
                 	{incentive.date_incurred}
              	</td>

				<td data-label="Description">
					{incentive.description}
				</td> 

                <td data-label="Amount">
					{incentive.amount}
			    </td>    
            </tr> 
		)
	})
    
    return(
    	<div className="IncentivesTables">
			<table className="ui teal table celled" width="50">
				<thead>
					<tr>
						<th>DATE</th>
						<th>DESCRIPTION</th>
						<th>AMOUNT</th>
					</tr>
				</thead>
				<tbody>
					{incentivesTable}
				</tbody>
			</table>
        
    	</div>        
    );
  }
}
export default Incentives;