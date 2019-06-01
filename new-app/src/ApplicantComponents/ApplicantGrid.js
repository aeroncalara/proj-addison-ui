import React, { Component } from 'react'
import './ApplicantHeader.css';
import {List, Grid,Image,Segment,  } from 'semantic-ui-react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';
import TimeInOut from '../TimeInOutComponents/TimeInOut';

import axios from 'axios';        
import HIre from './HIre';

let my_query = 
`
query
  {
    getAllapplicants
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


class applicantGrid extends Component 
{

    constructor(props){
        super(props);
        this.state = { 
          applicants: [],
        }
      }
    
      componentDidMount(){
        this.getapplicants();
      }
    
      getapplicants = async () => {
        let applicant_variable = await axios({
          url: `http://localhost:4000`,
          method: `post`,
          data: {
            query: my_query
          }
        })
    
        this.setState({ applicants: applicant_variable.data.data.getAllapplicants });
	  }
	  
	  state = { visible: true }
 		toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

render() {
    
    const applicants = this.state.applicants;
    
    let applicantTable = applicants.map((applicant, index) => {
    

    return (
       
    
        <Grid columns='equal'  key={index} columns={1} padded>
            
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
                                        {applicant.person.first}
                                        </div>
                                    </List.Item>

                                </List>
                            
                                <List verticalAlign='left'>

                                    <List.Item>
                                        <i className="user icon"/>
                                        {applicant.position.title}
                                    </List.Item>

                                    <List.Item>
                                        <i className="mobile icon"/>
                                        {applicant.person.contact[0].number}
                                    </List.Item>

									<List.Item>
                                        <hr/>
                                    </List.Item>

                                   
                                    <div className="action">
                                        <List divided horizontal inverted relaxed>
                                            <List.Item>
                                                <List.Content verticalAlign='top'><ViewApplicant item={applicant}/></List.Content>
                                            </List.Item>
                                            <List.Item>
                                               
                                                <List.Content verticalAlign='middle'> <HIre applicant={applicant} /></List.Content>
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
    
        <div>
        
            <Grid columns={4}>
                <Grid.Row> 

                    {applicantTable}

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
export default applicantGrid;