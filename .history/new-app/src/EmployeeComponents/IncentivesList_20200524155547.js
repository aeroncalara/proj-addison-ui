import React, {Component} from 'react'
import './Incentives';
import './incentives.css';


                             
class Incentives extends Component {

  constructor(props){
    super(props);
    this.state = { 
	  item: this.props.item,
    }
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