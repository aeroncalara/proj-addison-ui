import React, { Component } from 'react'
import './EmployeeHeader.css';
import { Menu, Segment ,Header, Divider } from 'semantic-ui-react'


export default class EmployeeHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <div className = "EmployeeHeader">
          <Menu pointing secondary > 
          <Menu.Item name='Employee' active={activeItem === 'Employee'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Departments'
            active={activeItem === 'Departments'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Flag Employee'
            active={activeItem === 'Flag Employee'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='More' 
              active={activeItem === 'More'}
              onClick={this.handleItemClick}
              icon='caret down'
            />
          </Menu.Menu>
        </Menu>

          <div className='head'>
              <div className ='Title'>
                  <Header icon='users' content='Employee:' />
              </div>
              <div>
                  <hr />
              </div>
          </div>
      </div>
    )
  }
}
