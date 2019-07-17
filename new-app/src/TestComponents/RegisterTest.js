import React, {Component} from 'react';
//import {Button} from 'semantic-ui-react';
// import * as Semantic from 'semantic-ui-react';
import './LoginTest.css'
// import Background from './aa.jpg'

class RegisterTest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password:'',
            changeCurrent: this.props.changeCurrent
        }
    }

    render(){
        return(
        <div className = "box">
        <div className = "container">
            <a className = "title">
                    Welcome to <a>Addison </a>
            </a>

            <div className = "wholeSet">
            <div className = "clickChoose">
                <a onClick = {() => {this.state.changeCurrent(1)}}>Log in</a>
                <a className = "textReg" onClick = {() => {this.state.changeCurrent(2)}}>Register</a>
            </div>

            <div className = "userReg">
                <label htmlFor = "Email">Email Add:</label>
                    <input type = "text" name = "email" className = "login-input"
                                      
                        />
            </div>
    
            <div className = "userReg">
                <label htmlFor = "Username">Username:</label>
                    <input type = "text" name = "username" className = "login-input"
                                      
                        />
            </div>

            <div className = "userReg">
                <label htmlFor = "password">Password:</label>
                <input type = "password" name = "password" className = "login-input"
                                 
                    />
            </div>

                <button className ="login-btn" onClick = {(this.submitLogin)}>
                    Register
                </button>
                </div> 
            </div>
            </div>  
        )
    }
}

export default RegisterTest;