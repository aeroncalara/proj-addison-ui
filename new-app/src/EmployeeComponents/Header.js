import React, { Component } from 'react';
import '../App.css';
import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

// const items = [
//   { key: 'editorials', active: true, name: 'Employees' },
//   { key: 'review', name: 'Performance Assesment' },
//   { key: 'events', name: 'Transcript' },
// ]
class Header extends Component {
  render() {
    return (
      <header className="App-header">

           


{/* 
                <div className= "Nav">
                  <Menu items = {
                        items
                  }>  
                  </Menu>

                  {
                  
                  }
                </div> */}
                {/* <div className="Home">
                    <Button circular icon='home' />
                  </div> */}
                  
            <ul class="navigation">
              <li ><a href="#">Home</a></li>
              <li ><a href="#">|</a></li>
              <li><a href="#">Employees</a></li>
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
