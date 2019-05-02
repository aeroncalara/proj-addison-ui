import React, { Component } from 'react'

export default class HomeLandingPage extends Component {
  render() {
    return (
      <div>
        {/* //Sidebar */}
        {this.props.children}
      </div>
    )
  }
}
