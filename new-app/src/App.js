// import Footer from './EmployeeComponents/Footer';
// import EmployeeTableNew from './EmployeeComponents/EmployeeTableNew';
import React, { Component } from 'react';
import Header from './WebComponents/Header';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';
import AddEmployeeButton from './EmployeeComponents/AddEmployeeButton';
// import ViewEmployee from './EmployeeComponents/ViewEmployee';
// import Home from './HomeComponents/Home';
// import ApplicantMain from './ApplicantComponents/ApplicantMain';

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
          {/* <Home /> */}
          {/* <ApplicantMain /> */}
          

      </div>        
    );
  }
}

export default App;
