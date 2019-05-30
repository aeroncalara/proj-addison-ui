import React, { Component } from 'react'
import './EmployeeHeader.css';
import { List,Tab, Form ,Button, Popup,Input  } from 'semantic-ui-react'
import AddEmployeeButton from '../EmployeeComponents/AddEmployeeButton';
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
import EmployeeGrid from '../EmployeeComponents/EmployeeGrid';
import { NavLink, Route} from 'react-router-dom'




const panes = [
		{ 
			menuItem: { key: 'users', icon: 'list', content: 'List' },
		render: () => <Tab.Pane> 

		<Form>
			<EmployeeTable/>
		</Form>
		</Tab.Pane> },


	{menuItem: { key: 'users', icon: 'th large', content: 'Grid' },
	render: () => <Tab.Pane>

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
		const { activeItem } = this.state
		return (
			<div>
				{/* <div className = "EmployeeHeader">
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
				</div> */}



{/* Grid */}
					<div className='emphead'>
					
							<div className ='empTitle'>
									{/* <Header icon='users' content='Employee'  /> */}

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
	{/* <Route path="/EmployeeDetails" component={EmployeeDetails } /> */}

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
									{/* <div className="ui category search">
									<div className="ui icon input">
										<input className="prompt" type="text" placeholder="Search..." />
										<i className="search icon"></i>
										 </div>
											<div className="results"></div>
										</div> */}
										 <Popup
				trigger={<div className="ui category search">
				<div className="ui icon input">
					<input className="prompt" type="text" placeholder="Search..." />
					<i className="search icon"></i>
					 </div>
						<div className="results"></div>
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
