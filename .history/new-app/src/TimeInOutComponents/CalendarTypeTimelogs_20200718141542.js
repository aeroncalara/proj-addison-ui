// import React, { Component } from 'react'

// import {List, Grid, Segment} from 'semantic-ui-react'


// class EmployeeGrid extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       sessions: this.props.sessions,
//     }
//   }       
	

// render() {
//   const {sessions} = this.state;
//   console.log(sessions);

//   const sessions_table = sessions.map((session, index) =>{
//     return (
       
//         // <Grid columns={1}  key={index} padded>
//             <Grid key={session._id} >
            
//             <Grid.Row>
//             	<Grid.Column> 

//                     <Segment raised color='#f2f2f2'>
// 						<List verticalAlign='middle'>

						
// 							<List.Item>
// 								<div className='name'>
// 									{session.date}
// 								</div>
// 							</List.Item>

// 						</List>

// 						<List.Item>
// 							8:00am to 5:00pm
// 						</List.Item>

// 						<List.Item>
// 							9 hours
// 						</List.Item>
							 
					
// 						<List verticalAlign='left'>
// 							<List.Item>
								
// 								{session.time_in} to {session.time_out}
// 							</List.Item>

// 							{/* <List.Item>
							
// 								{session.time_out}
// 							</List.Item>
// 							 */}
// 							<List.Item>
// 								<hr/>
// 							</List.Item>

						
								
// 						</List>
// 					</Segment>
              
                   
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid>
    
//     )
//     }
//     )

//     return (
    
//         <div className ='employeeGrid'>
        
//             <Grid columns={7}>
//                 <Grid.Row> 
// 					{sessions_table}
//                 </Grid.Row> 
//             </Grid>
            
//         </div>
//     );

// }
// }

// export default EmployeeGrid;
import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import {Button ,Header, Segment} from 'semantic-ui-react'


// const Frame = styled.div`
//   width: 400px;
//   border: 1px solid lightgrey;
//   box-shadow: 2px 2px 2px #eee;
// `;

// const Header = styled.div`
//   font-size: 18px;
//   font-weight: bold;
//   padding: 10px 10px 5px 10px;
//   display: flex;
//   justify-content: space-between;
//   background-color: #f5f6fa;
// `;

// const Button = styled.div`
//   cursor: pointer;
// `;

// const Body = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Day = styled.div`
//   width: 14.2%;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   ${props =>
//     props.isToday &&
//     css`
//       border: 1px solid #eee;
//     `}

//   ${props =>
//     props.isSelected &&
//     css`
//       background-color: #eee;
//     `}
// `;

export function CalendarTypeTimelogs() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: Number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <Segment>
      <Header>
        
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
      </Header>

      <body>
        {DAYS_OF_THE_WEEK.map(d => (
          <div key={d}>
            <strong>{d}</strong>
          </div>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <div
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </div>
            );
          })}
      </body>
    </Segment>
  );
}
export default CalendarTypeTimelogs;