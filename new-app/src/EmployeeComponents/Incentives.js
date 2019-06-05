import React, { Component } from 'react'
import './IncentivesList.js';
import {Tab, Form ,Grid, Segment,Button, List, Modal} from 'semantic-ui-react'

import IncentivesList from '../EmployeeComponents/IncentivesList';

const panes = [

	{menuItem: 'Incentives list', render: () => 
		<Tab.Pane>
			<Form>
				<IncentivesList/>
			</Form>
		</Tab.Pane>
	},	
]

export default class PayRoll extends Component {

	state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

render() {
	const { open, closeOnEscape, closeOnDimmerClick } = this.state

	return (
		<div>		
			<div className='incentivehead'>				
				<div className ='incentiveTitle'>
					<List horizontal size='massive'>
					
					</List>
				</div>

				<div className="addincentive">
						<Button onClick={this.closeConfigShow(true, false)}>

									Add Insentives
						
						</Button>
					{/* </NavLink> */}
				</div>
			</div>

		<Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
		  onClose={this.close}
		  basic
		  size='small'
        >
			
		<Modal.Header>Add Incentives</Modal.Header>
			<Modal.Content>
				<Form inverted>
					<Grid>
						<Grid.Column width={11}>
							<Segment raised inverted>

								<Form.Group widths="equal">
									<Form.Input fluid label="Amount" placeholder="Amount" />
									<Form.Input fluid label="Date Given" placeholder="Date Given" />
								</Form.Group>

									<Form.TextArea label="Description" placeholder="Description" />
							</Segment>
						</Grid.Column>
					</Grid>		
				</Form>
			</Modal.Content>

			<Modal.Actions>
				<Button onClick={this.close} negative>
					cancel
				</Button>
					<Button
					onClick={this.close}
					positive
					labelPosition='right'
					icon='checkmark'
					content='Submit'
					/>
          	</Modal.Actions>
        </Modal>

		<div className='IncentivesTabs'>    
			<Tab style={{width:'100%' }} menu={{ secondary: true, pointing: true }}panes={panes} />
		</div>

	</div>
	)
}
}


