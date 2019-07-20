import React, {Component} from 'react';
import './Navbar.css';
import logo from '../Logo_rp.png';
import iconfemale from '../iconfemale.png';
import iconmail from '../iconmail.png';
import iconnotif from '../iconnotif.png';
import icondash from '../dash.png';
import {Icon } from 'semantic-ui-react';
import Chart from './Chart';
import './Dashboard';
import Calendar from './Calendar'

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
                <div>
                    <div className = "sideDash">
                        <img src = {logo} className = "logo"></img>
                        <p className = "nameDash">Welcome,<a  href = ""> Admin!</a></p>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                        <a className = "tabs" href = "">DASHBOARD</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        <a className = "tabs" href = "">EMPLOYEE</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"/><g fill-rule="evenodd" clip-rule="evenodd"><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/></g></svg>
                        <a className = "tabs" href ="">ATTENDANCE</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"/><path fill="none" d="M4 6h16v12H4z"/><path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"/></svg>
                        <a className = "tabs" href = "">PAYROLL</a>
                    </div>
                    <div className = "container">
                        <div className ="emailDash">Email
                            <hr></hr>
                            Jane Doe <br></br>
                            Inquiries
                        </div>
                        <div className = "chartcalDash">
                            <div className ="chartDash">
                                <Chart />
                                <Chart />
                                <Chart />
                            </div>
                            <div className = "calDash">
                                <Calendar></Calendar>
                            </div>
                        </div>
                        <div className = "eventDash">
                            <div className ="activeDash"><hr></hr></div>
                            <div className = "activeDash"><hr></hr></div>  
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;

