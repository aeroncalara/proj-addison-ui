import React, { Component } from 'react'
import './AddEmployeeForm.css';
import { Button, Header, Image, Modal,Form , Label} from 'semantic-ui-react'

export default class AddEmployeeButton extends Component {
  render() {
    return (
        
          
          <Form>
              <span>Account Details</span>
              <Form.Group unstackable widths={2}>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Middle name' placeholder='Middle Name' />
                <Form.Input label='Last Name' placeholder='Last Name' />
              </Form.Group>
              <hr></hr>

              <span>Contact Information</span>
               <Form.Group widths={2}>

                 <Form.Input label='Birthdate (mm-dd-yyyy)' placeholder='Birthdate (01-22-1998)' />
                 <Form.Field label='Type' control='select'>
                  <option value='male'>Mobile</option>
                  <option value='female'>Landline</option>
                 </Form.Field>


                 <Form.Input label='Number' placeholder='Number' />
              </Form.Group>
              <hr></hr>

              <span>Position</span>
              <Form.Group widths={3}>
                 <Form.Input label='Title' placeholder='Title' />
                 <Form.Input label='Description' placeholder='Description' />
                 <Form.Input label='Salary' placeholder='Salary' />
               </Form.Group>
               <hr></hr>

               <span>Account Details</span>
              <Form.Group widths={3}>
                  <Form.Input label='TIN#' placeholder='TIN#' />
                    <Form.Input label='SSS#' placeholder='SSS#' />
                    <Form.Input label='PHILHEALTH#' placeholder='PHILHEALTH' />
                  <Form.Input label='HDMF#' placeholder='HDMF#' />
                  </Form.Group>  
          </Form>     
      
   
    )
  }
}