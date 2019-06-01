import React, { Component } from 'react'
import './incentives.css';
import { List,Tab, Form ,Grid, Segment } from 'semantic-ui-react'
import IncentivesList from '../EmployeeComponents/IncentivesList';



const panes = [

	{menuItem: 'Add Incentives', render: () =>
	<Tab.Pane> 
<Form inverted>

		
		<Grid>
	<Grid.Column width={11}>
	<Segment raised inverted>
			
	
	<Form.Group widths="equal">
          <Form.Input fluid label="Amount" placeholder="Amount" />
          <Form.Input fluid label="Date Given" placeholder="Date Given" />
        </Form.Group>
        <Form.TextArea label="Description" placeholder="Description" />
        <Form.Button>Submit</Form.Button>
	</Segment>
	</Grid.Column>
	</Grid>		
	
	</Form>
	</Tab.Pane> 
	},

	{menuItem: 'Incentives list', render: () => 
	<Tab.Pane>
	<Form>

<IncentivesList/>

	</Form>
	</Tab.Pane>
	},	
]



export default class PayRoll extends Component {
  

  render() {
  
    return (
      <div>
          
            
<div className='IncentivesTabs'>    
		<Tab style={{width:'100%' }} menu={{ secondary: true, pointing: true }}panes={panes} />
					</div>


      </div>
    )
  }
}


