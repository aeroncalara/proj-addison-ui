
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './index.css';
import HomeLandingPage from './HomeComponents/HomeLandingPage'
import HeaderSideBar from './WebComponents/HeaderSideBar';
import Login from './Login/Login';
import EmployeeLounge from './EmployeeTimeLogs/EmployeeLounge';
import StaffNav from './StaffComponent/StaffNav';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
});

const checkAuthentication = () => {
	let logged_in = localStorage.getItem("logged_in");
	if(logged_in === "true") return true;
	else return false;
	
}

const AuthRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => 
		checkAuthentication()? 
			(<Component {...props} />): (<Redirect to={{pathname: '/signin/'}} />)
	}/>
)

export default class App extends Component {
	render() {

		return (
			<ApolloProvider client={client}>
				
					<Router>
						<HomeLandingPage>
							<Switch>
								<Redirect strict exact from="/" to="/signin/" />
								<Route path="/signin/" exact component={Login} />

								<AuthRoute path="/main/" exact component={HeaderSideBar} />
								<AuthRoute path="/main/employees/" exact component={HeaderSideBar} />
								<AuthRoute path="/main/employee/id/:id" exact component ={HeaderSideBar} />
								<AuthRoute path="/main/timelogs/" exact component={HeaderSideBar} />
								<AuthRoute path="/main/payroll/" exact component={HeaderSideBar} />
								<AuthRoute path="/main/addEmployee/" exact component={HeaderSideBar} />
								<AuthRoute path="/main/addEmployee/" exact component={HeaderSideBar} />
								<Route path="/utility/lounge" exact component={EmployeeLounge}>
								<Route path="/utility/lounge" exact component={StaffNav}>

								</Route>

							</Switch>


						{/* <AuthRoute path ="/login">
						<HeaderSideBar>

						</HeaderSideBar> */}
						</HomeLandingPage>
					</Router>
				
			</ApolloProvider>
		);
  }
}


