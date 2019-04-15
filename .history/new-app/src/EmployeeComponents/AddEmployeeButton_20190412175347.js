import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
            
           

            <Modal trigger={ <Button className="ui labeled icon button positive ">
            <i className="plus icon"></i>
            Add New Employee
            </Button>}></Modal>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                {/* <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description> */}
                </Modal.Content>
            </Modal>
        </div>
        
    )
  }
}

