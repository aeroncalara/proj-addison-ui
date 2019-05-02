
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import EmployeeMain from './EmployeeComponents/EmployeeMain';    
import Home from './HomeComponents/Home';
import ApplicantMain from './ApplicantComponents/ApplicantMain'
import Notfound from './WebComponents/Notfound';
import HomeLandingPage from './HomeComponents/HomeLandingPage'
import HeaderSideBar from './WebComponents/HeaderSideBar'
import { NavLink } from 'react-router-dom'


export default class App extends Component {

  render() {

    return (
      <Router>
      <HomeLandingPage>
        <HeaderSideBar />
       
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/EmployeeMain" component={EmployeeMain} />
            <Route path="/ApplicantMain" component={ApplicantMain} />
            <Route component={Notfound} />
        </Switch>  
      </HomeLandingPage>
    </Router>
    );
  }
}


