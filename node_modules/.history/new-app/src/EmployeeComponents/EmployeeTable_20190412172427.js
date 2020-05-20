import React, {Component} from 'react'
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react'


export default class EmployeeTable extends Component {
  render() {
    return (
      <div className="EmployeeTable" >
        <table class="ui celled table">
        <thead>
            <tr><th>Name</th>
            <th>Age</th>
            <th>Email Address</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job">BUTTONS</td>
            </tr>
            <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job">Engineer</td>
            </tr>
            <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
            <td data-label="Job">Designer</td>
            
            </tr>
            
        </tbody>
</table>
        </div>
       
    )
  }
}
    