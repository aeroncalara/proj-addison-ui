import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import ApplicantDetails from '../ApplicantComponents/ApplicantDetails';
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
					<Link to={"/ApplicantDetails/" +item._id}>
						<Popup
							trigger={<button className="ui circular icon button">
										<i aria-hidden="true" className="eye icon" />
									</button>}
									
							content='View Applicant Details'
							position='top center'
						/>

					</Link>

					<Route path="/ApplicantDetails" component={ApplicantDetails } />

				</div>

			)
	}
}




