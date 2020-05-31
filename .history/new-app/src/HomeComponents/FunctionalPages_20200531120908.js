import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HeaderSideBar from '../WebComponents/HeaderSideBar';
import EmployeeMain from '../EmployeeComponents/EmployeeMain';
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';


class FunctionalPages extends Component {
    render(){
        return (
            <div>
                <HeaderSideBar></HeaderSideBar>
            </div>
        )
    }
}

export default FunctionalPages;