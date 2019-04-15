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
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job"><Button className="ui button positive ">
            View
            </Button>
            <Button className="ui button danger ">
            Delete
            </Button>
            </td>
            </tr>
            <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
            <td data-label="Job"><Button className="ui button positive ">
            View
            </Button></td>
            </tr>
            <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
            <td data-label="Job"><Button className="ui button positive ">
            View
            </Button></td>
            </tr>
            
            
        </tbody>
</table>
        </div>
       
    )
  }
}
    