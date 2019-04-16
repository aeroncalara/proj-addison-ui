import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button className="ui button negative " onClick={this.handleOpen}>Delete</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='frown outline' content='Delete Employee' />
        <Modal.Content>
          <h3>Are you sure you want to Delete?</h3>
        </Modal.Content>
        
        <Modal.Actions>

            <Button color='red' onClick={this.handleClose} inverted>
                <Icon name='x' /> No
            </Button>

          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Yes
          </Button>

        </Modal.Actions>
      </Modal>
    )
  }
}
