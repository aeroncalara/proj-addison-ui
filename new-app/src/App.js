// import Footer from './EmployeeComponents/Footer';
// import EmployeeTableNew from './EmployeeComponents/EmployeeTableNew';
import React, { Component } from 'react';
import Header from './EmployeeComponents/Header';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';
import AddEmployeeButton from './EmployeeComponents/AddEmployeeButton';
import ViewEmployee from './EmployeeComponents/ViewEmployee';





class App extends Component {

 


  render() {

   




    return (
      <div className="App">
          <Header />
          <Searchbar />
          <EmployeeHeader />
          <AddEmployeeButton />
          <EmployeeTable />
          {/* <EmployeeTableNew /> */}

       
          

      </div>        
    );
  }
}

export default App;
