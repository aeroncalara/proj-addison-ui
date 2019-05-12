
import React from 'react';
import EmployeeHeader from '../EmployeeComponents/EmployeeHeader';
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';


class App extends React.Component {

 

  render() {

    return (
      <div className="App">

          {/* <EmployeeDetails /> */}
          <EmployeeHeader />
          {/* <EmployeeTable /> */}
    
      </div>        
    );
  }
}

export default App;
