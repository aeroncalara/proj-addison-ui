import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
    
         <div className="AddNewEmployee">
                 <Button positive>Add New Employee</Button>
         </div>
     
    )
  }
}

