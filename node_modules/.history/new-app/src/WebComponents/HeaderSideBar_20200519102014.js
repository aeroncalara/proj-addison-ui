import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Header.css';
import { NavLink, Route, Switch} from 'react-router-dom'

import EmployeeMain from '../EmployeeComponents/EmployeeMain';
import axios from 'axios';
import {addison_api_url} from '../Utilities/config';


import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import AddEmployeeForm from '../EmployeeComponents/AddEmployeeForm';

import EmployeeTimeLogs from '../EmployeeTimeLogs/EmployeeTimeLogs';


import PayRoll from '../PayRoll/PayRoll';
import { List, Button, Modal} from 'semantic-ui-react'


import {
	Image,
	Header,
	Icon,
	Menu,
	Segment,
	Sidebar,
} from 'semantic-ui-react'

  

const trigger = (
	<span>
		<Header as='h4' image>
			<Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' circular />
		
			<Header.Content>
				<List>
					<List.Item>
						Admin
					</List.Item>

				</List>
			</Header.Content>
		</Header>
	</span>
)

// ADMINOPTIONS
const options = [
	{ key: 'user', text: 'Account', icon: 'user' },
	{ key: 'settings', text: 'Settings', icon: 'settings' },
	{ key: 'log-out', text: 'Log Out', icon: 'sign out' },
]

// SIDEBAR
const VerticalSidebar = ({ animation, direction, visible }) => (

	<Sidebar
	as={Menu}
	animation={animation}
	direction={direction}
	icon='labeled'
	inverted    
	vertical
	
	visible={visible}
	width='thin'
	>

		<List animated verticalAlign='middle' selection >
{/* 
			<List.Item>			
				<NavLink activeClassName="active" to="/main/employees/">
					<Menu.Item>	
						<i className="home icon"/>
						Home
					</Menu.Item>
				</NavLink>
			</List.Item> */}
					
			<List.Item>
				<NavLink exact activeClassName="active" to="/main/employees/">
					<Menu.Item>
					<i className="users icon"/>
						Employee List			
					</Menu.Item>
				</NavLink>
			</List.Item>

			<List.Item>
				<NavLink activeClassName="active" to="/main/timelogs/">
					<Menu.Item>
						<i className="clock icon" />
						Hours Rendered
				
					</Menu.Item>
				</NavLink>
			</List.Item>

			<List.Item>
				<NavLink activeClassName="active" to="/main/payroll/">
					<Menu.Item>
					<i className="money bill alternate outline icon"/>
					Payroll	
					</Menu.Item>
				</NavLink>
			</List.Item>

		</List>

	
	</Sidebar>
)

	// VerticalSidebar.propTypes = {
	// animation: PropTypes.string,
	// direction: PropTypes.string,
	// visible: PropTypes.bool,
	// }

	

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


	handleAnimationChange = animation => () =>

	this.setState({ animation, visible: !this.state.visible })

	handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

	handleDirectionChange = direction => () => this.setState({ direction, visible: false })

	handleDirectionHide = direction => () => this.setState({ direction, visible: false })

	render() {
		const { animation, direction, visible, open, closeOnEscape, closeOnDimmerClick } = this.state
		const vertical = direction === 'bottom' || direction === 'top'
	
		// const { activeItem } = this.state
		return (
			<div>
				<Menu inverted style={{height:50}}>
					<Menu.Item style={{width:152 }} onClick={this.handleAnimationChange('push')}>
						<Icon name='bars' />
							RP INNOTECH
					</Menu.Item>

					{/* TIME */}
					{/* <Menu.Item  position='right' style={{right:10 }}>
						<div className="App-header">
							<p className="App-clock">
								{this.state.time}
							</p>
						</div>
						
					</Menu.Item> */}

					{/* ADMINTOP */}
					<Menu.Item  position='right' style={{right:95 }}>

						<Button secondary onClick={this.closeConfigShow(true, false)}> Sign-out </Button>
						<Modal
						open={open}
						closeOnEscape={closeOnEscape}
						closeOnDimmerClick={closeOnDimmerClick}
						onClose={this.close}
						basic
						
					>
						
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

				<Sidebar.Pushable as={Segment} style={{height: '90vh', bottom:18 }} >

					{vertical ? null : (
					<VerticalSidebar animation={animation} direction={direction} visible={visible} />
					)}

					<Sidebar.Pusher dimmed={visible} style={{height: '90vh'}}>
						<Switch>
							<Route path="/main/employees/" component={EmployeeMain} />
							<Route path="/main/employee/id/:id" component={EmployeeDetails} />
							<Route path="/main/timelogs/" component={EmployeeTimeLogs} />
							<Route path="/main/payroll/" exact component={PayRoll} />
							<Route path="/main/addEmployee/" exact component={AddEmployeeForm} />
						</Switch>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}
