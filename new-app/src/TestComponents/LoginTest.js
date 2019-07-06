import React, {Component} from 'react';
//import {Button} from 'semantic-ui-react';
// import * as Semantic from 'semantic-ui-react';
import {Form, Grid, Header, Message, Segment, Button} from 'semantic-ui-react';
import './LoginTest.css'
// import Background from './ba.jpg'
import RegisterTest from './RegisterTest.js'

import Background from './aa.jpg'


class LoginTest extends Component {

    constructor(props){
        super(props);
        this.state = {
            // start: true;
            username: '',
            email: '',
            password: '',
            changeCurrent: this.props.changeCurrent


        }
        console.log(this.state.changeCurrent)
    }
    
    submitLogin = (e) => {
        console.log("im logged")
    }


    render(){
        return( 
            
        <div className = "box">
            
        <style>{`
            body > div,
            body > div > div,
            body > div > div>
            body > div > div> div> div.box{
            
                height: 100%
            }
        `}
        </style>
            <Grid textAlign="center" style={{height:'100%'}} verticalAlign="middle">
            <Grid.Column style={{ maxWidth:1165 }}>
           
            
         <div className = "container">

            <a className = "title">
             Welcome to <a> Addison </a>
            </a>
      
            <div className = "wholeSet">
            <div className = "clickChoose">
                <a href onClick = {() => {this.state.changeCurrent(1)}}>Log in</a>
                <a className = "textReg" href onClick = {() => {this.state.changeCurrent(2)}}>Register</a>
            </div>
            
                <div className = "userIn">
                    <label htmlFor = "username">Username:</label>
                    <input type = "text"  name = "username" className = "login-input"
                    placeholder = "Username"               
                    />
                </div>
            
                <div className = "userIn">
                    <label htmlFor = "password">Password:</label>
                    <input type = "password"  name = "password" className = "login-input"
                    placeholder = "Password"               
                        />
                    </div>
            
                    <button type="button" className ="login-btn" onClick = {(this.submitLogin)}>       
                        Log in
                    </button>
                </div>
            </div>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}
    

export default LoginTest;




