import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form  } from 'semantic-ui-react'


import MonthlyPayrollTable from './MonthlyPayrollTable';

const panes = [

	{menuItem: 'Monthly Payroll', render: () => 
	<Tab.Pane>
	<Form>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="calendar alternate outline icon"/>
				Monthly Payroll
		</div>
		</div>

		<div>
	<MonthlyPayrollTable/>
		</div>  
		
		
	</Form>
	</Tab.Pane>
	},	
]



export default class PayRoll extends Component {


render() {

	return (
	<div>
		
		<div className='Payrollhead'>
					<div className ='payTitle'>
			<List horizontal size='massive'>
							<List.Item>
								<i className="money bill alternate outline icon"/>
								PayRoll
							</List.Item>
						</List>

			</div>
			
			
		</div>

		<div>
		
			<hr className="hr"/>

		</div>
		
			
		<div className='PayrollTabs'>    
								<Tab style={{width:'100%' }} menu={{ secondary: true, pointing: true }}panes={panes} />
					</div>


	</div>
	)
}
}


