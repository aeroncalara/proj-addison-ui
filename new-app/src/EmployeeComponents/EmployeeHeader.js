import React, { Component } from 'react'
import './EmployeeHeader.css';
import { Menu ,Header } from 'semantic-ui-react'
import AddEmployeeButton from '../EmployeeComponents/AddEmployeeButton';

export default class EmployeeHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {
    const { activeItem } = this.state
    return (
      <div>
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
        </div>

          <div className='head'>
          
              <div className ='Title'>
                  <Header icon='users' content='Employee' />
              </div>

              <div className="find">
                 <AddEmployeeButton/>
              </div>


          </div>

          <div>
            <hr />
          </div>

            <div className='tableHeader'>
            
                <div className ='TableTitle'>
                    <p>
                    Employee Table
                    </p>
                 
                </div>
                <div className='View'> 
                      <div className="ui basic icon buttons">
                        <button className="ui button">
                          <i className="list icon"></i>
                  
                        </button>
                        <button className="ui button">
                          <i className="th large icon"></i>
                        </button>
                      
                      </div>
                    </div>
                <div className="Button">
                 

                  <div className="ui category search">
                  <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search..." />
                    <i className="search icon"></i>
                     </div>
                      <div className="results"></div>
                    </div>


                </div>

             </div>
          
             {/* <div className='tableHeader'>
        <Menu attached='top' tabular>
          <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
          <Menu.Item
            name='photos'
            active={activeItem === 'photos'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
         
        </Segment>
      </div> */}


      </div>
    )
  }
}
