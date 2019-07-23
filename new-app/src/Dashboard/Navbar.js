import React, {Component} from 'react';
import './Navbar.css';
import logo from '../Logo_rp.png';
import iconfemale from '../iconfemale.png';
import iconmail from '../iconmail.png';
import iconnotif from '../iconnotif.png';
import {Checkbox,icon } from 'semantic-ui-react';
import Chart from './Chart';
import PresentChart from './PresentChart'
import OnLeaveChart from './OnLeaveChart'
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
                        <div className = "Selection">
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                        <a className = "tabs" href = "">DASHBOARD</a>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        <a className = "tabs" href = "">EMPLOYEE</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"/><g fill-rule="evenodd" clip-rule="evenodd"><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/></g></svg>
                        <a className = "tabs" href ="">ATTENDANCE</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className= "iconSide" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"/><path fill="none" d="M4 6h16v12H4z"/><path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"/></svg>
                        <a className = "tabs" href = "">PAYROLL</a>
                    </div>
                    <div className = "container">
                        <div className ="emailDash">
                            <div className = "textbox"> Email</div>
                            <hr className="border"></hr>
                            <div className="email">
                            <div className = "circleLetter" style = {{backgroundColor: "pink"}}>L</div>
                            <div className = "textName">Jane Doe </div>
                            <div className = "textDetails">Inquiries</div>
                            <div className = "messageMail">Hi!! We are delight to inform you...<svg xmlns="http://www.w3.org/2000/svg" className="iconReply" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><path d="m23.25 22c-.27 0-.524-.146-.658-.391l-.021-.038c-2.243-4.051-6.517-6.571-11.153-6.571h-1.418v4.25c0 .301-.181.573-.458.691-.275.116-.599.058-.814-.153l-8.5-8.25c-.146-.141-.228-.335-.228-.538s.082-.397.228-.538l8.5-8.25c.216-.21.539-.27.814-.153.277.118.458.39.458.691v4.252c7.743.134 14 6.474 14 14.248 0 .343-.232.642-.564.727-.062.016-.124.023-.186.023zm-14-8.5h2.168c4.176 0 8.089 1.829 10.764 4.911-1.294-5.669-6.377-9.911-12.432-9.911h-.5c-.414 0-.75-.336-.75-.75v-3.227l-6.673 6.477 6.673 6.477v-3.227c0-.414.336-.75.75-.75z"/></svg></div>
                            <hr></hr>
                            </div>

                            <div className="email">
                            <div className = "circleLetter" style = {{backgroundColor: "#86B3CF"}}>J</div>
                            <div className = "textName">John Doe </div>
                            <div className = "textDetails">Welcome to Addison</div>
                            <div className = "messageMail">Hi!! We are delight to inform you...<svg xmlns="http://www.w3.org/2000/svg" className="iconReply" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><path d="m23.25 22c-.27 0-.524-.146-.658-.391l-.021-.038c-2.243-4.051-6.517-6.571-11.153-6.571h-1.418v4.25c0 .301-.181.573-.458.691-.275.116-.599.058-.814-.153l-8.5-8.25c-.146-.141-.228-.335-.228-.538s.082-.397.228-.538l8.5-8.25c.216-.21.539-.27.814-.153.277.118.458.39.458.691v4.252c7.743.134 14 6.474 14 14.248 0 .343-.232.642-.564.727-.062.016-.124.023-.186.023zm-14-8.5h2.168c4.176 0 8.089 1.829 10.764 4.911-1.294-5.669-6.377-9.911-12.432-9.911h-.5c-.414 0-.75-.336-.75-.75v-3.227l-6.673 6.477 6.673 6.477v-3.227c0-.414.336-.75.75-.75z"/></svg></div>
                            <hr></hr>
                            </div>
                            
                        </div>
                        <div className = "chartcalDash">
                            <div className ="chartDash">
                                <Chart />
                                <PresentChart />
                                <OnLeaveChart />
                            </div>
                                <div className = "calDash">
                                    <Calendar></Calendar>
                                </div>
                        </div>
                        <div className = "eventDash">
                            <div className ="activeDash">
                                <div className ="actList">
                                <div className = "textbox">Urgent Activities</div>
                                <i aria-hidden="true" className="plus circle link icon"></i>
                                <hr className="border"></hr>
                                <Checkbox className = "checkBox"/>
                                <div className = "textName time">7:00AM </div>
                                <div className = "textName text">Payroll Update</div>
                                <i aria-hidden="true" class="close link icon"></i>
                                <hr></hr>

                                <Checkbox className = "checkBox"/>
                                <div className = "textName time">2:00PM </div>
                                <div className = "textName text">Grocery</div>
                                <i aria-hidden="true" class="close link icon"></i>
                                <hr></hr>
                                </div>
                            </div>
                                
                            <div className = "activeDash">
                                <div className ="actList">
                            <div className = "textbox">Upcoming Events</div>
                            <i aria-hidden="true" className="plus circle link icon"></i>
                                <hr className = "border"></hr>
                                <Checkbox className = "checkBox"/>
                                <div className = "textName time">7:00AM </div>
                                <div className = "textName Event">AJ's Birthday<i aria-hidden="true" class="close link icon"></i>
                                <div  className = "subText">April 6,2019</div>
                                <hr></hr>
                                </div>

                                <Checkbox className = "checkBox"/>
                                <div className = "textName time">3:30PM </div>
                                <div className = "textName Event">Meeting with CEO<i aria-hidden="true" class="close link icon"></i>
                                <div  className = "subText">April 30,2019</div>
                                <hr></hr>
                                </div>
                                
                                 </div>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;

