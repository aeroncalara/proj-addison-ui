// import React, { Component } from 'react'

// import {List, Grid, Segment, Button, Icon, Table, Menu} from 'semantic-ui-react'


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
       
//         // // <Grid columns={1}  key={index} padded>
//         //     <Grid key={session._id} >
            
//         //     <Grid.Row>
//         //     	<Grid.Column> 

//         //             <Segment raised color='#f2f2f2'>
// 		// 				<List verticalAlign='middle'>

						
// 		// 					<List.Item>
// 		// 						<div className='name'>
// 		// 							{session.date}
// 		// 						</div>
// 		// 					</List.Item>

// 		// 				</List>

// 		// 				<List.Item>
// 		// 					8:00am to 5:00pm
// 		// 				</List.Item>

// 		// 				<List.Item>
// 		// 					9 hours
// 		// 				</List.Item>
							 
					
// 		// 				<List verticalAlign='left'>
// 		// 					<List.Item>
								
// 		// 						{session.time_in} to {session.time_out}
// 		// 					</List.Item>

// 		// 					{/* <List.Item>
							
// 		// 						{session.time_out}
// 		// 					</List.Item>
// 		// 					 */}
// 		// 					<List.Item>
// 		// 						<hr/>
// 		// 					</List.Item>

						
								
// 		// 				</List>
// 		// 			</Segment>
              
                   
//         //         </Grid.Column>
//         //     </Grid.Row>
// 		// </Grid>
		
// 				// <Grid columns={1}  key={index} padded>
// 				<Table celled key={session._id}>
// 				<Table.Body>
		
// 						<Table.Row>
// 				{/* <Grid key={session._id} >
            
// 				<Grid.Row>
// 					<Grid.Column> 
// 	 */}
// 						<Segment raised color='#f2f2f2'>
// 							<List verticalAlign='middle'>
// 								<List.Item>
// 									<div className='name'>
// 										{session.date}
// 									</div>
// 								</List.Item>
// 							</List>
	
// 							<List.Item>
// 								8:00am to 5:00pm
// 							</List.Item>
	
// 							<List.Item>
// 								9 hours
// 							</List.Item>
								 		
// 							<List verticalAlign='left'>
// 								<List.Item>
// 									{session.time_in} to {session.time_out}
// 								</List.Item>
								
// 								<List.Item>
// 									<hr/>
// 								</List.Item>
// 							</List>
// 						</Segment>
				  
					   
// 					{/* </Grid.Column>
// 				</Grid.Row>
// 			</Grid> */}
// 		</Table.Row>
		
//     </Table.Body>
// 	</Table>

			
		
    
//     )
//     }
//     )

//     return (
    
//         <div className ='employeeGrid'>
        
//             {/* <Grid columns={7}>
//                 <Grid.Row> 
// 					{sessions_table}
//                 </Grid.Row> 
//             </Grid> */}
            
			
// 	<Table>
// 	<Table.Body>
// 		<Table.Row>
// 			<Table.Cell>{sessions_table}</Table.Cell>
			
// 		</Table.Row>
// 	</Table.Body>

//     <Table.Footer>
//       	<Table.Row>
//      		<Table.HeaderCell colSpan="3">
// 				<Menu floated="right" pagination>
// 					<Menu.Item as="a" icon>
// 						<Icon name="chevron left" />
// 						Prev
// 						</Menu.Item>
// 					<Menu.Item as="a" icon>
// 						Next
// 						<Icon name="chevron right" />
// 					</Menu.Item>
//           		</Menu>
//         	</Table.HeaderCell>
//     	</Table.Row>
//     </Table.Footer>
//   	</Table>
			
//         </div>
//     );

// }
// }

// export default EmployeeGrid;

import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


import { generateRows } from '../../../demo-data/generator';

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <PagingState
          defaultCurrentPage={0}
          pageSize={5}
        />
        {/* <IntegratedPaging />
        <Table />
        <TableHeaderRow />
        <PagingPanel /> */}
      </Grid>
    </Paper>
  );
};
