import React from 'react'
import { List } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'
import { Menu,Sidebar } from 'semantic-ui-react'

const menuItems = [
  {
    icon: "users icon",
    endpoint: "/main/employees/",
    text: "Employee List"
  },
  {
    icon: "clock icon",
    endpoint: "/main/timelogs/",
    text: "Hours Rendered"
  },
  {
    icon: "money bill alternate outline icon",
    endpoint: "/main/payroll/",
    text: "Payroll"
  },
]

export const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
		as={ Menu }
		animation={ animation }
		direction={ direction }
		icon='labeled'
  	inverted    
  	vertical
		visible={ visible }
		width='thin'
	>
  	<List animated verticalAlign='middle' selection >
      {
        menuItems.map(item => {
          return <List.Item>
                  <NavLink exact activeClassName="active" to={ item.endpoint }>
                    <Menu.Item>
                    <i className={ item.icon } />
                      { item.text }		
                    </Menu.Item>
                  </NavLink>
                </List.Item>
        })
      }
  		</List>
  	</Sidebar>
  )