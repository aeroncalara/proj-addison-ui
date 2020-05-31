import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

import './LoginForm.css'
import { user } from '../../api/user'

export default class LoginForm extends Component {
  constructor(props) {
		super(props)	
    this.state = {
			type: 'password',
			username: '',
			password: '',
    }
		this.showHide = this.showHide.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }
      
  showHide(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
    })  
	}

	handleChange = (e) => {
		const { target } = e;
		const { name, value } = target
		this.setState({ [name]: value })
	}
	
	signInSubmit = async () => {
		const { username, password } = this.state;
		await user.signIn(username, password).then( result => {
					const { success, message, data } = result.data.data.signIn;
					alert(message)
					if(success){
						this.setData(data)
						this.redirectLogin(data.role)
					} 
				})
	}

	redirectLogin = (role) => {
		if (role === "admin") {
			this.props.history.push("/main/employees");
		} else {
			this.props.history.push("/utility/StaffProfile");
		}
	}

	setData = ({ hash, logged_in, role }) => {
		localStorage.setItem("hash", hash);
		localStorage.setItem("logged_in", logged_in);
		localStorage.setItem("role", role);
	}

	handleEditingDone = (key) => {
		let copy_array = this.state.blogPost.slice();
		copy_array[key].text = this.onEdit;
		this.setState({blogPost: copy_array});
	}
      
	render() {
		return (
			<div>
				<label className="field a-field a-field_a1">
					<input 
						className="field__input a-field__input" 
						name="username" 
						placeholder="Username" 
						onChange={ this.handleChange } 
						value={ this.state.username }
					/>
          <span className="a-field__label-wrap">
            <span className="a-field__label">User name</span>
          </span>
				</label>
				<label className="field a-field a-field_a2">
					<input 
						className="field__input a-field__input" 
						name="password" 
						type={ this.state.type } 
						onChange={ this.handleChange } 
						value={ this.state.password } 
						placeholder="Password"
					/>
				  <span className="a-field__label-wrap">
						<span className="a-field__label">Password</span>
					</span>
				</label>
				<div className='showpassword' >
					<Label 
						className="password__show" 
						onClick={ this.showHide }
					>
						{ this.state.type === 'input' ? 'Hide password' : 'Show password' } 
					</Label>
					</div>
					<button 
						className="ui color1 button" 
						 size="large" 
						onClick={ this.signInSubmit }
					>
						Login
					</button>   
				</div>
		)
	}
}

