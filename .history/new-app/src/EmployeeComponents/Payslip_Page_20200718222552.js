import React, {Component} from 'react'
import './TimeLogs.css';



                         
class Payslip_Page extends Component {

  constructor(props){
    super(props)
    this.state = {
      sessions: this.props.sessions,
    }
  }       


  render() {

    const {sessions} = this.state;
    console.log(sessions);

    const sessions_table = sessions.map((session, index) =>{
      return(
        <tr key={session._id}>
          <td>{session.date}</td>
          <td>{session.time_in}</td>
        </tr> 
      )
    })
    
    //here

    return (
      <div className="TimeLogsTables">
        <table className="ui teal table celled">
        
			<thead>
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

