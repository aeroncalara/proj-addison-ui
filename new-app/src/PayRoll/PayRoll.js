import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form ,Button, Popup,Input  } from 'semantic-ui-react'

import PayRollTable from './PayRollTable';
import MonthlyPayrollTable from './MonthlyPayrollTable';

const panes = [

	{menuItem: 'Payroll', render: () =>
	<Tab.Pane> 
	<Form>
		<div className='EmpDetails'>
		<div className ='desc'>
			<i className="money bill alternate outline icon"/>
			
				Payroll
			
		</div>
		</div>
    

		<div>
		<PayRollTable/>
		</div>  

    {/* <div className="searchpayroll">
                <Popup
                    trigger={<div className="ui category search">
                    <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search..." />
                    <i className="search icon"></i>
                    </div>
                        <div className="results"></div>
                    </div>}
                    header='Employee Payroll Search'
                    content='You may search by Name'
                    on='focus'/>
              </div>
 */}

	</Form>
	</Tab.Pane> 
	},

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


