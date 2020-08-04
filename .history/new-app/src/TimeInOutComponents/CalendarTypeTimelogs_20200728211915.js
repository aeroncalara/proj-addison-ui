import React, { Component } from 'react'

import {List, Grid, Segment, Button, Rail, Icon, Table, Menu, Label} from 'semantic-ui-react'


class EmployeeGrid extends Component {

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
    return (
       
        // // <Grid columns={1}  key={index} padded>
        //     <Grid key={session._id} >
            
        //     <Grid.Row>
        //     	<Grid.Column> 

        //             <Segment raised color='#f2f2f2'>
		// 				<List verticalAlign='middle'>

						
		// 					<List.Item>
		// 						<div className='name'>
		// 							{session.date}
		// 						</div>
		// 					</List.Item>

		// 				</List>

		// 				<List.Item>
		// 					8:00am to 5:00pm
		// 				</List.Item>

		// 				<List.Item>
		// 					9 hours
		// 				</List.Item>
							 
					
		// 				<List verticalAlign='left'>
		// 					<List.Item>
								
		// 						{session.time_in} to {session.time_out}
		// 					</List.Item>

		// 					{/* <List.Item>
							
		// 						{session.time_out}
		// 					</List.Item>
		// 					 */}
		// 					<List.Item>
		// 						<hr/>
		// 					</List.Item>

						
								
		// 				</List>
		// 			</Segment>
              
                   
        //         </Grid.Column>
        //     </Grid.Row>
		// </Grid>
		
				// <Grid columns={1}  key={index} padded>
			
				// <Grid key={session._id} >
            
				// <Grid.Row>
				// 	<Grid.Column> 
						// <Segment raised color='#f2f2f2'>
						<div>
							<Segment>
							<List verticalAlign='middle'>
								<List.Item>
									<div className='name'>
										{session.date}
									</div>
								</List.Item>
							</List>
	
							<List.Item>
								8:00am to 5:00pm
							</List.Item>
	
							<List.Item>
								9 hours
							</List.Item>
								 		
							<List verticalAlign='left'>
								<List.Item>
									{session.time_in} to {session.time_out}
								</List.Item>
								
								<List.Item>
									<hr/>
								</List.Item>
							</List>
						</Segment>
					</div>
				  
					   
			// 		</Grid.Column>
			// 	</Grid.Row>
			// </Grid> 
			// </Grid> 
		

	
		
    
    )
    }
    )

    return (
    
        <div className ='employeeGrid'>
        
            <Grid columns={7} row={5}>
                <Grid.Row> 
					{sessions_table}
                </Grid.Row> 
            </Grid>
            
			
	<Table>
	

    <Table.Footer>
      	<Table.Row>
     		<Table.HeaderCell colSpan="3">
				<Menu floated="right" pagination>
					<Menu.Item as="a" icon>
						<Icon name="chevron left" />
						Prev
						</Menu.Item>
					<Menu.Item as="a" icon>
						Next
						<Icon name="chevron right" />
					</Menu.Item>
          		</Menu>
        	</Table.HeaderCell>
    	</Table.Row>
    </Table.Footer>
  	</Table>
			
        </div>
    );

}
}
	
export default EmployeeGrid;

