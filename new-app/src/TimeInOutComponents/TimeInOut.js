import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './TimeInOut.css';


export default class extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <Modal
        trigger={<Button className="ui button blue " onClick={this.handleOpen}>Time In</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'
      >
        <Header icon='check' content='Successfully' />
        <div className="timeText">
          <Modal.Content>
            <h3>Timed-In: 10:30:22</h3>
            
          </Modal.Content>
        </div>
        <Modal.Actions>

            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> OK
            </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
