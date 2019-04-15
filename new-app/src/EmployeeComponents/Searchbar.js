import React, { Component } from 'react'
import './Searchbar.css';
import { Button } from 'semantic-ui-react'

export default class Searchbar extends Component {
  render() {
    return (
      
        <div className="searchBar">
            <div className="ui fluid action input">
                <input className="prompt" type="text" placeholder="Search..."/>
                 <Button className="ui icon button blue">
                      <i className="search icon">
                         </i>
                  </Button>
            </div> 
         </div>

        

    )
  }
}
