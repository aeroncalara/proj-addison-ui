	import React, { Component } from 'react'
	import { Button, Modal, Icon, Form } from 'semantic-ui-react'

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
					
				<Form>
				<Grid className='personal_info'>
				<Grid.Column>
					<Form.Group>
							<Form.Input name="Current Password" label='First name' placeholder='First Name' />

							<Form.Input name="New Password" label='Mid Name ' placeholder='Middle Name' width={2} />

							<Form.Input name="Confirm Password" label='Confirm Password' placeholder='Confirm Password' width={3}/>
					</Form.Group>
					</Grid.Column>
				</Grid>
				</Form>
			

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
