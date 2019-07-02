import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import { Popup } from 'semantic-ui-react'

export default class extends Component {

    constructor(props){
        super(props);
        this.state = {
        item: props.item
        }
    }

    render() {

        const {item} = this.state;

        return (
            <div>
                <Link to={"/main/employee/id/" +item._id}>
                    <Popup
                        trigger={<button class="ui circular icon button">
                        <i aria-hidden="true" class="eye icon"></i>
                        </button>}
                        content='View Employee Details'
                        position='top center'
                    />
                </Link>
            </div>    
        )   
    }
}



