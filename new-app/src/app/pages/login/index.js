import React, { Component } from 'react'

import LoginForm from '../../components/login/LoginForm'

import './Login.css';

export default class Login extends Component {
	render() {
		return (
				<div className='main'>
					<div  className='LoginContainer'>
						<div className="left-box">
							<span class="left-text">
								RP Innotech
								<br/>
								<br/>
								<br/>
								Attendance And Payroll
							</span>
						</div>
						<div className="right-box">
							<span className="signinwith">Welcome</span>
								<LoginForm {...this.props} />
						</div>
					</div>
				</div>
		)
	}
}

