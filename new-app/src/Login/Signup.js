import React, { Component } from 'react'
import './Signup.css';
import {Form ,Grid, Header,Button, Modal} from 'semantic-ui-react'
import axios from 'axios';
import {addison_api_url} from "../Utilities/config";

// const options = [
// 	{ key: 1, text: 'What was your favorite place to visit as a child?', value: 1 },
// 	{ key: 2, text: 'What is the name of your favorite pet?', value: 2 },
// 	{ key: 3, text: 'In what city were you born?', value: 3 },
// 	{ key: 4, text: 'What high school did you attend?', value: 4 },
// 	{ key: 5, text: 'What is the name of your first school?', value: 5 },
// 	{ key: 6, text: 'What is your favorite movie?', value: 6 },
// ]

export default class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			type: 'input',
			score: 'null',
			open: false,
			username: '',
			password: '',
			password_verified: '',
			email_address: '',
		}
		this.showHide = this.showHide.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
		
	showHide(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			type: this.state.type === 'input' ? 'password' : 'input'
		})  
	}

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
		this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
	}

	handleChange = (event) => {
		const { target } = event;
		const { value, name } = target;
		
		this.setState({[name]: value})
	}

	addUser = async () => {
		//User validation
		const { password, password_verified, username, email_address } = this.state;

		if(password.length < 6) {
			alert("Password can't be shorter than six characters")
		} else if(password !== password_verified) {
			alert("Passwords do not match!")
		} else {
			let add_user_mutation = `
				mutation {
					addUser(
						username: "${username}"
						password: "${password}"
						email_address: "${email_address}"
					){
						message
						success
					}
				}
			`

			await axios({
				url: addison_api_url,
				method: `post`,
				data: {
					query: add_user_mutation
				}
			}).then(result =>{
				const {success, message} = result.data.data.addUser;
				alert(message);

				if(success) {
					this.close()
				}
			})
		}
	}

	close = () => this.setState({ open: false })

	render() {
		const { open, closeOnEscape, closeOnDimmerClick } = this.state

		return (
			<div>		
				<Button color='black' content='Sign up' fluid onClick={this.closeConfigShow(true, false)}/>
				<Modal
					open={open}
					closeOnEscape={closeOnEscape}
					closeOnDimmerClick={closeOnDimmerClick}
					onClose={this.close}
					size='small'
				>		
				<Modal.Content>
					<Form inverted>
						<Grid>
							<div className='rightside'>
								<Header as="h2" color="teal" textAlign="center">
									Sign up
								</Header>
								<Form size="large">						
									<Form.Input name="username" fluid icon="user" iconPosition="left" placeholder="Username" onChange={ this.handleChange } value={ this.state.username }/>
									<Form.Input name="email_address" fluid icon="user" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} value={this.state.email_address}/>
									<Form.Input name="password" placeholder="Password" icon="lock" iconPosition="left" fluid type="password" className="password__input" onChange={this.handleChange} value={this.state.password}/>
									<Form.Input name="password_verified" placeholder="Verify Password" icon="lock" iconPosition="left" fluid type="password" onChange={this.handleChange} value={this.state.password_verified}/>

									{/* <Dropdown
										fluid
										search
										selection
										wrapSelection={false}
										options={options}
										placeholder='Choose a Question'
									/>
									<br/>

									<Form.Input fluid icon="user" iconPosition="left" placeholder="Answer"/> */}
								</Form>

							</div>
						</Grid>		
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={ this.close } negative>
						cancel
					</Button>
					<Button
						onClick={ this.addUser }
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


