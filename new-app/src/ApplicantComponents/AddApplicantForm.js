import React, { Component } from 'react'
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Grid,Segment,Label,Input, Modal } from 'semantic-ui-react'
import './AddApplicantForm.css';
import { NavLink, Route} from 'react-router-dom';

import { graphql, compose, Mutation } from 'react-apollo';
import { ADD_APPLICANT } from '../Queries/Queries';
const { ADD_EMPLOYEE } = require('../Queries/Queries')

class AddApplicantForm extends Component {

  state = { open: false };

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
	  this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
	};
    close = () => this.setState({ open: false });

  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      isEdit : false,
      firstName: '',
      middleName: '',
      lastName: '',
      birthDate: '',

      mobile: '',
      telephone: '',
      email: '',

      number:'',
      street: '',
      town: '',
      city: '',
      country: '',

      position:'',
      title:'',
      salary:'',

	   tin:'',
	   sss:'',
	   philhealth:'',
	   hdmf: ''

    }
  }
  componentDidUpdate() {
	  console.log(this.state.isEdit, 'hello')
  }
  handleEdit = () => { ;
     this.setState({ isEdit: !this.state.isEdit });
   }

   handleCancel = () => { ;
    this.setState({ 
    firstName: '',
    middleName: '',
    lastName: '',
    date_of_birth: '',
    
    type:'',
    mobile: '',
    telephone: '',
    email: '',

    number:'',
    street: '',
    town: '',
    city: '',
    province:'',
    country: '',

    sss:'',
    tin:'',
    philhealth:'',
    hdmf: '',

    position:'',
    title:'',
    salary:'',

	open: !this.state.open
	 });
  }

  
  handlesave = () => { ;
    this.setState({ 
    firstName: '',
    middleName: '',
    lastName: '',
    date_of_birth: '',
    
    type:'',
    mobile: '',
    telephone: '',
    email: '',

    number:'',
    street: '',
    town: '',
    city: '',
    province:'',
    country: '',

    sss:'',
    tin:'',
    philhealth:'',
    hdmf: '',

    position:'',
    title:'',
    salary:'',
	 });
  }

   handleChange = (e, type) => {
	   this.setState({[type]: e.target.value})
   }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    const panes = [

      {menuItem: 'Personal', render: () =>
      <Tab.Pane> 
     
        <div className='EmpDetails'>
        <div className ='desc'>
          <i className="user icon"/>
            Personal Information
        </div>
        </div>

        <div>
        <hr className="hrName" />
        </div>  
  
        <Form>
	<Grid>
	<Grid.Column width={11}>
	<Segment raised>
		<Label as='a' color='teal' ribbon>
         	 Basic Information
        </Label>
		<Form.Group>



          <Form.Input label='First name' placeholder='First name' onChange={(e) => this.handleChange(e, 'firstName')} value={this.state.firstName} />

          <Form.Input label='Middle name' placeholder='Middle name'  onChange={(e) => this.handleChange(e, 'middleName')} value={this.state.middleName}/>

          <Form.Input label='Last name' placeholder='Last name'  onChange={(e) => this.handleChange(e, 'lastName')} value={this.state.lastName}/>

    </Form.Group>

    <Form.Group>
    
  
     

          <Form.Input label='Birthdate' placeholder='Birthdate'  onChange={(e) => this.handleChange(e, 'date_of_birth')} value={this.state.date_of_birth}/>
      </Form.Group>

      </Segment>
	</Grid.Column>
	</Grid>
   

	<Grid>
	<Grid.Column width={11}>
	<Segment raised>


		<Label as='a' color='teal' ribbon>
         	 Benefits
        </Label>

		<Form.Group>
			
	
          <Form.Input label='TIN #' placeholder='TIN #' onChange={(e) => this.handleChange(e, 'tin')} value={this.state.tin}/>
        
        

          <Form.Input label='SSS #' placeholder='SSS#' onChange={(e) => this.handleChange(e, 'sss')} value={this.state.sss}/>
    
  
      
          <Form.Input label='PHILHEALTH #' placeholder='PHILHEALTH #' onChange={(e) => this.handleChange(e, 'philhealth')} value={this.state.philhealth}/>
      
  
        
          <Form.Input label='HDMF #' placeholder='HDMF #'  onChange={(e) => this.handleChange(e, 'hdmf')} value={this.state.hdmf}/>
      
   

		</Form.Group>
	</Segment>
	</Grid.Column>
	</Grid>
	
	</Form>

      </Tab.Pane> 
      },
  
      {menuItem: 'Contact', render: () => 
      <Tab.Pane>
      <Form>
        <div className='EmpDetails'>
        <div className ='desc'>
          <i className="phone square icon"/>
            Contact Information
        </div>
        </div>
  
        <div>
        <hr className="hrName" />
        </div>  
        
        <List>
        <List.Item>
          <Form.Group unstackable widths={1}>																	  
          <Form.Input label='Mobile Number' placeholder='Mobile Number'  onChange={(e) => this.handleChange(e, 'mobile')} value={this.state.mobile}/>
          </Form.Group>
        </List.Item>
        
        <List.Item>
          <Form.Group unstackable widths={1}>
          <Form.Input label='Telephone Number' placeholder='Telephone Number' onChange={(e) => this.handleChange(e, 'telephone')} value={this.state.telephone}/>
          </Form.Group>
        </List.Item>
  
        <List.Item>
          <Form.Group unstackable widths={.05}>
          <Form.Input label='Email' placeholder='Email'  onChange={(e) => this.handleChange(e, 'email')} value={this.state.email}/>
          </Form.Group>
        </List.Item>
        </List>
      </Form>
      </Tab.Pane>
      },
  
      {menuItem: 'Address', render: () => 
      <Tab.Pane>
      <Form>
      <div className='EmpDetails'>  
        <div className ='desc'>
        <i className="map marker alternate icon"/>
          Address
        </div>
      </div>
  
      <div>
        <hr className="hrName" />
      </div>  
        
      <List>
      <List.Item>
        <Form.Group unstackable widths={1}>
          <Form.Input label='House number' placeholder='House Number' onChange={(e) => this.handleChange(e, 'number')} value={this.state.number}/>
        </Form.Group>
        </List.Item>
        <List.Item>
        <Form.Group unstackable widths={2}>
          <Form.Input label='Street' placeholder='Street' onChange={(e) => this.handleChange(e, 'street')} value={this.state.street}/>
        </Form.Group>
        </List.Item>
        
        <List.Item>
        <Form.Group unstackable widths={1}>
          <Form.Input label='City' placeholder=''  onChange={(e) => this.handleChange(e, 'city')} value={this.state.city}/>
        </Form.Group>
        </List.Item>
  
        <List.Item>
        <Form.Group unstackable widths={2}>
          <Form.Input label='Province' placeholder='province' onChange={(e) => this.handleChange(e, 'province')} value={this.state.province}/>
        </Form.Group>
        </List.Item>
  
        <List.Item>
        <Form.Group unstackable widths={1}>
 
        <Form.Input label='Country' placeholder='country' onChange={(e) => this.handleChange(e, 'country')} value={this.state.country}/>
        </Form.Group>
        </List.Item>
      </List>
      </Form>
      </Tab.Pane> 
      },
  
      {menuItem: 'Position', render: () => 
      <Tab.Pane>
      <Form>
        <div className='EmpDetails'>    
        <div className ='desc'>
          <i className="users icon"/>
          Requested Possition
        </div>
        </div>
  
        <div>
        <hr className="hrName" />
        </div>  
        
      <List>
        <List.Item>
        <Form.Group unstackable widths={1}>
          <Form.Input label='Possition' placeholder='Possition'  onChange={(e) => this.handleChange(e, 'position')} value={this.state.position}/>
        </Form.Group>
        </List.Item>
  
        <List.Item>
        <Form.Group unstackable widths={2}>
          <Form.Input label='Title Description' placeholder='Title Description'  onChange={(e) => this.handleChange(e, 'title')} value={this.state.title}/>
        </Form.Group>
        </List.Item>
  
        <List.Item>
        <Form.Group unstackable widths={1}>
          <Form.Input label='Salary' placeholder='Salary'  onChange={(e) => this.handleChange(e, 'salary')} value={this.state.salary}/>
        </Form.Group>
        </List.Item>
      </List>
      </Form>
      </Tab.Pane>
      },
  
      
  ]
    return (
      <div>

      {/* EmployeeHeader */}
      <div className = "EmployeeTop">

          {/* ViewEmployeeimage */}
          <div className='Img'>
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='massive' circular />
          </div>

          {/* eMPLoYEEname */}
          <div className='AppName'>
         
            <Header as='h2'>
              <Header.Content>
         
              <i className="plus icon"/>
                               
         Add Applicant
              </Header.Content>
            </Header> 
          </div>

          {/* EmployeeOptions */}
            <div className="Edit">
        
                  {/* Previous and next employee button */}

                  <div className="Save">

                  <Button.Group>
                  
                    <Button animated negative fluid onClick={this.closeConfigShow(true, false)}>
                   
					<Button.Content visible>
					<Icon name='close' />
					</Button.Content>
					<Button.Content hidden>
					Cancel
					</Button.Content>
					
					</Button>    
					<Button.Or />
                  <Mutation mutation={ADD_APPLICANT}>
                    {addApplicant => (
                      <Button animated positive fluid onClick={() => {
                        addApplicant({ variables: {
							first: this.state.firstName,
							middle: this.state.middleName,
							last: this.state.lastName,
							date_of_birth: this.state.date_of_birth,
							contact: [{type: this.state.type, number: this.state.number,}],
							address: [{number: this.state.number, street: this.state.street, city: this.state.city, 
							province: this.state.province, country: this.state.country,}],
							title: this.state.title,
							sss: this.state.sss,
							tin: this.state.tin,
							philhealth: this.state.philhealth,
							hdmf: this.state.hdmf
                        }})
                        this.setState({firstName:""})
                        alert("adding complete")
                      }}>
                        <Button.Content visible>
                          <Icon name='save' />
                        </Button.Content>
                        <Button.Content hidden>
                          Save
                        </Button.Content>     
                      </Button>
                    )}
                  </Mutation>
                  </Button.Group>    
                  <Modal
										open={open}
										closeOnEscape={closeOnEscape}
										closeOnDimmerClick={closeOnDimmerClick}
										onClose={this.close}
										>
											<Modal.Header>Cancel Adding</Modal.Header>
												<Modal.Content>
													<p>Are you sure you want to Cancel adding Employee?</p>
												</Modal.Content>
											<Modal.Actions>
												<Button onClick={this.close} negative>
													No
												</Button>
                        <NavLink exact to="/EmployeeMain">
												<Button
												onClick={this.handleCancel}
													positive
													labelPosition="right"
													icon="checkmark"
													content="Yes"
												/>
                        </NavLink>
											</Modal.Actions>
									</Modal>
                  </div>
            </div>

        </div>


        {/* EMployee contents */}
      <div className='EmployeeContent'>

          {/* Details in the left */}
          <div className ='DetailsBg'>

              {/*contact Details in the left */}
              <div className ='Up'>
          
                    {/* Contact Details */}
                 
                    {/* <List verticalAlign='middle' selection verticalAlign='middle'>
                      <List.Item>
                                              <Input fluid 
                              action={{ color: 'teal', icon: 'upload' }}
                              placeholder='Upload Image'
                            />
                                               </List.Item>
                      
                  </List> */}
                  
              </div>
          </div>

          {/* Tabs */}
          <div className='Tabs'>    
            <Tab style={{width:1500 ,height:10000 }} panes={panes} />
          </div>
            
      </div>
          
    
      </div>
    )
  }
}



export default (AddApplicantForm)
