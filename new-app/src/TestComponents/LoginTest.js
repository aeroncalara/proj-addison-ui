import React, {Component} from 'react';
//import {Button} from 'semantic-ui-react';
// import * as Semantic from 'semantic-ui-react';
import './LoginTest.css'
import Background from './aa.jpg'


class LoginTest extends Component {

    constructor(props){
        super(props);
        this.state = {
            // start: true;
            Username: ''
        }
    }
    
    render(){
        return(
            <div>
               <div className = "App">
                <img src = {Background}alt = "bg-main"></img>
                
               </div>
            </div>
        )
    }
}

export default LoginTest;