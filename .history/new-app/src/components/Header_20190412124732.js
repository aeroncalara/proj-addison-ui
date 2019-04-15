import React, { Component } from 'react';
import '../App.css';
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Employees' },
  { key: 'review', name: 'Performance Assesment' },
  { key: 'events', name: 'Transcript' },
]
class Header extends Component {
  render() {
    return (
      <header className="App-header">
                <div className= "Menu">
                  <Menu items = {
                        items
                  }>  
                  </Menu>

                  {/* <ul className="list">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">Employees</a></li>
                    <li><a href="#contact">Performance</a></li>
                    <li><a href="#about"> Transcript</a></li>
                  </ul> */}
                </div>
      </header>
    );
  }
}

export default Header;
