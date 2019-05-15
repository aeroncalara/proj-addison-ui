import React, { Component } from 'react'
import { Button, Header, Icon, Modal,Popup } from 'semantic-ui-react'



export default class extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <Modal
        trigger={ <Popup
          trigger={<Button className="ui button negative " onClick={this.handleOpen}>Terminate</Button>}
          content='Archive Employee'
          position='top center'
        />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        >

        
        <Header icon='frown outline' content='Archive Employee:' />
        <Modal.Content>
          <h3>Are you sure you want to Archive ?</h3>

          {/* {this.props.Employee.person.first} {this.props.Employee.person.last} */}
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
