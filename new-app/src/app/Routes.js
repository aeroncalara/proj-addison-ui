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
	console.log(logged_in)
	if(logged_in === "true") {
		return true
	} else {
		return false
	}
}

const checkRole = (role) => {
	return role===localStorage.getItem("role")
}

const AuthRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render = { props => 
			checkAuthentication() ? 
			(<Component {...props} />): (<Redirect to={{pathname: '/signin/'}} />)
	}/>
)

const AdminAuthRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render = { props => 
			{
				if (checkAuthentication() && (checkRole("admin") || checkRole("super")))  {
						return (<Component {...props} />)
				}	
				return (<Redirect to={{pathname: '/signin/'}} />)
			}
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
					<AdminAuthRoute path="/main/" exact component={ HeaderSideBar } />
					<AdminAuthRoute path="/main/employees/" exact component={ HeaderSideBar } />
					<AdminAuthRoute path="/main/employee/id/:id" exact component ={ HeaderSideBar } />
					<AdminAuthRoute path="/main/timelogs/" exact component={ HeaderSideBar } />
					<AdminAuthRoute path="/main/payroll/" exact component={ HeaderSideBar } />
					<AdminAuthRoute path="/main/addEmployee/" exact component={ HeaderSideBar } />
					<AdminAuthRoute path="/main/addAdminComponent/" exact component={ AddAdminComponent } />
					<AuthRoute path="/utility/lounge" exact component={ EmployeeLounge } />
					<AuthRoute path="/utility/StaffProfile" exact component={ StaffNav } />
					<AuthRoute path="/utility/ViewStaffProfile/" exact component={ StaffNav } />
				</Switch>
			</Router>
		);
  }
}