import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { user } from '../../../api/user'

import {
	Icon,
	Menu,
} from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  constructor(props){
		super(props);
		this.state = {
      open: false,
      closeOnEscape: null,
			closeOnDimmerClick: null,
		}

		this.closeModal = this.closeModal.bind(this)
  }
  
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true, test: false })
  }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  signOutUser = async ( ) => {
    let username = localStorage.getItem("hash");
    await user.signOut(username).then(result =>{
      	const {success, message} = result.data.data.signOut;
      	alert(message)
      	if(success){
      		localStorage.clear();
      		this.closeModal()
      		this.props.history.push("/signin");
      	}
      })
  }
	
	closeModal = () => {
		this.setState(prevState => ({
			test: true,
			open: false
		}))
		console.log('test')
	}
	
  render() {
    return (
        <Menu inverted style={{height:50}}>
					<Menu.Item style={{width:152 }} onClick={ this.props.handleAnimationChange }>
						<Icon name='bars' />RP INNOTECH
					</Menu.Item>
					<Menu.Item position='right' onClick={this.handleItemClick}>
					<Icon name='user' />
						My Profile
        	</Menu.Item>
					<Menu.Item >
						<Button onClick={ this.closeConfigShow(true, false) } inverte>
							<Icon name='log out' /> Logout
						</Button>
							<Modal
                open={ this.state.open }
                closeOnEscape={ this.state.closeOnEscape }
                closeOnDimmerClick={ this.state.closeOnDimmerClick }
                onClose={ this.closeModal }
                basic
              >
								<Modal.Content >
									<p>Are you sure you want to sign out?</p>
								</Modal.Content>
								<Modal.Actions>
									<Button onClick={ this.closeModal } basic color='red' inverted>
										<Icon name='remove' /> No
									</Button>
									<Button onClick={ this.signOutUser } color='green' inverted>
										<Icon name='checkmark' /> Yes
									</Button>
								</Modal.Actions>
							</Modal>
					</Menu.Item>
				</Menu>
    )
  }
}