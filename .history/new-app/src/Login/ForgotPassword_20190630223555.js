import React, { Component } from 'react'
import './Signup.css';
import {Item, Form ,Grid, Header,Button, Modal,Dropdown} from 'semantic-ui-react'

const options = [
    { key: 1, text: 'What was your favorite place to visit as a child?', value: 1 },
    { key: 2, text: 'What is the name of your favorite pet?', value: 2 },
    { key: 3, text: 'In what city were you born?', value: 3 },
    { key: 4, text: 'What high school did you attend?', value: 4 },
    { key: 5, text: 'What is the name of your first school?', value: 5 },
    { key: 6, text: 'What is your favorite movie?', value: 6 },
  ]
  
export default class ForgotPassword extends Component {


      showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
      }
      
	

	state = { open: false }

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
		this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
	}



  	close = () => this.setState({ open: false })

render() {

	const { open, closeOnEscape, closeOnDimmerClick } = this.state

	return (
		<div>		
			
			
            <Item>
      <Item.Content>
      <Item.Header as='a' basic color='black' content='Forgot Password?'  onClick={this.closeConfigShow(true, false)}/>
      </Item.Content>
    </Item>
        

                                                

		<Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
		  onClose={this.close}
		  basic
		  size='small'
        >


			<Modal.Content>
				<Form inverted>
					<Grid>
                    <div className='rightside'>

                        <Header as="h2" color="teal" textAlign="center">
                            forgot password
                        </Header>

                        <Form size="large">
                            
                            
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="User Name"/>

                        <Dropdown
                            fluid
                            search
                            selection
                            wrapSelection={false}
                            options={options}
                            placeholder='Choose a Question'
                        />
                        
                        <br/>

                            <Form.Input fluid icon="user" iconPosition="left" placeholder="Answer"/>

                            <Button color="teal" fluid size="large">
                                                   Confirm
                                            </Button> 

<br/>
                            <Form.Input fluid icon="user" iconPosition="left" placeholder="you're password is"/>
                            
                        </Form>
                        
                    </div>

					</Grid>		
				</Form>
			</Modal.Content>

			<Modal.Actions>
				<Button onClick={this.close} negative>
					cancel
				</Button>

					<Button
					onClick={this.addIncentive}
					positive
					labelPosition='right'
					icon='checkmark'
					content='Submit'
					/>
          	</Modal.Actions>
        </Modal>

	</div>
	)
}
}


