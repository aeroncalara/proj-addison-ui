import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './TimeInOut.css';


export default class extends Component {

  state = { 
    modalOpen: false,
    isEdit: false 
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
	let status = this.state.isEdit;
    this.setState({ isEdit: !status });
	this.setState({ modalOpen: false })
	this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
	const { active } = this.state
    return (
      <Modal
    
   
        trigger={  
			<Button className="ui button blue " color={active ?'red':null} onClick={this.handleOpen}>{this.state.isEdit !== true? "Time In":"Time Out"} </Button>
         
     
}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'
      >
        <Header icon='check' content='Successfully' />
        <div className="timeText">
          <Modal.Content>
            <h3>{this.state.isEdit !== true? "Timed In":"Timed Out"} 10:30:22</h3>
            
          </Modal.Content>
        </div>
        <Modal.Actions>

            <Button color='green' onClick={this.handleClose}inverted>
			
              <Icon name='checkmark' />
			   OK
            </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
