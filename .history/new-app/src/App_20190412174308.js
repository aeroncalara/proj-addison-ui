import React, { Component } from 'react';
import Header from './EmployeeComponents/Header';
import Footer from './EmployeeComponents/Footer';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';
import AddEmployeeButton from './EmployeeComponents/AddEmployeeButton';
import ViewEmployee from './EmployeeComponents/ViewEmployee';
class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Header />
          <Searchbar />
          <EmployeeHeader />
          <AddEmployeeButton />
          <EmployeeTable /> */}]
          <ViewEmployee />

      </div>        
    );
  }
}

export default App;