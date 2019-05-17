import React, { Component } from 'react'
import './PayRoll.css';
import { List,Tab, Form ,Button, Popup,Input  } from 'semantic-ui-react'

import PayRollTable from './PayRollTable';

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
              
              <div className="searchpayroll">
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
          </div>

          <div>
           
            <hr className="hr"/>

          </div>
          
             <div className='payTable'> 
             <PayRollTable/>   
            </div>



      </div>
    )
  }
}
