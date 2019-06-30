import React, { Component } from 'react'
import { Button, Form, Grid, Header, Label, } from 'semantic-ui-react'
import './Login.css';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Background from '../images/back.jpg';



export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        	type: 'input',       
        }
        this.showHide = this.showHide.bind(this);
    }
      
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
        	type: this.state.type === 'input' ? 'password' : 'input'
        })  
    }
      
    render() {
        return (
          
            <div className='main'>
             
       
                <div className='LoginContent'>
            		{/* <Grid columns={2} stackable textAlign='center'> */}
                            {/* <Divider vertical>or</Divider> */}

                                    {/* <Grid.Column style={{ maxWidth: 445,height: 400 }} color={'teal'} className='grid'> */}
                                    <List horizontal>
    <List.Item>
                                        <div className='leftside'>
                                            <Header as="h2" color="black" textAlign="center">
                                                Welcome to
                                            </Header>
                                            <Header as="h2" color="black" textAlign="center">
                                                Addison
                                            </Header>
                                            <p>
                                                Don't have account? please sign In
                                            </p>
                                            
                                            <Signup />
                                            
                                        </div>
                                        </List.Item>
    <List.Item>

                                    {/* </Grid.Column> */}

                                    {/* <Grid.Column style={{ maxWidth: 450 }}  > */}
                                        <div className='rightside'>
                                            <Header as="h2" color="teal" textAlign="center">
                                                Login
                                            </Header>

                                            <Form size="large">
                                             
                                             <Form.Input fluid icon="user" iconPosition="left" placeholder="User Name"/>

                                        <Form.Input icon="lock" iconPosition="left" fluid type={this.state.type} className="password__input" onChange={this.passwordStrength}/>

                                        <div className='showpassword'>
                                             <Label className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'} </Label>
                                        </div>

                                            <Button color="teal" fluid size="large">
                                                   Login
                                            </Button> 
                                                
                                         </Form>

                                            <br/>
                                        <div className='forgotpassword'>
                                            <ForgotPassword/>
                                        </div>
                                        </div>
                                        </List.Item>
   
   </List>
                                    {/* </Grid.Column> */}
                           
                    {/* </Grid> */}
                </div>
            </div>
        )
    }
}

