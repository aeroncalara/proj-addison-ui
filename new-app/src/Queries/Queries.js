	import { gql } from "apollo-boost";

	export const getEmployees = gql`{
		getAllEmployees{
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
					contact
					{
						type
						number
					}
			}
			position{
				title
				description
				salary
			  }
		}
			
	}`;



	export const ADD_EMPLOYEE = gql`
	mutation addEmployee($first: String!, $middle: String, $last: String!, $date_of_birth: String!, $contact: [Contact_Input], $address: [Address_Input], $sss: String, $tin: String, $philhealth: String, $hdmf: String, $title: String, $description: String, $salary: Float, $corrective_action: [Corrective_Action_Input], $work_history: [Work_History_Input], $transcript: [Transcript_Input] ){
		addEmployee(
		person: {
			first: $first,
			middle: $middle,
			last: $last,
			date_of_birth: $date_of_birth,
			contact: $contact,
			address: $address,      
		}
		sss: $sss,
		tin: $tin,
		philhealth: $philhealth,
		hdmf: $hdmf,
		position: {
			title: $title,
			description: $description,
			salary: $salary
		}
		corrective_action: $corrective_action,
		work_history: $work_history,
		transcript: $transcript
		) {
		_id
		}
	}
	`


	export const getApplicant = gql`{
	getAllApplicants{
		_id
		person{
			first
			middle
			last
			date_of_birth
			address{
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
	}`;


	export const ADD_APPLICANT = gql`
	mutation addApplicant ($first: String!, $middle: String, $last: String!, $date_of_birth: String!, $contact: [Contact_Input], $address: [Address_Input], $sss: String, $tin: String, $philhealth: String, $hdmf: String, $title: String, $description: String, $salary: Float, $corrective_action: [Corrective_Action_Input], $work_history: [Work_History_Input], $transcript: [Transcript_Input] ) {
		addApplicant(
		person: {
			first: $first,
			middle: $middle,
			last: $last,
			date_of_birth: $date_of_birth,
			contact: $contact,
			address: $address,      
		}
		sss: $sss,
		tin: $tin,
		philhealth: $philhealth,
		hdmf: $hdmf,
		position: {
			title: $title,
			description: $description,
			salary: $salary
		}
		corrective_action: $corrective_action,
		work_history: $work_history,
		transcript: $transcript
		) {
		message
		}
	}
	`