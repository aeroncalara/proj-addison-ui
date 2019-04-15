import React, {Component} from 'react'
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react'


export default class EmployeeTable extends Component {
  render() {
    return (
      <div className="EmployeeTable">
          
<table class="ui compact celled definition table">
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
</table>
   

      </div>
    )
  }
}
