import React, {Component} from 'react';
import LoginTest from './LoginTest';
import RegisterTest from './RegisterTest';


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
            <div>
                {  
                    (this.state.current === 1) 
                    ? <LoginTest changeCurrent = {this.changeCurrent}></LoginTest> : 
                      <RegisterTest changeCurrent = {this.changeCurrent}></RegisterTest>
                }
            </div>
        )
    }
}

export default Testhome;