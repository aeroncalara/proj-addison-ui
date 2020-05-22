import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div>
        <div class="ui button">
             <i class="heart icon"></i>
        </div>
     
         <div className="AddNewEmployee">
                 <Button positive>Add New Employee</Button>
         </div>
        </div>
    )
  }
}

