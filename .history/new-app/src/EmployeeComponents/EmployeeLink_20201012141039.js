import React, { Component } from 'react'

export default class EmployeeLink extends Component {
  render() {
    return (
      <div>
          <CustomLink item={employee}/>
             <Route path="/EmployeeDetails" component={EmployeeDetails } />
      </div>
    )
  }
}
