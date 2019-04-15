import React, { Component } from 'react';
import Header from './EmployeeComponents/Header';
import Footer from './EmployeeComponents/Footer';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
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
