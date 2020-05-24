import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Home.css';
import { Route, Switch} from 'react-router-dom'

import { VerticalSidebar } from '../../components/home/VerticalSidebar'
import HeaderMenu from '../../components/home/menu'

import EmployeeMain from '../../components/employee/EmployeeMain'

// import EmployeeMain from '../../../EmployeeComponents/EmployeeMain';

import EmployeeDetails from '../../../EmployeeComponents/EmployeeDetails';
import AddEmployeeForm from '../../../EmployeeComponents/AddEmployeeForm';

import EmployeeTimeLogs from '../../../EmployeeTimeLogs/EmployeeTimeLogs';

import PayRoll from '../../../PayRoll/PayRoll';
import AddAdminComponent from '../../../SuperAddminComponent/AddAdminComponent';

import {
	Segment,
	Sidebar,
} from 'semantic-ui-react'

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			animation: 'overlay',
			direction: 'left',
			dimmed: false,
			visible: false,
      open: false,
      activeItem: 'home',
		}
	}

	static propTypes = {
		color: PropTypes.string,
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleAnimationChange = animation => () => {
    this.setState({ animation, visible: !this.state.visible })
  }

	handleDimmedChange = (e, { checked }) => { this.setState({ dimmed: checked }) }

	handleDirectionChange = direction => () => { this.setState({ direction, visible: false }) }

	handleDirectionHide = direction => () => { this.setState({ direction, visible: false }) }

	render() {
		const { animation, direction, visible } = this.state
		const vertical = direction === 'bottom' || direction === 'top'
	
		return (
			<div>
        <HeaderMenu 
          {...this.props} 
          handleAnimationChange={ this.handleAnimationChange('push') } 
        />
				<Sidebar.Pushable as={Segment} style={{height: '90vh', bottom:18 }} >
					{vertical ? null : (
					<VerticalSidebar menu={ this.state.menu } animation={ animation } direction={ direction } visible={ visible } />
					)}
					<Sidebar.Pusher dimmed={visible} style={ { height: '90vh' } }>
						<Switch>
							<Route path="/main/employees/" component={ EmployeeMain } />
							<Route path="/main/employee/id/:id" component={ EmployeeDetails } />
							<Route path="/main/timelogs/" component={ EmployeeTimeLogs } />
							<Route path="/main/payroll/" exact component={ PayRoll } />
							<Route path="/main/addEmployee/" exact component={ AddEmployeeForm } />
							<Route path="/main/addAddminComponent/" exact component={ AddAdminComponent } />
						</Switch>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}
