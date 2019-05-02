import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Header.css';
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
import { NavLink} from 'react-router-dom'
import EmployeeMain from '../EmployeeComponents/EmployeeMain';
import {

  Dropdown,
  Image,
  Header,
  Button,
  Input,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      
    <NavLink activeClassName="active" to="/">
                         Home
                   </NavLink>
    </Menu.Item>
    
    <Menu.Item as='a'>
    <NavLink exact activeClassName="active" to="/EmployeeMain">
                          Employee
                   </NavLink>
    </Menu.Item>
    <Menu.Item as='a'>
      
    <NavLink activeClassName="active" to="/ApplicantMain">
                         Hiring
                  </NavLink>
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}
export default class HeaderSideBar extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }
  
  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
       
        <Menu inverted style={{height:50}}>

        <Menu.Item style={{width:152 }} onClick={this.handleAnimationChange('push')} >
        <Icon name='bars' />
          RP INNOTECH
        </Menu.Item>

        <Menu.Item style={{bottom:21 }}>
        <div className="Search">
                           <div className="ui fluid category search">
                               <div className="ui icon input">
                                   <input className="prompt" type="text" placeholder="Search..."></input>
                                   <i class="search icon"></i>
                                 </div>
                         </div>
                             <div class="results"></div>
                         </div>
          </Menu.Item>


          <Menu.Item  position='right' style={{right:10 }}>
          <div className="App-header">
              <p>3:08 pm</p>
              </div>
          </Menu.Item>


          <Menu.Item  position='right' style={{right:100 }}>
         
          <Header as='h4' image>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                  <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
               
          </Menu.Item>
       

        </Menu>


     
  

        <Sidebar.Pushable as={Segment} style={{height: 1000 , bottom:18}}>
          {vertical ? null : (
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          )}

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
               
             <EmployeeMain />
            

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }

    
  
}




//   render() {
//     return (
//       <div className='App-header'>
        
       
//             <ul className='navigation'>

//               <li>
//               <div className="Search">
//                           <div className="ui fluid category search">
//                               <div className="ui icon input">
//                                   <input className="prompt" type="text" placeholder="Search animals..."></input>
//                                   <i class="search icon"></i>
//                                 </div>
//                         </div>
//                             <div class="results"></div>
//                         </div>
//               </li>

//               <li>
//             <NavLink activeClassName="active" to="/">
//                             Home
//                       </NavLink>
//               </li>
    
//               <li>
//             <NavLink exact activeClassName="active" to="/EmployeeMain">
//                             Employee
//             </NavLink>
//               </li>
//                 <li>
//             <NavLink activeClassName="active" to="/ApplicantMain">
//                                 Hiring
//                           </NavLink>
//             </li>
//           </ul>

//       </div>
//     )
//   }
// }

