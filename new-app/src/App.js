
import React from 'react';
import Header from './WebComponents/Header';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';
import AddEmployeeButton from './EmployeeComponents/AddEmployeeButton';
import HeaderTry from './WebComponents/HeaderTry';


class App extends React.Component {

 

  render() {

    return (
      <div className="App">
       <Header />
        
          <Searchbar />
          <EmployeeHeader />
          <AddEmployeeButton />
          <EmployeeTable />
      s

      </div>        
    );
  }
}

export default App;
