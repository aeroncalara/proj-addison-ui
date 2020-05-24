
import React, { Component } from 'react';
import { Tab, Form } from 'semantic-ui-react'

import './EmployeeBody.css'

// import EmployeeTable from '../../../../../EmployeeComponents/EmployeeTable';
// import EmployeeGrid from '../../../../../EmployeeComponents/EmployeeGrid';
import EmployeeTable from '../../employeeList/EmployeeTable'
import EmployeeGrid from '../../employeeList/EmployeeGrid'

const panes = [
	{ 
	  menuItem: { icon: 'list', content: 'List' },
		render: () => 
			<Tab.Pane> 
				<Form>
					<EmployeeTable/>
				</Form>
			</Tab.Pane>
	},
	{
    menuItem: { icon: 'th large', content: 'Grid' },
		render: () => 
			<Tab.Pane>
				<Form>
					<EmployeeGrid/>
				</Form>
      </Tab.Pane> 
  },
]

export default class EmployeeBody extends Component {
  render() {
    return (
      <div className='TableTabs'>    
				<Tab 
					style={{ width:'100%' }} 
					menu={{ 
						fluid: true, 
						vertical: false, 
						tabular: true 
					}} 
					panes={panes} 
				/>
      </div>
    )
  }
}
