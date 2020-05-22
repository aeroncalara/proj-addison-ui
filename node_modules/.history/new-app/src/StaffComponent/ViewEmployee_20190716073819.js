import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
                        trigger={<Button primary> View
                        {/* <i aria-hidden="true" className="eye icon"></i> */}

                        </Button>}
                        content='View Employee Details'
                        position='top center'
                    />
                </Link>
            </div>    
        )   
    }
}



