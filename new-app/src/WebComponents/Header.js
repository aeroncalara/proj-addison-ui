import React, { Component } from 'react';
import './Header.css';
import { Dropdown , Menu} from 'semantic-ui-react'

 
class Header extends Component {
  render() {
    return (
      <header className="App-header">               
            <ul className="navigation">
              <li ><a href="#">Home</a></li>
              <li ><a href="#">|</a></li>
              <li><a href="#">
              Employee
              {/* <Menu secondary horizontal>
                  <Dropdown className="ui positive" item text='Employee'>
                    <Dropdown.Menu>
                    
                      <Dropdown.Item>Applicants</Dropdown.Item>
                    
                    </Dropdown.Menu>
                  </Dropdown>
               </Menu> */}
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
