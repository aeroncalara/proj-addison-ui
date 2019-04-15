import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
            <Button className="ui right labeled icon button primary">
            <i className="plus icon"></i>
            Add New Employee
            </Button>
        </div>
    )
  }
}

