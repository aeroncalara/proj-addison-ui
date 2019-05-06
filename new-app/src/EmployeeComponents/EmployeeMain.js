
import React from 'react';
// import HeaderSideBar from '../WebComponents/HeaderSideBar';
// import Searchbar from '../EmployeeComponents/Searchbar';
import EmployeeHeader from '../EmployeeComponents/EmployeeHeader';
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
// import AddEmployeeButton from '../EmployeeComponents/AddEmployeeButton';



class App extends React.Component {

 

  render() {

    return (
      <div className="App">

                
          {/* <Searchbar /> */}
          {/* <HeaderSideBar /> */}
          <EmployeeHeader />
          {/* <AddEmployeeButton /> */}
          <EmployeeTable />
    
      </div>        
    );
  }
}

export default App;
