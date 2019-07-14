import React, {Component} from 'react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';
import './ApplicantTable.css';
import { List, Image } from 'semantic-ui-react'
import HIre from '../ApplicantComponents/HIre'
import axios from 'axios';        
import { addison_api_url } from '../Utilities/config';


let my_query = 
`query
{
getAllApplicants
{
	_id
	person
	{
		first
		middle
		last
		date_of_birth
			address
			{
			number
			street
			city
			province
			country
			}
		contact{
		type
		number
		}
	}
	}
}
`
						
class ApplicantTable extends Component {

	constructor(props){
		super(props);
		this.state = { 
			applicants: [],
			}
	}

	componentDidMount(){
		this.getApplicants();
	}

	getApplicants = async () => {
	let applicant_variable = await axios({
		url: addison_api_url,
		method: `post`,
		data: {
		query: my_query
		}
	})

	this.setState({ applicants: applicant_variable.data.data.getAllApplicants });
	}


render() {

const applicants = this.state.applicants;
	let applicantTable = applicants.map((applicant, index) => {
		let contactTable = applicant.person.contact.map((contactInformation)=>{
		return(
			<div className="content">
				{contactInformation.type}
					<div className="sub header">
						{contactInformation.number}
					</div>
			</div>
		)
	})
		
		return (
			<tr key={applicant.id}>
				<td data-label="Name">
					<h4 className="ui image header">
						<Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />

						<div className="content">
							{applicant.person.first}
						</div>
					</h4>
				</td>

				<td data-label="Address">
					{applicant.person.address[0].city}
				</td>

				<td data-label="Contact Info">  
					<h4 className="ui image header">
						{contactTable}
					</h4>
				</td>
						
				<td data-label="Job">
					<List divided horizontal>
						<List.Item >
							<List.Content>
								<ViewApplicant item={applicant}/>
							</List.Content>
						</List.Item>

						<List.Item>
							<List.Content>
								<HIre Applicant={applicant} />
							</List.Content>
						</List.Item>
					</List>
				</td>
			</tr> 
	
		
	)
}
)
//here

return (
	<div className="ApplicantTables">
		<table className="ui teal table celled">
			<thead>
				<tr>
					<th>Applicant</th>
					<th>Address</th>
					<th>Contact Info.</th>
					<th> 
						<List divided horizontal>
							<List.Item>
								<List.Content>
									Actions
								</List.Content>
							</List.Item>

							<List.Item>
								<List.Content>
									Status
								</List.Content>
							</List.Item>
						</List>
					</th>
				</tr>
			</thead>
			
			<tbody>
				{applicantTable}
			</tbody>
		</table>
	</div>        
);
}
}
export default ApplicantTable;