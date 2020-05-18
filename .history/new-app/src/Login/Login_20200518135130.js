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
            	
						<div className="left-box">

								<div className="left-text">
									<Header as="h2" color="white" textAlign="left">RP Innotech</Header>
									<Header as="h2" color="black" textAlign="center">Attendance and Payroll</Header>
									<Header as="h2" color="black" textAlign="center">System </Header>
								</div>
										
						</div>
						
							<div className="right-box">

							<span className="signinwith">Welcome</span>
								
								<label className="field a-field a-field_a1">

									<input className="field__input a-field__input" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>

									<span className="a-field__label-wrap">
										<span className="a-field__label">User name</span>
									</span>

								</label>
						

								<label className="field a-field a-field_a2">
									
									<input class="field__input a-field__input" name="password" type={this.state.type} onChange={this.handleChange} value={this.state.password} placeholder="Password"/>

									<span className="a-field__label-wrap">
										<span className="a-field__label">Password</span>
									</span>

								</label>


								<div className='showpassword' >

                                    	<Label className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide password' : 'Show password'} </Label>

                                </div>

								<Button color="teal" onClick={this.signIn}>Login</Button>  
								
                            </div>
				</div>
            </div>
        )
    }
}

