import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Popup, Button } from 'semantic-ui-react'

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
<<<<<<< HEAD
                        </Button>}
                        content='View Employee Profile'
=======
                        {/* <i aria-hidden="true" className="eye icon"></i> */}

                        </Button>}
                        content='View Employee Details'
>>>>>>> 9afaff996ea6d201a18b264a26c2f1fb97ac03b5
                        position='top center'
                    />
                </Link>
            </div>    
        )   
    }
}



