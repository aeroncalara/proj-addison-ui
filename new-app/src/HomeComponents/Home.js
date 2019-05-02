import React, { Component } from 'react';
import HomeHeader from '../HomeComponents/HomeHeader';
import HeaderSideBar from '../WebComponents/HeaderSideBar';



class Home extends Component {
  render() {

    return (
      <div className="App">
        <HeaderSideBar />
        <HomeHeader />
        
      </div>        
    );
  }
}

export default Home;
