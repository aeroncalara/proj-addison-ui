import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import EmployeeHeader from './components/EmployeeHeader';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Searchbar />
          <EmployeeHeader />
      </div>        
    );
  }
}

export default App;
