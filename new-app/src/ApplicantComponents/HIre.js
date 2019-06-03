import React, { Component } from 'react'
import { Button, Header, Icon, Modal} from 'semantic-ui-react'



export default class extends Component {

state = { modalOpen: false , open:false }

open = () => this.setState({ open: true })

close = () => this.setState({ open: false })


handleOpen = () => this.setState({ modalOpen: true })

handleClose = () => this.setState({ modalOpen: false, open:true })

render() {
	return (
		<Modal
			trigger={<Button className="ui button blue " onClick={this.handleOpen}>Hire</Button>}
			open={this.state.modalOpen}
			onClose={this.handleClose}
			basic size='small'
		>
			<Header icon='thumbs up outline' content='Hire Applicant' />

			<Modal.Content>
				<h3>Are you sure you want to hire this Applicant?</h3>
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
