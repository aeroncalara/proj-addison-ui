import React, { Component } from 'react';
import Header from './EmployeeComponents/Header';
import Footer from './EmployeeComponents/Footer';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Searchbar />
          <EmployeeHeader />
          <EmployeeTable />
      </div>        
    );
  }
}

export default App;
