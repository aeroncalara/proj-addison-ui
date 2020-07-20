// import React, {Component} from 'react'
// import './TimeLogs.css';



                         
// class TimeLogs extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       sessions: this.props.sessions,
//     }
//   }       


//   render() {

//     const {sessions} = this.state;
//     console.log(sessions);

//     const sessions_table = sessions.map((session, index) =>{
//       return(
//         <tr key={session._id}>
//           <td>{session.date}</td>
//           <td>{session.time_in}</td>
//           <td>{session.time_out}</td>
//         </tr> 
//       )
//     })
    
//     //here

//     return (
//       <div className="TimeLogsTables">
//         <table className="ui teal table celled">
        
// 			<thead>
// 				<tr>
// 					<th>Date</th>
// 					<th>Timed In</th>
// 					<th>Timed Out</th>
// 				</tr>
// 			</thead>

// 			<tbody>
//         {sessions_table}
// 			</tbody>

//         </table>
        
//     </div>        
//     );
//   }
// }
// export default TimeLogs;

import React, { component } from "react";
import dateFns from "date-fns";
import "./calendar.css";



    
    
                             
    class Calender extends Component {
    
      constructor(props){
        super(props)
        this.state = {
          sessions: this.props.sessions,
        }
      }       
    
    
      render() {
    
          return(
            <div className="calendar">
            <div>{header()}</div>        
            <div>{daysOfWeek()}</div>        
            <div>{cells()}</div>
            </div>
          )
    
    
    }
}
export default Calender;