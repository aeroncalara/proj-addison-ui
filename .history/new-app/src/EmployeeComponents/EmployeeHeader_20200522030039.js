import React, { Component } from 'react'
import './EmployeeHeader.css';
import { List,Tab, Form ,Button } from 'semantic-ui-react'
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
import EmployeeGrid from '../EmployeeComponents/EmployeeGrid';
import { NavLink} from 'react-router-dom'


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

	{menuItem: { icon: 'th large', content: 'Grid' },
		render: () => 
			<Tab.Pane>
				<Form>
					<EmployeeGrid/>
				</Form>
			</Tab.Pane> },
]



export default class EmployeeHeader extends Component {
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	state = { activeItem: 'bio' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render() {
		// const { activeItem } = this.state
		return (
			<div>
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
									
						{/* <NavLink exact activeClassName="active" to="/main/addEmployee/">
							<Button color='blue'>
								<i className="plus icon"></i>
									Add New Employee
							</Button>
						</NavLink> */}

						<NavLink exact activeClassName="active" to="/main/addAddminComponent/">
							<Button color='blue'>
								<i className="plus icon"></i>
									Add New Employee
							</Button>
						</NavLink>
					</div>
				</div>

				<div>
					<hr />
				</div>

				<div className='TableTabs'>    
					<Tab style={{width:'100%' }} menu={{ fluid: true, vertical: false, tabular: true }} panes={panes} />
				</div>
					
			</div>
		)
	}
}
