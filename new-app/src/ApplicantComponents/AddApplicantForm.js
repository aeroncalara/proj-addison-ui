

import React, { Component } from 'react'
import { } from 'semantic-ui-react'
import TimeInOut from '../TimeInOutComponents/TimeInOut';
import { NavLink} from 'react-router-dom'
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Input } from 'semantic-ui-react'
import '../EmployeeComponents/AddEmployeeForm.css';


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
         

         Add Applicant
              </Header.Content>
            </Header> 
          </div>

          {/* EmployeeOptions */}
            <div className="Edit">
        
                  {/* Previous and next employee button */}

                  <div className="Save">
                  
                      <Button animated positive fluid>
                      

                      <Button.Content visible>
                              <Icon name='save' />
                          </Button.Content>
                          <Button.Content hidden>
                        Save
                          </Button.Content>

                          
                      </Button>
                  
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
                 
                    <List verticalAlign='middle' selection verticalAlign='middle'>
                      <List.Item>
                                              <Input fluid 
                              action={{ color: 'teal', icon: 'upload' }}
                              placeholder='Upload Image'
                            />
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



// import React, { Component } from 'react'
// import './AddApplicantForm.css';
// import {Form} from 'semantic-ui-react'

// export default class AddApplicantButton extends Component {
//   render() {
//     return (
        
          
//           <Form>
//               <span>Account Details</span>
//               <Form.Group unstackable widths={2}>
//                 <Form.Input label='First name' placeholder='First name' />
//                 <Form.Input label='Middle name' placeholder='Middle Name' />
//                 <Form.Input label='Last Name' placeholder='Last Name' />
//               </Form.Group>
//               <hr></hr>

//               <span>Contact Information</span>
//                <Form.Group widths={2}>

//                  <Form.Input label='Birthdate (mm-dd-yyyy)' placeholder='Birthdate (01-22-1998)' />
//                  <Form.Field label='Type' control='select'>
//                   <option value='male'>Mobile</option>
//                   <option value='female'>Landline</option>
//                  </Form.Field>


//                  <Form.Input label='Number' placeholder='Number' />
//               </Form.Group>
//               <hr></hr>

//               <span>Position</span>
//               <Form.Group widths={3}>
//                  <Form.Input label='Title' placeholder='Title' />
//                  <Form.Input label='Description' placeholder='Description' />
//                  <Form.Input label='Salary' placeholder='Salary' />
//                </Form.Group>
//                <hr></hr>

//                <span>Account Details</span>
//               <Form.Group widths={3}>
//                   <Form.Input label='TIN#' placeholder='TIN#' />
//                     <Form.Input label='SSS#' placeholder='SSS#' />
//                     <Form.Input label='PHILHEALTH#' placeholder='PHILHEALTH' />
//                   <Form.Input label='HDMF#' placeholder='HDMF#' />
//                   </Form.Group>  
//           </Form>     
      
   
//     )
//   }
// }