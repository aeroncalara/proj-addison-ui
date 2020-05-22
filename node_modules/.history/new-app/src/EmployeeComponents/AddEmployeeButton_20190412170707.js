import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
            <Button className="ui labeled icon button negative">
            <i className="plus icon"></i>
            Add New Employee
            </Button>
        </div>
    )
  }
}

