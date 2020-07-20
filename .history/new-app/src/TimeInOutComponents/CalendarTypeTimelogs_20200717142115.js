// import React, { Component } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
 
// class TimeLogs extends Component {
//   state = {
//     date: new Date(),
//   }
 
//   onChange = date => this.setState({ date })
 
//   render() {
//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
//     );
//   }
// }
// export default TimeLogs;


//trying calendar from scratch

import React from "react";

export default class CalendarTypeTimelogs extends React.Component {
  render() {
    return (
      <div>
        <h2>Calendar</h2>
      </div>
    );
  }
}