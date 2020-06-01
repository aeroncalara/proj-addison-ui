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
		
			<Button secondary onClick={this.show('mini')} > 
			<Icon name="setting">Change Password</Icon>
			</Button>
			
			<Button animated='vertical'>
			<Button.Content hidden>Shop</Button.Content>
			<Button.Content visible>
			<Icon name='shop' />
			</Button.Content>
			</Button>

			<Modal size={size} open={open} onClose={this.close}>
			<Modal.Header>Change Password</Modal.Header>

				<Modal.Content>
					<p></p>
				</Modal.Content>

			<Modal.Actions>
				<Button negative onClick={this.close}>No</Button>
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
