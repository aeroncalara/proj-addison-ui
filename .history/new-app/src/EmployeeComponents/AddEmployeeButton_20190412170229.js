import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './AddEmployeeButton.css';

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
            <Button class="ui right labeled icon button">
            <i className="right arrow icon"></i>
            Next
            </button>
        </div>
    )
  }
}

