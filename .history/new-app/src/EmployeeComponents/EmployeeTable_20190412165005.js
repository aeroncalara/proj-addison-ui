import React, {Component} from 'react'
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react'


export default class EmployeeTable extends Component {
  render() {
    return (
      <div className="EmployeeTable" >
        <table className="ui compact celled definition table" >
            <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Age</th>
                <th>E-mail address</th>
                <th>BUTTONS</th>
                </tr>

            </thead>
        </table>
        </div>
       
    )
  }
}
    