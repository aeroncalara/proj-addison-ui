import React, { Component } from 'react'
import { Button, Form, Grid, Header, Label, Segment, Divider } from 'semantic-ui-react'
import './Login.css';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';




export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        	type: 'password',       
        }
        this.showHide = this.showHide.bind(this);
    }
      
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
        	type: this.state.type === 'password' ? 'input' : 'password'
        })  
    }
      
    render() {
        return (
          
            <div className='main'>
             
       
                <div className='LoginContent'>
                <Segment>
                
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
            		{/* <Grid columns={2} stackable textAlign='center'>
                                    <Grid.Column style={{ maxWidth: 445,height: 400 }} color={'teal'} className='grid'> */}
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
                                    </Grid.Column>

                                    <Grid.Column style={{ maxWidth: 450 }}  >
                                        <div className='rightside'>
                                            
                                            <Header as="h2" color="teal" textAlign="center">
                                                Login
                                            </Header>

                                            <Form size="large">
                                             
                                             <Form.Input fluid icon="user" iconPosition="left" placeholder="User Name"/>

                                        <Form.Input placeholder="Password" icon="lock" iconPosition="left" fluid type={this.state.type} className="password__input" onChange={this.passwordStrength}/>

                                        <div className='showpassword'>
                                             <Label className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Show' : 'Hide'} </Label>
                                        </div>

                                        <Button  icon='log out'  color='teal' content='Log in' fluid /> 
                                                
                                         </Form>

                                            <br/>
                                        <div className='forgotpassword'>
                                            <ForgotPassword/>
                                        </div>
                                          
                                        </div>
                                    </Grid.Column>
                           
                    </Grid>
                    <Divider vertical>Or</Divider>
  </Segment>
                </div>
            </div>
        )
    }
}

