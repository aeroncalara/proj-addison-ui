import React, { Component } from 'react'
import './CalendarTypeTimelogs.css'
import {List, Grid, Segment, Button, Rail, Icon, Table, Menu, Label, GridColumn} from 'semantic-ui-react'


class CalendarTypeTimelogs extends Component {

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
       
				<Grid celled columns={1}  key={index} padded key={session._id} className="schedules">
			
			
				<Grid.Row>
					<Grid.Column width={5}>
						
							<List verticalAlign='middle'>
								<List.Item className="date">
									<b>{session.date}</b>
									
										<hr/>
								</List.Item>
							</List>
	
							<List verticalAlign='middle'>
								<List.Item className="workSched">
									(work schedule)
								</List.Item>
							</List>

							<List verticalAlign="workTime">
								<List.Item>
									8:00am to 5:00pm
								</List.Item>
							</List>

							<List verticalAlign="workhrs">
								<List.Item>
									<b>9 hours</b>
								</List.Item>
							</List>
								 		
							<List horizontal>
								<List.Item className="TimeIN">
									{session.time_in} - {session.time_out}
								</List.Item>

							</List>

							<List horizontal>
							
								<List.Item className="Lunch">
									Lunch: 1 (hrs)
								</List.Item>

							</List>
					
				  
					   
				</Grid.Column>
			</Grid.Row>
			</Grid>
			
    )
    }
    )

    return (
    
        <div className="Attendance_table">
            <Grid columns={5} row={5} padded className="Days">
				<Grid.Row columns={5}>
					<Grid.Column>
						Monday
					</Grid.Column>
					<Grid.Column>
						Tuesday
					</Grid.Column>
					<Grid.Column>
						Wednesday
					</Grid.Column>
					<Grid.Column>
						Thursday
					</Grid.Column>
					<Grid.Column>
						Friday
					</Grid.Column>
				</Grid.Row>

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
	
export default CalendarTypeTimelogs;

