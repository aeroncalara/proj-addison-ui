import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
        <div className="ui button primary" >
             <i className="plus icon"></i>
        </div>
     
         <div className="AddNewEmployee">
                 <Button positive>Add New Employee</Button>
         </div>
        </div>
    )
  }
}

