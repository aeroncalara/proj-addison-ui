import React, { Component } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import ViewEmployeeForm from '../EmployeeComponents/ViewEmployeeForm';

export default class extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
          
      <Modal
      trigger={<Button className="ui button positive " onClick={this.handleOpen}>View</Button>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
     
    >
        
        <Modal.Header>View Employee</Modal.Header>
          <Modal.Content>
              <ViewEmployeeForm />
          </Modal.Content>
          <Modal.Actions>
              <div className="AddEmpModalButton">
                  <Button color='red' onClick={this.handleClose} inverted>
                  Cancel
                  </Button>

                  <Button color='green' onClick={this.handleClose} inverted>
                    Edit 
                  </Button>
                </div>      
              </Modal.Actions>
        </Modal>
    
    )
  }
}



