import React, { Component } from 'react';
import ApplicantHeader from '../ApplicantComponents/ApplicantHeader';
import ApplicantTable from '../ApplicantComponents/ApplicantTable';


class App extends Component {

  render() {

    return (
      <div className="App">
         
          <ApplicantHeader />
          {/* <ApplicantTable />           */}
      </div>        
    );
  }
}

export default App;
