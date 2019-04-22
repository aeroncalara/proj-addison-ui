import React, { Component } from 'react';
import './Header.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Dropdown , Menu} from 'semantic-ui-react'

 
class Header extends Component {
  render() {
    return (
      <header className="App-header">               
            <ul className="navigation">
              

                <li>
                  <NavLink activeClassName="active" to="/Home">
                    Home
                  </NavLink>
                </li>

                <li ><a href="#">|</a></li>

                <li>
                  <NavLink exact activeClassName="active" to="/App">
                    Employee
                  </NavLink>
                </li>

                <li ><a href="#">|</a></li>

                <li>
                  <NavLink activeClassName="active" to="/ApplicantMain">
                    Hiring
                  </NavLink>
                </li>
                
                <li ><a href="#">|</a></li>

                <li><a href="#">Performance Assesment</a></li>
              <li ><a href="#">|</a></li>
              <li><a href="#">Transcript </a></li> 

            </ul>


            
           
      </header>
    );
  }
}

export default Header;
