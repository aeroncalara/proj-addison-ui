import React, {Component} from 'react';
import LoginTest from './LoginTest';
import RegisterTest from './RegisterTest';
import {Form, Grid, Header, Message, Segment, Button} from 'semantic-ui-react';


class Testhome extends Component{

    constructor(props){
        super(props);
        this.state = {
            current: 1
        }

        this.changeCurrent = this.changeCurrent.bind(this)
    }

    changeCurrent = (value) => {
        this.setState ({
            current: value
        })
    }

    render(){
        return(
        <div className = "box" >
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
            <Grid.Column style={{ maxWidth:2000 }}>
           
            <div>
                {  
                    (this.state.current === 1) 
                    ? <LoginTest changeCurrent = {this.changeCurrent}></LoginTest> : 
                      <RegisterTest changeCurrent = {this.changeCurrent}></RegisterTest>
                }
            </div>

             </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default Testhome;