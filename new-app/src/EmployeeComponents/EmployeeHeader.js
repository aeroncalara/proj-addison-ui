import React, { Component } from 'react'
import './EmployeeHeader.css';
import { List,Tab, Form ,Button, Popup, } from 'semantic-ui-react'
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
									{/* <AddEmployeeButton/> */}
						<NavLink exact activeClassName="active" to="/AddEmployeeForm">
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

					<div className='tableHeader'>
						<div className="Button">
							<Popup
								trigger={
									<div className="ui category search">
										<div className="ui icon input">
											<input className="prompt" type="text" placeholder="Search..." />
												<i className="search icon"></i>
										</div>
											<div className="results"/>
									</div>}
								header='Employee Search'
								content='You may search by Name, Position and Department'
								on='focus'
							/>
						</div>
					</div>
					
				<div className='TableTabs'>    
					<Tab style={{width:'100%' }} menu={{ fluid: true, vertical: false, tabular: true }}panes={panes} />
				</div>
			</div>
		)
	}
}
