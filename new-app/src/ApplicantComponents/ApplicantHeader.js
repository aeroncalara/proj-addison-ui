import React, { Component } from 'react'
import './ApplicantHeader.css';
import { Menu ,Header } from 'semantic-ui-react'
import AddApplicantButton from '../ApplicantComponents/AddApplicantButton';

export default class ApplicantHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <div className = "ApplicantHeader">
          <Menu pointing secondary > 

          <Menu.Item name='Applicant' active={activeItem === 'Applicant'} onClick={this.handleItemClick} />

          <Menu.Item
            name='Departments'
            active={activeItem === 'Departments'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Flag Applicant'
            active={activeItem === 'Flag Applicant'}
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
                  <Header icon='users' content='Applicant' />
              </div>

              <div className="find">
                 <AddApplicantButton/>
              </div>


          </div>

          <div>
            <hr />
          </div>

            <div className='tableHeader'>
            
                <div className ='TableTitle'>
                    <p>
                    Applicant Table
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
          
           


      </div>
    )
  }
}
