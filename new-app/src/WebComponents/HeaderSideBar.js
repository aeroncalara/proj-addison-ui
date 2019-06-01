import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Header.css';
import { NavLink, Route, Switch} from 'react-router-dom'
import EmployeeMain from '../EmployeeComponents/EmployeeMain';
import ApplicantMain from '../ApplicantComponents/ApplicantMain';
import AddApplicantForm from '../ApplicantComponents/AddApplicantForm';
import NotFound from '../WebComponents/Notfound';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import AddEmployeeForm from '../EmployeeComponents/AddEmployeeForm';
import ApplicantDetails from '../ApplicantComponents/ApplicantDetails';
import PayRoll from '../PayRoll/PayRoll';
import { Dropdown, List } from 'semantic-ui-react'


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

					{/* <List.Item>
						Human Resources
					</List.Item> */}
				</List>
			</Header.Content>
		</Header>
	</span>
)

// ADMINOPTIONS
// const options = [
// 	{ key: 'user', text: 'Account', icon: 'user' },
// 	{ key: 'settings', text: 'Settings', icon: 'settings' },
// 	{ key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
// ]

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

		<List animated verticalAlign='middle' selection verticalAlign='middle'>
			<List.Item>			
				<NavLink activeClassName="active" to="/">
					<Menu.Item>	
						<i className="home icon"/>
						Home
					</Menu.Item>
				</NavLink>
			</List.Item>
					
			<List.Item>
				<NavLink exact activeClassName="active" to="/EmployeeMain">
					<Menu.Item>
					<i className="users icon"/>
						Employee			
					</Menu.Item>
				</NavLink>
			</List.Item>

			<List.Item>
				<NavLink activeClassName="active" to="/ApplicantMain">
					<Menu.Item>
						<i className="add user icon" />
						Hiring
				
					</Menu.Item>
				</NavLink>
			</List.Item>

			<List.Item>
				<NavLink activeClassName="active" to="/PayRoll">
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
	state = {
	animation: 'overlay',
	direction: 'left',
	dimmed: false,
	visible: false,
	}

	handleAnimationChange = animation => () =>

	this.setState({ animation, visible: !this.state.visible })

	handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

	handleDirectionChange = direction => () => this.setState({ direction, visible: false })

	handleDirectionHide = direction => () => this.setState({ direction, visible: false })

	TIME
	constructor(props) {
	super(props);
	this.state = {
	time: new Date().toLocaleString()
	};
	}
	
	componentDidMount() {
	this.intervalID = setInterval(
	() => this.tick(),
	1000
	);
	}
	componentWillUnmount() {
	clearInterval(this.intervalID);
	}
	tick() {
	this.setState({
	time: new Date().toLocaleString()
	});
	}


	render() {
		const { animation, direction, visible } = this.state
		const vertical = direction === 'bottom' || direction === 'top'

		return (
			<div>
				<Menu inverted style={{height:50}}>
					<Menu.Item style={{width:152 }} onClick={this.handleAnimationChange('push')}>
						<Icon name='bars' />
							RP INNOTECH
					</Menu.Item>

					{/* TIME */}
					<Menu.Item  position='right' style={{right:10 }}>
						{/* <div className="App-header">
							<p className="App-clock">
								{this.state.time}
							</p>
						</div> */}
					</Menu.Item>

					{/* ADMINTOP */}
					{/* <Menu.Item  position='right' style={{right:95 }}>
						<Dropdown trigger={trigger} options={options} pointing='top left' icon={null} /> 
					</Menu.Item> */}
				</Menu>

				<Sidebar.Pushable as={Segment} style={{height: 620 , bottom:18 }} >

					{vertical ? null : (
					<VerticalSidebar animation={animation} direction={direction} visible={visible} />
					)}

					<Sidebar.Pusher dimmed={visible} >
						<Segment basic>

							<Switch>
								<Route exact path="/" component={EmployeeMain} />
								<Route path="/EmployeeMain" component={EmployeeMain} />
								<Route path="/AddEmployeeForm" component={AddEmployeeForm}/>
								<Route path="/EmployeeDetails/:id" exact component={EmployeeDetails}/>
								
								<Route path="/ApplicantMain" component={ApplicantMain} />
								<Route path="/AddApplicantForm" component={AddApplicantForm}/>
								<Route path="/ApplicantDetails/:id" exact component={ApplicantDetails}/>

								<Route path="/PayRoll" component={PayRoll}/>
								
								<Route path="/PayRoll" component={PayRoll}/>
								{/* <Route component={NotFound} /> */}
							</Switch>
							
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>

					
			</div>
)
}
}
