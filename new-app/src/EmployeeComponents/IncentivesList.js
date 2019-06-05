import React, {Component} from 'react'
import './Incentives';
import './incentives.css';
import axios from 'axios';        
import ViewInsentives from '../EmployeeComponents/ViewInsentives';


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
      incentives: [],
    }
  }

  componentDidMount(){
    this.getAllIncentivesOfEmployee();
  }

  getAllIncentivesOfEmployee= async () => {
    let incentives_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ incentives: incentives_variable.data.data.getAllIncentivesOfEmployee });
  }
  render() {

  
    const incentives = this.state.incentives;
    console.log(incentives);
    
    let incentivesTable = incentives.map((incentive, index) => {
      return (
        
            <tr key={incentive.id}>
                <td data-label="Date Incured"> 
                 	{incentive.date_incurred}
              	</td>

                <td data-label="Total">
					      {incentive.amount}
			        	</td>    

                <td data-label="Age">
                    <ViewInsentives/>
                </td>   
            </tr> 
       
      )
    }
    )
    //here

    return (
      
      

    <div className="IncentivesTables">
        <table className="ui teal table celled" width="50">
        
        <thead>
              <tr>
				         <th>DATE</th>
              		<th>Total</th>
                  <th>Action</th>
            
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