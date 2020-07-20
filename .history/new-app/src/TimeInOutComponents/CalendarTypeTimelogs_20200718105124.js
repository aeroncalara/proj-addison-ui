import React, { Component } from 'react'

import {List, Grid,Image,Segment, Button} from 'semantic-ui-react'


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
            <Grid columns={1}  key={index} >
            
            <Grid.Row>
            	<Grid.Column> 

                    <Segment raised color='#f2f2f2'>
						<List verticalAlign='middle'>

						
							<List.Item>
								<div className='name'>
								{employee.person.first}
								</div>
							</List.Item>

						</List>
					
						<List verticalAlign='left'>
							<List.Item>
								<i className="user icon"/>
								{employee.position.title}
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
                    {employeeTable}
                </Grid.Row> 
            </Grid>
            
        </div>
    );

}
}

export default EmployeeGrid;