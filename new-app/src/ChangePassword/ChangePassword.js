	import React, { Component } from 'react'
	import { Button, Modal, Icon, Form ,Grid, Label} from 'semantic-ui-react'

	class ChangePassword extends Component {
	state = { open: false }

	show = (size) => () => this.setState({ size, open: true })
	close = () => this.setState({ open: false })

	render() {
		const { open, size } = this.state

		return (
		<div>
		
			<p onClick={this.show('mini')} > 
			<Icon name="setting"/>
				Change Password
				
			</p>
			
	
			<Modal size={size} open={open} onClose={this.close}>
			<Modal.Header>Change Password</Modal.Header>

				<Modal.Content>
					<div className='modal_content'>
						<Form>
							<Form.Group width>
								<Form.Input name="Current Password" label='Current Password' placeholder='Current Password' />
							</Form.Group>

							<Form.Group>
								<Form.Input name="New Password" label='New Password ' placeholder='New Password' />
							</Form.Group>

							<Form.Group>
								<Form.Input name="Confirm New Password" label='Confirm New Password' placeholder='Confirm New Password' />
							</Form.Group>
						</Form>
					</div>
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