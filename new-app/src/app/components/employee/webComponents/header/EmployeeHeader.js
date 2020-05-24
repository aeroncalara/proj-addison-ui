
import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'

import './EmployeeHeader.css'

export default class EmployeeHeader extends Component {
  render() {
    return (
      <div className='emphead'>				
        <div className ='empTitle'>
          <List horizontal size='massive'>
            <List.Item>
              <i className="user icon"/>
                Employee
            </List.Item>
          </List>
        </div>
        <div className="findemp">
          { /* Add Staff */ }
          <NavLink exact activeClassName="active" to="/main/addEmployee/">
            <Button color='blue'>
              <i className="plus icon"></i>
                Add Staff
            </Button>
          </NavLink>
        </div>
      </div>
    )
  }
}
