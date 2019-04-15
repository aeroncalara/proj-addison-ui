import React, { Component } from 'react'
import '../Searchbar.css';
export default class Searchbar extends Component {
  render() {
    return (
      
        <div className="searchBar">
            <div className="ui action input">
                <input type="text" placeholder="Search..."/>
                 <button className="ui icon button">
                      <i className="search icon">
                         </i>
                  </button>
            </div> 
         </div>

    )
  }
}
