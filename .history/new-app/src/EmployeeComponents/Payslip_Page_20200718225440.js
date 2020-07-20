import React, {Component} from 'react'
import PayslipReport from './PayslipReport';


                         
class Payslip_Page extends Component {


  render() {
    return (
      <div className="TimeLogsTables">
        <table className="ui teal table celled">
        
			<thead>
				<tr>
					<th>Payslip Date</th>
					<th>Action</th>
				</tr>

                <tr>
					<th>sample date</th>
					<th>
                     <PayslipReport item={this.state.employee}/>
                    </th>
				
				</tr>

			</thead>

		

        </table>
        
    </div>        
    );
  }
}
export default Payslip_Page;

