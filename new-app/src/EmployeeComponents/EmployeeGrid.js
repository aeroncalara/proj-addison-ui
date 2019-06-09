import React, { Component } from 'react'
import './EmployeeHeader.css';
import {List, Grid,Image,Segment  } from 'semantic-ui-react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import TimeInOut from '../TimeInOutComponents/TimeInOut';

import axios from 'axios';        

let my_query = 
`
query
  {
    getAllEmployees
    {
      _id
      person
      {
        first
        middle
        last
        date_of_birth
        contact
        {
            type
            number
          }
        address
        {
          number
          street
          city
          province
          country
          
        }
      }
      position
      {
        title
      }
    }
  }
`


class EmployeeGrid extends Component 
{

    constructor(props){
        super(props);
        this.state = { 
          employees: [],
        }
      }
    
      componentDidMount(){
        this.getEmployees();
      }
    
      getEmployees = async () => {
        let employee_variable = await axios({
          url: `http://localhost:4000`,
          method: `post`,
          data: {
            query: my_query
          }
        })
    
        this.setState({ employees: employee_variable.data.data.getAllEmployees });
	  }
	  
	  state = { visible: true }
 		toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

render() {
    
    const employees = this.state.employees;
    let employeeTable = employees.map((employee, index) => {
    

    return (
       
    
        <Grid columns={1}  key={index} padded>
            
            <Grid.Row stretched>
            <Grid.Column> 

                    <Segment raised color='#f2f2f2'>
                                <List verticalAlign='middle'>

                                    <List.Item>
                                        <div className='gridImg'>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular />
                                        </div>
                                    </List.Item>
                                      
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
                                        {employee.person.contact[0].number}
                                    </List.Item>

									<List.Item>
                                        <hr/>
                                    </List.Item>

                                   
                                    <div className="action">
                                        <List divided horizontal inverted relaxed>
                                            <List.Item>
                                                <List.Content verticalAlign='top'><ViewEmployee item={employee}/></List.Content>
                                            </List.Item>
                                            <List.Item>
                                               
                                                <List.Content verticalAlign='middle'> <TimeInOut Employee={employee} /></List.Content>
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
        
            <Grid columns={4}>
                <Grid.Row> 

                    {employeeTable}
                </Grid.Row> 

            </Grid>
            
        </div>


 
    );

}
}
// ╔┓┏╦━━╦┓╔┓╔━━╗
// ║┗┛║┗━╣┃║┃║00║
// ║┏┓║┏━╣┗╣┗╣╰╯║
// ╚┛┗╩━━╩━╩━╩2019??﻿
export default EmployeeGrid;