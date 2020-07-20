import React, {Component} from 'react'



                         
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
					<th>Payslip Date</th>
					<th>Action</th>
				
				</tr>
                
			</thead>

			<tbody>
        {sessions_table}
			</tbody>

        </table>
        
    </div>        
    );
  }
}
export default Payslip_Page;

