import React, { Component } from 'react';
import './HomeMenu.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">               
            <ul className="navigation">
              <li ><a href="#">Home</a></li>
              <li ><a href="#">|</a></li>
              <li><a href="#">
              Employees
              </a></li>
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
