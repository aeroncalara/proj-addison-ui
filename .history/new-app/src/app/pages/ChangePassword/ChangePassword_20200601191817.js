import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ChangePassword extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}>Mini</Button>
       

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Change Password</Modal.Header>
          <Modal.Content>
            <p></p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ChangePassword