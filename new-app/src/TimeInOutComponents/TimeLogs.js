import React, {Component} from 'react'
import './TimeLogs.css';



                         
class TimeLogs extends Component {

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
          <td>{session.time_in}</td>
          <td>{session.time_in}</td>
          <td>{session.time_out}</td>
        </tr> 
      )
    })
    
    //here

    return (
      <div className="TimeLogsTables">
        <table className="ui teal table celled">
        
			<thead>
				<tr>
					<th>Date</th>
					<th>Timed In</th>
					<th>Timed Out</th>
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
export default TimeLogs;