import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import HeaderSideBar from '../WebComponents/HeaderSideBar'
import Login from './pages/login'
import Home from './pages/home/Home';
import EmployeeLounge from '../EmployeeTimeLogs/EmployeeLounge'
import StaffNav from '../StaffComponent/StaffNav'
import AddAdminComponent from '../SuperAddminComponent/AddAdminComponent'

const checkAuthentication = () => {
	let logged_in = localStorage.getItem("logged_in")
	if(logged_in === "true") {
		return true
	} else {
		return false
	}
}

const AuthRoute = ({component: Component, ...rest}) => (
  	<Route {...rest} render = { props => 
			checkAuthentication() ? 
			(<Component {...props} />): (<Redirect to={{pathname: '/signin/'}} />)
	}/>
)

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Redirect strict exact from="/" to="/signin/" />
					<Route path="/signin/" exact component={ Login } />
					{/* <AuthRoute path="/main/" exact component={ HeaderSideBar } />
					<AuthRoute path="/main/employees/" exact component={ HeaderSideBar } /> */}
					<AuthRoute path="/main/" exact component={ Home } />
					<AuthRoute path="/main/employees/" exact component={ Home } />
					<AuthRoute path="/main/employee/id/:id" exact component ={ HeaderSideBar } />
					<AuthRoute path="/main/timelogs/" exact component={ HeaderSideBar } />
					<AuthRoute path="/main/payroll/" exact component={ HeaderSideBar } />
					<AuthRoute path="/main/addEmployee/" exact component={ HeaderSideBar } />
					<AuthRoute path="/main/addAdminComponent/" exact component={ AddAdminComponent } />
					<Route path="/utility/lounge" exact component={ EmployeeLounge }></Route>
					<Route path="/utility/StaffProfile" exact component={ StaffNav }></Route>
					<AuthRoute path="/utility/ViewStaffProfile/" exact component={ StaffNav } />
				</Switch>
			</Router>
		);
  }
}