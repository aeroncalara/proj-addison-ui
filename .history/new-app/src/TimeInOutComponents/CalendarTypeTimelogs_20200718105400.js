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

    let employeeTable = employees.map((employee, index) => {
    
    return (
       
        // <Grid columns={1}  key={index} padded>
            <Grid columns={1}  key={session._id} >
            
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
								<i className="user icon"/>
								{session.time_in}
							</List.Item>

							<List.Item>
								<i className="mobile icon"/>
								{employee.person.contact.mobile_number}
							</List.Item>
							
							<List.Item>
								<hr/>
							</List.Item>

							<div className="action">								
								<List horizontal>
									<List.Item>
										<ViewEmployee item={employee} />
									</List.Item>
								</List>		
							</div> 
								
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
        
            <Grid columns={6}>
                <Grid.Row> 
					{sessions_table}
                </Grid.Row> 
            </Grid>
            
        </div>
    );

}
}

export default EmployeeGrid;