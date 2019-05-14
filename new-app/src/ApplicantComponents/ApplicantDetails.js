import React, { Component } from 'react'
// import { } from 'semantic-ui-react'
// import ViewEmployeeForm from './ViewEmployeeForm';
// import TimeInOut from '../TimeInOutComponents/TimeInOut';
// import { NavLink} from 'react-router-dom'
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Label } from 'semantic-ui-react'
import './ApplicantDetails.css';


// Country Dropdown
const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  { key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda' },
  { key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan' },
  { key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia' },
  { key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia' },
  { key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana' },
  { key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island' },
  { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
  { key: 'vg', value: 'vg', flag: 'vg', text: 'British Virgin Islands' },
  { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
  { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
  { key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso' },
  { key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi' },
  { key: 'tc', value: 'tc', flag: 'tc', text: 'Caicos Islands' },
  { key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },
  { key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon' },
  { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
]

// TABS
const panes = [
  { menuItem: 'Personal', render: () => <Tab.Pane> 

    <Form>
    <div className='EmpDetails'>
          
              <div className ='desc'>
              <i className="user icon"/>
                      Personal Information
              </div>
    </div>

    <div>
      <hr className="hrName" />
    </div>  

     <List>
    <List.Item>
    <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name'/>
    </Form.Group>
    </List.Item>
    
    <List.Item>
    <Form.Group unstackable widths={1}>
                  <Form.Input label='Middle name' placeholder='Middle name'/>
    </Form.Group>
    </List.Item>

    <List.Item>
    <Form.Group unstackable widths={2}>
                  <Form.Input label='Last name' placeholder='Last name'/>
    </Form.Group>
    </List.Item>

    <List.Item>
    <Form.Group unstackable widths={1}>
                  <Form.Input label='Birthdate' placeholder='Birthdate'/>
    </Form.Group>
    </List.Item>

    </List></Form>
    </Tab.Pane> },


  { menuItem: 'Contact', render: () => <Tab.Pane>

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
                      <Form.Input label='Mobile Number' placeholder='Mobile Number'/>
        </Form.Group>
        </List.Item>
        
        <List.Item>
        <Form.Group unstackable widths={1}>
                      <Form.Input label='Telephone Number' placeholder='Telephone Number'/>
        </Form.Group>
        </List.Item>

        <List.Item>
        <Form.Group unstackable widths={.05}>
                      <Form.Input label='Email' placeholder='Email'/>
        </Form.Group>
        </List.Item>

    </List></Form>
      </Tab.Pane> },


  { menuItem: 'Address', render: () => <Tab.Pane>

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
    <Form.Group unstackable widths={2}>
                  <Form.Input label='Street' placeholder='Street'/>
    </Form.Group>
    </List.Item>
    
    <List.Item>
    <Form.Group unstackable widths={1}>
                  <Form.Input label='Town' placeholder='Town'/>
    </Form.Group>
    </List.Item>

    <List.Item>
    <Form.Group unstackable widths={2}>
                  <Form.Input label='City' placeholder='City'/>
    </Form.Group>
    </List.Item>

    <List.Item>
    <Form.Group unstackable widths={1}>

            <Dropdown label='country'
            placeholder='Select Country'
            search
            selection
            options={countryOptions}
          />
    </Form.Group>
    </List.Item>

</List></Form>
</Tab.Pane> },


  { menuItem: 'Documents', render: () => <Tab.Pane>
      <Form>
        <div className='EmpDetails'>    
          <div className ='desc'>
          <i className="users icon"/>
                  Applicant's Documents
          </div>
        </div>

        <div>
          <hr className="hrName" />
        </div>  
        
     <List>
        <List.Item>
          <Form.Group unstackable widths={1}>
                <Form.Input label='Possition' placeholder='Possition'/>
          </Form.Group>
        </List.Item>
        <List.Item>
          <Form.Group unstackable widths={2}>
                <Form.Input label='Title Description' placeholder='Title Description'/>
          </Form.Group>
        </List.Item>
        <List.Item>
          <Form.Group unstackable widths={1}>
                <Form.Input label='Salary' placeholder='Salary'/>
          </Form.Group></List.Item>
      </List></Form>
      </Tab.Pane> },
]


export default class EmployeeDetails extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {
   
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
             David Smith
              </Header.Content>
            </Header> 
          </div>

          {/* EmployeeOptions */}
            <div className="Edit">
                <List horizontal>
                <List.Item>
                <div className="Options">
                  <List divided horizontal>
                    <List.Item>
                      <Dropdown floating text="Request a Change" pointing='top'>
                        <Dropdown.Menu>
                          <Dropdown.Item icon="edit" text="Edit" />
                        </Dropdown.Menu>
                      </Dropdown>

                    </List.Item>

                    <List.Item>
                    <Dropdown icon="cog"  pointing='top right'>
                        <Dropdown.Menu >
                          <Dropdown.Item text="Terminate" />
                        </Dropdown.Menu>
                      </Dropdown>

                    </List.Item>
                  </List>
                </div>
                </List.Item>
                <List.Item>
                  {/* Previous and next employee button */}
                  <div className="PrevNxt">
                  <List horizontal>

                      <List.Item>
                        <i className="users icon"/>
                                -3 of 100
                      </List.Item>

                      <List.Item>
                      <Label as='a'>
                    
                      <Icon name='arrow left icon' />
                      Prev
                      </Label>
                      </List.Item>

                      <List.Item>
                      <Label as='a'>
                      Next
                      <Icon name='arrow right icon' />
                        
                      </Label>
                      </List.Item>
                    </List>
                  </div>

              {/* <List divided horizontal>

                   <List.Item>
                    <i className="users icon"/>
                            -3 of 100
                  </List.Item>

                  <List.Item>
                    <i className="arrow left icon"/>
                            Prev
                  </List.Item>

                  <List.Item>
                  Next
                    <i className="arrow right icon"/>
                            
                  </List.Item>
                </List> */}


                {/* <List divided horizontal>
                  <List.Item>
                    <Button animated>
                        <Button.Content visible>
                            Previous
                        </Button.Content>

                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                  </List.Item>

                  <List.Item>
                  <Button animated>
                  <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
                  </Button>
                  </List.Item>
                  </List> */}

</List.Item>

                  </List>
            </div>

        </div>


        {/* EMployee contents */}
      <div className='EmployeeContent'>

          {/* Details in the left */}
          <div className ='DetailsBg'>

              {/*contact Details in the left */}
              <div className ='Details'>
          
                    {/* Contact Details */}
                    <List animated verticalAlign='middle' selection verticalAlign='middle'>
                      <List.Item>
                        <i className="mobile icon"/>
                          +639167105579
                      </List.Item>
                      <List.Item>
                        <i className="text telephone icon"/>
                            +639167105579
                      </List.Item>
                      <List.Item
                        icon='mail' 
                          content={<a href='mailto:jack@semantic-ui.com'>
                              Dave@semantic-ui.com
                        </a>}
                      />
                      <List.Item>
                        <i className="map marker alternate icon"/>
                            Sydney Australia
                      </List.Item>
                  </List>

                  {/* Line */}
                  <hr />

                    {/* Address in the left */}
                    <List animated verticalAlign='middle' selection verticalAlign='middle'>
                      <List.Item>
                        <b>
                         Applying For:
                         </b>
                      </List.Item>
                      
                      <List.Item>
                      <i className="address card icon"/>
                          HR manager
                      </List.Item>
                    </List>
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


