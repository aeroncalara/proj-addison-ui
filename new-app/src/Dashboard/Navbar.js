import React, {Component} from 'react';
import './Navbar.css';
import logo from '../Logo_rp.png';
import iconfemale from '../iconfemale.png';
import iconmail from '../iconmail.png';
import iconnotif from '../iconnotif.png';
import icondash from '../dash.png';
import {Icon } from 'semantic-ui-react'




class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <div className = "dashPage">
                <nav className = "navDash">
                    <ul>
                        <li><a href = ""><img alt = "icon"src= {iconfemale} className = "icon"></img></a></li>
                        <li><a href = ""><img alt = "icon" src={iconmail} className = "icon"></img></a></li>
                        <li><a href = ""><img alt = "icon" src={iconnotif} className = "icon"></img></a></li>  
                    </ul>
                </nav> 
                
                <div className = "sideDash">
                <img src = {logo} className = "logo"></img>
                    <p className = "nameDash">Welcome,<a  href = ""> Admin!</a></p>
                    <Icon name = "dashboard"></Icon>
                    <a className = "tabs" href = "">Dashboard</a>
                    <Icon name = "dashboard"></Icon>
                    <a className = "tabs" href = "">Employee</a>
                    <Icon name = "dashboard"></Icon>
                    <a className = "tabs" href ="">Attendance</a>
                    <Icon name = "dashboard"></Icon>
                    <a className = "tabs" href = "">Payroll</a>
                </div>
            </div>
        )
    }
}
export default Navbar;

