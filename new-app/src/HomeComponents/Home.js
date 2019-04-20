import React, { Component } from 'react';
import HomeHeader from '../HomeComponents/HomeHeader';
import HomeMenu from '../HomeComponents/HomeMenu';



class Home extends Component {
  render() {

    return (
      <div className="App">
        <HomeMenu />
          <HomeHeader />
        
      </div>        
    );
  }
}

export default Home;
