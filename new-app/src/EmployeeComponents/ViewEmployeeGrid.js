import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import EmployeeGrid from '../EmployeeComponents/EmployeeGrid';
import { Popup } from 'semantic-ui-react'

export default class extends Component {

constructor(props){
    super(props);
    this.state = {
        item: props.item
    }
}


render() {

    const {item} = this.state;

    return (
        <div>
            <Link className="ui button green" to={"/EmployeeDetails/" +item._id}>
            <EmployeeGrid/>
            </Link>

        <Route path="/EmployeeDetails" component={EmployeeDetails } />

        </div>    
                
            
    
    )
  }
}



