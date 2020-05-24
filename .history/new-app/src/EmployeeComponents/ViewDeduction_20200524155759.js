import React, { Component } from 'react'
import { Button, Modal ,Form, Grid, Segment} from 'semantic-ui-react'

export default class ViewDeduction extends Component {

    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })
  
    render() {
        const { open, closeOnEscape, closeOnDimmerClick } = this.state

        return (
            <div>
           		<Button primary onClick={this.closeConfigShow(true, false)}>View</Button>
					<Modal
					open={open}
					closeOnEscape={closeOnEscape}
					closeOnDimmerClick={closeOnDimmerClick}
					onClose={this.close}
					size='small'
					>

					<Modal.Header>View Deduction</Modal.Header>

						<Modal.Content>
							<Form inverted>

								<Grid>
									<Grid.Column width={11}>
										<Segment raised inverted>

											<Form.Group widths="equal">
												<Form.Input fluid label="Amount" placeholder="Amount" readOnly />
												<Form.Input fluid label="Date Given" placeholder="Date Given" readOnly/>
											</Form.Group>

											<Form.TextArea label="Description" placeholder="Description" readOnly/>
										</Segment>
										
									</Grid.Column>
								</Grid>	

							</Form>
						</Modal.Content>

			<Modal.Actions>
					<Button
					onClick={this.close}
					positive
					labelPosition='right'
					icon='checkmark'
					content='ok'
					/>
          	</Modal.Actions>
        </Modal>

          </div>
        )
    }
}
