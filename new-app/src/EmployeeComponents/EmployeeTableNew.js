import React, {Component} from 'react'
import {Table, Header, Image} from 'semantic-ui-react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import DeleteEmployee from '../EmployeeComponents/DeleteEmployee';
import './EmployeeTable.css';

export default class EmployeeTable extends Component {
  render() {
    return (
      <div className="EmployeeTable" >
         <Table celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Email Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>  
            <ViewEmployee />
            <DeleteEmployee />
               
        </Table.Cell>

      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
      
    </Table.Body>
  </Table>
        </div>
       
    )
  }
}
    