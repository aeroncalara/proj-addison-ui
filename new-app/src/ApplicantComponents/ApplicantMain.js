import React, { Component } from 'react';
import Header from '../ApplicantComponents/Header';
import Searchbar from '../ApplicantComponents/Searchbar';
import ApplicantHeader from '../ApplicantComponents/ApplicantHeader';
import ApplicantTable from '../ApplicantComponents/ApplicantTable';






class App extends Component {

 


  render() {

   




    return (
      <div className="App">
          <Header />
          <Searchbar />
          <ApplicantHeader />
          {/* <AddApplicantButton /> */}
          <ApplicantTable />          
      </div>        
    );
  }
}

export default App;
