import React, { Component } from 'react'
import './AddEmployeeButton.css';
import { Button, Modal} from 'semantic-ui-react'
import AddEmployeeForm from '../EmployeeComponents/AddEmployeeForm';

export default class AddEmployeeButton extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
        <div className="AddButton" >
           
            <Modal trigger={<Button className="ui labeled icon button positi.ve " onClick={this.handleOpen}>
            <i className="plus icon"></i>
            Add New Employee
            </Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            // basic size='small'
            >
            
  
                <Modal.Header>Add New Employee</Modal.Header>
                  <Modal.Content>
                      <AddEmployeeForm />
                  </Modal.Content>


          
              <Modal.Actions>
              <div className="AddEmpModalButton">
                  <Button color='red' onClick={this.handleClose} inverted>
                  No
                  </Button>

                  <Button color='green' onClick={this.handleClose} inverted>
                  Add New Employee 
                  </Button>
                </div>      
              </Modal.Actions>
          
              </Modal>
        </div>
        
    )
  }
}

