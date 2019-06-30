
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './index.css';
// import EmployeeMain from './EmployeeComponents/EmployeeMain';    
// import Home from './HomeComponents/Home';
// import ApplicantMain from './ApplicantComponents/ApplicantMain'
// import Notfound from './WebComponents/Notfound';
import HomeLandingPage from './HomeComponents/HomeLandingPage'
import HeaderSideBar from './WebComponents/HeaderSideBar'
import Login from './Login/Login';
// import { NavLink } from 'react-router-dom'
// import { Header } from 'semantic-ui-react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
});

const checkAuthentication = () => {
	return true;
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

								<AuthRoute path="/main/:directory" exact component={HeaderSideBar} />

								

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


