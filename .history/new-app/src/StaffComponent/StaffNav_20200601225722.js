import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './staffHeader.css';

import {Image, Header, Icon, Menu, Segment, Sidebar, List, Button, Modal
} from 'semantic-ui-react'

import { NavLink, Route, Switch} from 'react-router-dom'

import ViewStaffProfile from './ViewStaffProfile';
import ChangePassword from '../ChangePassword/ChangePassword';


import axios from 'axios';
import {addison_api_url} from '../Utilities/config';


export default class HeaderSideBar extends Component {

	constructor(props){
		super(props);
		this.state = {
			animation: 'overlay',
			direction: 'left',
			dimmed: false,
			visible: false,
			open: false,
		}

		this.signOut = this.signOut.bind(this);
	}

	static propTypes = {
		color: PropTypes.string,
	  }

	  state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
	}

	show = (size) => () => this.setState({ size, open: true})

	close = () => this.setState({ open: false })

	signOut = async () => {
		let username = localStorage.getItem("hash");
		let sign_out_query = `
			mutation{
				signOut(username:"${username}"){
				message
				success
				}
			}
		`

		return axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: sign_out_query
			}
		}).then(result =>{
			const {success, message} = result.data.data.signOut;
			alert(message)
			if(success){
				localStorage.clear();
				this.close()
				this.props.history.push("/main/employees");
			}
		})
		
	}



	render() {
		const { open, closeOnEscape, closeOnDimmerClick, size } = this.state
	
		return (
			<div>
				<Menu inverted style={{height:50}}>
					<Menu.Item style={{width:152 }}>
						
							RP INNOTECH

					</Menu.Item>

					<Menu.Item position='right' >
						<ChangePassword></ChangePassword>
        			</Menu.Item>

					{/* ADMINTOP */}
					<Menu.Item  position='right' onClick={this.closeConfigShow(true, false)}>
						<Icon name='log out' />
						Log-out

					<Modal
						open={open}
						closeOnEscape={closeOnEscape}
						closeOnDimmerClick={closeOnDimmerClick}
						onClose={this.close}
						basic>
						
						<Modal.Content >
							<p>Are you sure you want to sign out?</p>
						</Modal.Content>

						<Modal.Actions>
							<Button onClick={this.close} basic color='red' inverted>
								<Icon name='remove' /> No
							</Button>
							<Button onClick={this.signOut} color='green' inverted>
								<Icon name='checkmark' /> Yes
							</Button>
						</Modal.Actions>
					</Modal>

					</Menu.Item>
				</Menu>


				<div className='ViewStaff-Profile-Content'>
					<ViewStaffProfile  />
				</div>
		
			</div>
		
			
		)
	}
}
