	import React, { Component } from 'react'
	import { Button, Modal, Icon, Menu } from 'semantic-ui-react'

	class ChangePassword extends Component {
	state = { open: false }

	show = (size) => () => this.setState({ size, open: true })
	close = () => this.setState({ open: false })

	render() {
		const { open, size } = this.state

		return (
		<div>
		
			<Button icon secondary onClick={this.show('mini')} > 
				<Icon name="setting"/>
			</Button>
			
	
			<Modal size={size} open={open} onClose={this.close}>
			<Modal.Header>Change Password</Modal.Header>

				<Modal.Content>
					<p></p>
				</Modal.Content>

			<Modal.Actions>
				<Button size='small' negative onClick={this.close}>No</Button>
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
