import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigator from './components/navigator'
// import { Menu } from 'semantic-ui-react'

// const items = [
//   { key: 'editorials', active: true, name: 'Employees' },
//   { key: 'review', name: 'Performance Assesment' },
//   { key: 'events', name: 'Transcript' },
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Navigator/>
           <Footer />
      </div>        
    );
  }
}

export default App;
