import React, { Component } from 'react'
import { Button, Form, Grid, Header, Label, Divider } from 'semantic-ui-react'
import './Login.css';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import axios from 'axios';
import { addison_api_url } from '../Utilities/config';




export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
			type: 'password',
			username: '',
			password: '',
        }
		this.showHide = this.showHide.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }
      
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
        	type: this.state.type === 'password' ? 'input' : 'password'
        })  
	}

	handleChange = (e) => {
		const {target} = e;
		const {name, value} = target;
		this.setState({[name]: value});
	}
	
	signIn = async () => {
		const {username, password} = this.state;
		let sign_in_mutation = `
			mutation{
				signIn(
					username: "${username}",
					password: "${password}"
				){
					message
					success
					data{
						hash
						logged_in
					}
				}
			}
		`

		await axios({
			url: addison_api_url,
			method: `post`,
			data: {query: sign_in_mutation}
		}).then(result =>{
			const {success, message, data} = result.data.data.signIn;
			alert(message)
			if(success){
				this.setData(data);
				this.props.history.push("/main/employees");
			} 
		})
	}

	setData = ({hash, logged_in}) => {
		localStorage.setItem("hash", hash);
		localStorage.setItem("logged_in", logged_in);
	}

	handleEditingDone = (key) => {
		let copy_array = this.state.blogPost.slice();
		copy_array[key].text = this.onEdit;
		this.setState({blogPost: copy_array});
	}
      
    render() {
        return (
          
            <div className='main'>
             
       
               <div  className='LoginContainer'>
            		{/* <Grid> */}
                      
						{/* <Grid.Column color={'teal'}>
                            <div className='leftside'>
                            	<Header as="h2" color="black" textAlign="center">RP Innotech</Header>
                                <Header as="h2" color="black" textAlign="center">Attendance and Payroll</Header>
								<Header as="h2" color="black" textAlign="center">System </Header>
                                <p>Don't have account? Create an account</p>
                                <Signup />           
                            </div>
                        
						</Grid.Column> */}
						  <div class="left-box">


						  </div>
						
						{/* <Grid.Column>
                        	<div className='rightside'> */}
							<div class="right-box">
							<span class="signinwith">Welcome</span>
								
								<label class="field a-field a-field_a1">

									<input class="field__input a-field__input" name="username" fluid icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>

									<span class="a-field__label-wrap">
										<span class="a-field__label">User name</span>
									</span>

								</label>
						

								<label class="field a-field a-field_a2">
									
									{/* <input class="field__input a-field__input" placeholder="-" required  /> */}
									<i class="user icon"></i>
									<input class="field__input a-field__input" name="password" icon="lock" iconPosition="left" type={this.state.type} onChange={this.handleChange} value={this.state.password} placeholder="Password"/>

									<span class="a-field__label-wrap">
									<span class="a-field__label">Password</span>
									</span>

								</label>

								<div className='showpassword' >

                                    	<Label className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide password' : 'Show password'} </Label>
                                </div>

								<button class="ui color1 button" fluid size="large" onClick={this.signIn}>Login</button>   
								{/* <div className='forgotpassword'>
									<ForgotPassword/>
								</div> */}
							
								
                                {/* <Header as="h2" color="teal" textAlign="center">Login</Header>
								<Form size="large">
								
									<Form.Input name="username" fluid icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
									
									<Form.Input name="password" icon="lock" iconPosition="left" type={this.state.type} onChange={this.handleChange} value={this.state.password} className="password__input" placeholder="Password"/>

                                    <div className='showpassword'>
                                    	<Label className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'} </Label>
                                    </div>

                                    <Button color="teal" fluid size="large" onClick={this.signIn}>Login</Button>                 
                                </Form>

                                	<br/>
								<div className='forgotpassword'>
									<ForgotPassword/>
								</div> */}
                            </div>
                        {/* </Grid.Column> */}
                    {/* </Grid> */}
					</div>
                    {/* <Divider vertical>Or</Divider> */}
  
            </div>
        )
    }
}

