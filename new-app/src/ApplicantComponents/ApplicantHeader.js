

import React, { Component } from 'react'
import './ApplicantHeader.css';
import { Menu ,Header,Tab, Form,List, Grid,Image,Button  } from 'semantic-ui-react'
import AddApplicantButton from '../ApplicantComponents/AddApplicantButton';
import ApplicantTable from '../ApplicantComponents/ApplicantTable';
import ApplicantGrid from '../ApplicantComponents/ApplicantGrid';
import { NavLink, Route} from 'react-router-dom'

// import ViewApplicant from '../ApplicantComponents/ViewApplicant';




const panes = [
    { 
      menuItem: { key: 'users', icon: 'list', content: 'List' },
    render: () => <Tab.Pane> 

    <Form>
    {/* <div className='EmpDetails'>
          
              <div className ='desc'>
              <i className="user icon"/>
                      List View
              </div>
    </div>

    <div>
      <hr className="hrtable" />
    </div>   */}
      <ApplicantTable/>
    </Form>
    </Tab.Pane> },


  {menuItem: { key: 'users', icon: 'th large', content: 'Grid' },
  render: () => <Tab.Pane>

    <Form>
        {/* <div className='EmpDetails'>
              
                  <div className ='desc'>
                  <i className="phone square icon"/>
                          Grid View
                  </div>
        </div> */}

        {/* <div>
          <hr className="hrtable" />
        </div>   */}
      <ApplicantGrid/>
        </Form>
      </Tab.Pane> },


 



]



export default class ApplicantHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {
    const { activeItem } = this.state
    return (
      <div>
        {/* <div className = "ApplicantHeader">
          <Menu pointing secondary > 

          <Menu.Item name='Applicant' active={activeItem === 'Applicant'} onClick={this.handleItemClick} />

          <Menu.Item
            name='Documents'
            active={activeItem === 'Documents'}
            onClick={this.handleItemClick}
          />
          
        </Menu>
        </div> */}



{/* Grid */}
          <div className='head'>
          
              <div className ='Title'>
                  <Header icon='users' content='Applicant' />
              </div>

              <div className="find">
              <NavLink exact activeClassName="active" to="/AddApplicantForm">
                 <Button color='blue'>
               <i className="plus icon"></i>
             Add New Applicant
            
                  </Button>
</NavLink>
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
                {/* <div className='View'> 
                      <div className="ui basic icon buttons">
                        <button className="ui button">
                          <i className="list icon"></i>
                  
                        </button>
                        <button className="ui button">
                          <i className="th large icon"></i>
                        </button>
                      
                      </div>
                    </div> */}
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
          
             <div className='TableTabs'>    
                <Tab style={{width:'100%' }} menu={{ fluid: true, vertical: false, tabular: true }}panes={panes} />
            </div>



      </div>
    )
  }
}
