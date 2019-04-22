import React, { Component } from 'react';
import HomeHeader from '../HomeComponents/HomeHeader';
import Header from '../WebComponents/Header';



class Home extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <HomeHeader />
        
      </div>        
    );
  }
}

export default Home;
