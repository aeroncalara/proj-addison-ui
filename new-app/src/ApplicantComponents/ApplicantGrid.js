import React, { Component } from 'react'
import './ApplicantHeader.css';
import {List, Grid,Image,Segment,  } from 'semantic-ui-react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';

import axios from 'axios';        
import HIre from './HIre';

let my_query = 
`query
{
  getAllApplicants
  {
    _id
    person
    {
      first
      middle
      last
      date_of_birth
      address{
        number
        street
        city
        province
        country
      }
      contact{
        type
        number
        
      }
    }
  }
}
`

class ApplicantGrid extends Component 
{

    constructor(props){
        super(props);
        this.state = { 
          Applicants: [],
        }
      }
    
      componentDidMount(){
        this.getApplicants();
      }
    
      getApplicants = async () => {
        let Applicant_variable = await axios({
          url: `http://localhost:4000`,
          method: `post`,
          data: {
            query: my_query
          }
        })
    
        this.setState({ Applicants: Applicant_variable.data.data.getAllApplicants });
	  }
	  
	  state = { visible: true }
 		toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

render() {
    
  const Applicants = this.state.Applicants;
  let ApplicantTable = Applicants.map((Applicant, index) => {
    

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
                                        {Applicant.person.first}
                                        </div>
                                    </List.Item>

                                </List>
                            
                                <List verticalAlign='left'>

                                    <List.Item>
                                        <i className="user icon"/>
                                        {/* {Applicant.position.title} */}
                                    </List.Item>

                                    <List.Item>
                                        <i className="mobile icon"/>
                                        {Applicant.person.contact[0].number}
                                    </List.Item>

									<List.Item>
                                        <hr/>
                                    </List.Item>

                                   
                                    <div className="action">
                                        <List divided horizontal inverted relaxed>
                                            <List.Item>
                                                <List.Content verticalAlign='top'><ViewApplicant item={Applicant}/></List.Content>
                                            </List.Item>
                                            <List.Item>
                                               
                                                <List.Content verticalAlign='middle'> <HIre Applicant={Applicant} /></List.Content>
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

                    {ApplicantTable}

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
export default ApplicantGrid;