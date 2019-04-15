import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
            <i className="plus icon"></i>
            <Button className="ui right labeled icon button primary">
           
            Add New Employee
            </Button>
        </div>
    )
  }
}

