import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { signOut, user } from '../../../api/user'

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
      closeOnDimmerClick: null
    }
  }
  
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  signOutUser = async ( ) => {
    let username = localStorage.getItem("hash");
    await user.signOut(username).then(result =>{
      	const {success, message} = result.data.data.signOut;
      	alert(message)
      	if(success){
      		localStorage.clear();
      		this.close()
      		this.props.history.push("/signin");
      	}
      })
  }

	close = () => this.setState({ open: false })

  render() {
    return (
        <Menu inverted style={{height:50}}>
					<Menu.Item style={{width:152 }} onClick={ this.props.handleAnimationChange }>
						<Icon name='bars' />RP INNOTECH
					</Menu.Item>
					<Menu.Item  position='right' style={{ right:95 }}>
						<Button secondary onClick={ this.closeConfigShow(true, false) }> Sign-out </Button>
							<Modal
                open={ this.state.open }
                closeOnEscape={ this.state.closeOnEscape }
                closeOnDimmerClick={ this.state.closeOnDimmerClick }
                onClose={ this.close }
                basic
              >
								<Modal.Content >
									<p>Are you sure you want to sign out?</p>
								</Modal.Content>
								<Modal.Actions>
									<Button onClick={ this.close } basic color='red' inverted>
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