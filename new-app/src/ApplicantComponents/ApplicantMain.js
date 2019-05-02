import React, { Component } from 'react';
import HeaderSideBar from '../WebComponents/HeaderSideBar';
import AddApplicantButton from '../ApplicantComponents/AddApplicantButton';
import Searchbar from '../ApplicantComponents/Searchbar';
import ApplicantHeader from '../ApplicantComponents/ApplicantHeader';
import ApplicantTable from '../ApplicantComponents/ApplicantTable';


class App extends Component {

  render() {

    return (
      <div className="App">
          {/* <HeaderSideBar /> */}
          <Searchbar />
          <ApplicantHeader />
          <AddApplicantButton />
          <ApplicantTable />          
      </div>        
    );
  }
}

export default App;
