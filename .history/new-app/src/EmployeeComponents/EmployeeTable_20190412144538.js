import React, { Component } from 'react'

export default class EmployeeTable extends Component {
  render() {
    return (
      <div>
        <table class="ui compact celled definition table">
  <thead class="thead-dark">
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
