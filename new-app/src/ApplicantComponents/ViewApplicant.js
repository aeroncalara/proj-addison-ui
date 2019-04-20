import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ViewApplicantForm from '../ApplicantComponents/ViewApplicantForm';

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
        
        <Modal.Header>View Applicant</Modal.Header>
          <Modal.Content>
              <ViewApplicantForm />
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



