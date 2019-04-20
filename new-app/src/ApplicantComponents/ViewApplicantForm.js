import React, { Component } from 'react'
import { Header, Image,Form } from 'semantic-ui-react'
export default class ViewApplicantForm extends Component {
  render() {
    return (
      <div>
        <Header as='h2'>
        <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> James
        </Header>

        <Form>
              <span>Account Details</span>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name' readOnly/>
                  <Form.Input label='Middle name' placeholder='Middle Name' readOnly/>
                  <Form.Input label='Last Name' placeholder='Last Name' readOnly/>
                </Form.Group>
              <hr></hr>

              <span>Contact Information</span>
               <Form.Group widths={2}>
                 <Form.Input label='Birthdate (mm-dd-yyyy)' placeholder='Birthdate (01-22-1998)' readOnly/>
                    <Form.Field label='Type' control='select' disabled>
                        <option value='mobile'>Mobile</option>
                        <option value='landline'>Landline</option>
                    </Form.Field>
                 <Form.Input label='Number' placeholder='Number' readOnly/>
              </Form.Group>
              <hr></hr>

              <span>Position</span>
                <Form.Group widths={3}>
                  <Form.Input label='Title' placeholder='Title' readOnly/>
                  <Form.Input label='Description' placeholder='Description'readOnly />
                  <Form.Input label='Salary' placeholder='Salary' readOnly/>
                </Form.Group>
               <hr></hr>

              <span>Account Details</span>
                <Form.Group widths={3}>
                    <Form.Input label='TIN#' placeholder='TIN#' readOnly/>
                      <Form.Input label='SSS#' placeholder='SSS#' readOnly/>
                      <Form.Input label='PHILHEALTH#' placeholder='PHILHEALTH' readOnly/>
                    <Form.Input label='HDMF#' placeholder='HDMF#' readOnly/>
                    </Form.Group>  
                </Form>
      </div>
    )
  }
}
