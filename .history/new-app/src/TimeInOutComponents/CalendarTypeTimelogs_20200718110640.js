import React, { Component } from 'react'

import {List, Grid, Segment} from 'semantic-ui-react'


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
       
        // <Grid columns={1}  key={index} padded>
            <Grid  key={session._id} >
            
            <Grid.Row>
            	<Grid.Column> 

                    <Segment raised color='#f2f2f2'>
						<List verticalAlign='middle'>

						
							<List.Item>
								<div className='name'>
								{session.date}
								</div>
							</List.Item>

						</List>
					
						<List verticalAlign='left'>
							<List.Item>
								
								{session.time_in} to {session.time_out}
							</List.Item>

							{/* <List.Item>
							
								{session.time_out}
							</List.Item>
							 */}
							<List.Item>
								<hr/>
							</List.Item>

						
								
						</List>
					</Segment>
              
                   
                </Grid.Column>
            </Grid.Row>
        </Grid>
    
    )
    }
    )

    return (
    
        <div className ='employeeGrid'>
        
            <Grid columns={7}>
                <Grid.Row> 
					{sessions_table}
                </Grid.Row> 
            </Grid>
            
        </div>
    );

}
}

export default EmployeeGrid;