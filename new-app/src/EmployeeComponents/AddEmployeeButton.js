import React, { Component } from 'react'
import './AddEmployeeButton.css';
import { Button, Header, Image, Modal, Form, Input } from 'semantic-ui-react'

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
           
            <Modal trigger={<Button className="ui labeled icon button positive ">
            <i className="plus icon"></i>
            Add New Employee
            </Button>}>
  
                  <Modal.Header>Add New Employee</Modal.Header>
                  <Modal.Content>
                  
                  <Form>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <label>First name</label>
                      <Input fluid placeholder='First name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Middle name</label>
                      <Input fluid placeholder='Middle name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last name</label>
                      <Input fluid placeholder='Last name' />
                    </Form.Field>
                  </Form.Group>
                  </Form>
                 
                  </Modal.Content>
                </Modal>
        </div>
        
    )
  }
}

