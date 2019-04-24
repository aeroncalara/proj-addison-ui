import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'



export default class extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <Modal
        trigger={<Button className="ui button negative " onClick={this.handleOpen}>Archive</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'
      >
        <Header icon='frown outline' content='Archive Employee:' />
        <Modal.Content>
          <h3>Are you sure you want to Archive {this.props.Employee.person.first} {this.props.Employee.person.last}?</h3>
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
