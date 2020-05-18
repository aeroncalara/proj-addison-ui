import React, {Component} from 'react';
import {Button, Form, Segment, Grid, Header, Message, Modal, Transition} from 'semantic-ui-react';
import axios from 'axios';
import {addison_api_url} from '../Utilities/config';
import EmployeeLounge from '../EmployeeTimeLogs/EmployeeLounge.css'
import TIME from './TIME';

class EmployeeLounge extends Component {


 

    constructor(props){
        super(props);
        
        this.state = { time: new Date() }
        this.state = {
            employee_number: '',
            error_message: '',
            data: false,
            success: false,
            response: {},
            visible: false,
        };
    }

    toggleVisibility = () => this.setState({ visible: true })


    handleFocus = (e) => {
        this.setState({visible: false});
    }

    handleBlur = async (e) => {

        let get_status_query = `
            query{
                getAttendanceStatus(employee_number: "${this.state.employee_number}"){
                    message
                    success
                    data
                }
            }
        `

        let query_result = await axios({
            url: addison_api_url,
            method: 'post',
            data: {
                query: get_status_query
            }
        })


        
        let {success, data} = query_result.data.data.getAttendanceStatus;
        if(!success){
           this.setState({success})
        }else{
            this.setState({success});
            this.setState({data: data});
        }
    }

    handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;
        this.setState({[name]: value});
    }

    timeIn = async () => {
        let time_in_mutation =
        `
            mutation{
                timeInEmployee(employee_number: "${this.state.employee_number}"){
                    message
                    success
                    data
                }
            }
        `

        let time_in_result = await axios({
            url: addison_api_url,
            method: 'post',
            data: {
                query: time_in_mutation
            }
        })

        let {message, success, data} = time_in_result.data.data.timeInEmployee;
        this.setState({response: {message, success, data}});
        this.toggleVisibility();
    }

    timeOut = async () => {
        let time_out_mutation =
        `
            mutation{
                timeOutEmployee(employee_number: "${this.state.employee_number}"){
                    message
                    success
                    data
                }
            }
        `

        let time_out_result = await axios({
            url: addison_api_url,
            method: 'post',
            data: {
                query: time_out_mutation
            }
        })

        console.log("HEY");

        let {message, success, data} = time_out_result.data.data.timeOutEmployee;
        this.setState({response: {message, success, data}});
        this.toggleVisibility();

    }

  

  

    render(){

        const { time } = this.state; // retrieve the time from state

        let {employee_number, data, success, visible, response} = this.state;
        let button;


        console.log({success, data})

        if(!success){
          
        }else{
            button = (!data)? <Button primary onClick={this.timeOut}>Time out</Button>:<Button primary onClick={this.timeIn}>Time in</Button>;
        }


        return(
            <div className="login-form">
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div> div.login-form{
                        height: 100%
                    }
                `}

                </style>

             

                <Grid textAlign="center" style={{height:'100%'}} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth:450 }}>
                    <TIME/>
                        <Header as="h2" color="teal" textAlign="center">
                           Welcome to the Employee's Lounge
                        </Header>
			
                        <Form size="large" autoComplete="off">
							<Segment stacked>
								<Form.Input onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} name="employee_number" fluid icon="user" iconPosition="left" placeholder="Employee Number" />
								{button}
							</Segment>
                        </Form>

                        <Message>
                            <p> Enter your employee number to time in/out</p>
                        </Message>

                        <Transition visible={visible} animation="scale" duration={500}>
                            {success?
                                <p>{response.message}</p>:
                                <div></div>
                            }
                        </Transition>
                        
                    </Grid.Column>
                </Grid>

                
            </div>
        )
    }
}

export default EmployeeLounge;