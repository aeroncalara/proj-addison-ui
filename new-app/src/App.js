
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
// import EmployeeMain from './EmployeeComponents/EmployeeMain';    
// import Home from './HomeComponents/Home';
// import ApplicantMain from './ApplicantComponents/ApplicantMain'
// import Notfound from './WebComponents/Notfound';
// import HomeLandingPage from './HomeComponents/HomeLandingPage'
import HeaderSideBar from './WebComponents/HeaderSideBar'
// import { NavLink } from 'react-router-dom'
// import { Header } from 'semantic-ui-react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  uri:"http://localhost:4000/graphql",
});


export default class App extends Component {

  render() {

    return (
      <ApolloProvider client={client}>
      <div>
        
      
        <Router>
          <HeaderSideBar>
          
            
        </HeaderSideBar>
      </Router>

    </div>
    </ApolloProvider>
    );
  }
}


