import React, {Component} from 'react'
import PayslipReport from './PayslipReport';

import axios from 'axios';
import jspdf from 'jspdf';
import {addison_api_url} from '../Utilities/config';
                         
class Payslip_Page extends Component {

  
	state = { open: false };

	closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
		this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
	};
	
	close = () => this.setState({ open: false });
	
	constructor(props) {
	super(props)
	this.state = {
		item: this.props.item,
		is_fetching: true,
		visible: true,
		isEdit : false,
		first_name: '',
		middle_name: '',
		last_name: '',
		date_of_birth: '',
	
		mobile_number: '',
		telephone_number: '',
		email_address: '',
	
		number:'',
		street: '',
		city: '',
		province:'',
		country: '',
	
		title:'',
		description:'',
		salary:'',
	
		tin:'',
		sss:'',
		philhealth:'',
		hdmf: '',
	
		sessions: [],
		incentives:[],
		deductions:[],
	
		employee: {
			_id: "",
			person:
				{
				first:'',
				middle:'',
				last:'',
				date_of_birth:'',
				
			contact:
				{
					type:'',
					number:'',
				},
	
				address:
				{
					number:'',
					street:'',
					city:'',
					province:'',
					country:'',
				}		
			},
	
			position:{
				title:'',
				description:'',
				salary:'',
			},
	
			tin:'',
			sss:'',
			philhealth:'',
			hdmf: '',
			},
			
		}
	}
	
	handleEdit = () => { 
		this.setState({ isEdit: !this.state.isEdit });
	}
	
	
	handleChange = (e) => {
		const {target} = e;
		const {name, value} = target;
		this.setState({[name]: value})
	}
	
	componentDidMount(){
		this.getEmployee();
		this.getIncentives();
		this.getDeductions();
		this.getTimeLogs();
	}
	

	
	
	getEmployee = async () => {
		let my_query = 
		`
			query
			{
				getEmployee(employee_id: "${this.props.match.params.id}")
				{
					_id
					person
					{
						first
						middle
						last
						date_of_birth
						contact
						{
								mobile_number
								telephone_number
								email_address
								
							}
						address
						{
							number
							street
							city
							province
							country
							
						}
					}
					position
					{
						title
						description
						salary
					}
					sss
					tin
					philhealth
					hdmf
				}
			}
		`
	
		let employee_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: my_query
			}
		})
	
		this.setState({ employee: employee_variable.data.data.getEmployee });
		//PERSONAL INFORMATION
		this.setState({ first_name: this.state.employee.person.first, middle_name: this.state.employee.person.middle, last_name: this.state.employee.person.last });
		this.setState({ date_of_birth: this.state.employee.person.date_of_birth});
		this.setState({ tin: this.state.employee.tin, sss: this.state.employee.sss, philhealth: this.state.employee.philhealth, hdmf: this.state.employee.hdmf });
		//CONTACT
		this.setState({ mobile_number: this.state.employee.person.contact.mobile_number});
		this.setState({ telephone_number: this.state.employee.person.contact.telephone_number});
		this.setState({	email_address: this.state.employee.person.contact.email_address});
	
		//ADDRESS
		this.setState({ number: this.state.employee.person.address[0].number, street: this.state.employee.person.address[0].street, city: this.state.employee.person.address[0].city, province: this.state.employee.person.address[0].province, country: this.state.employee.person.address[0].country});
		
		//POSITION
		this.setState({ title: this.state.employee.position.title, description: this.state.employee.position.description, salary: this.state.employee.position.salary });
		this.setState({is_fetching: false});
	}
	
	getIncentives = async () =>{
		let incentive_query = 
		`
			query{
				getAllActiveIncentivesOfEmployee(employee_id:"${this.props.match.params.id}"){
					  date_incurred
					  description
					  amount
					is_active
				}
			  }
		`
	
		let incentive_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: incentive_query
			}
		})
	
		this.setState({incentives: incentive_variable.data.data.getAllActiveIncentivesOfEmployee})
	}
	
	getDeductions = async () => {
		//INSERT QUERY HERE
		let deductions_query =
		`
			query{
				getAllActiveDeductionsOfEmployee(employee_id:"${this.props.match.params.id}"){
					date_incurred
					description
					amount
					is_active
				}
			}
		`
	
		let deductions_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: deductions_query
			}
		})
	
		this.setState({deductions: deductions_variable.data.data.getAllActiveDeductionsOfEmployee})
	}
	
	getTimeLogs = async () =>{
		let timelogs_query = 
		`
			query{
				getAttendanceOfEmployee(employee_id:"${this.props.match.params.id}"){
					sessions{
						date
						time_in
						time_out
						difference
					}
				}
			  }
		`
	  
		let timelogs_variable = await axios({
		  url: addison_api_url,
		  method: `post`,
		  data: {
			query: timelogs_query
		  }
		})
	
		this.setState({sessions: timelogs_variable.data.data.getAttendanceOfEmployee})
	  }

  render() {
    return (
      <div className="TimeLogsTables">
        <table className="ui teal table celled">
        
			<thead>
				<tr>
					<th>Payslip Date</th>
					<th>Action</th>
				</tr>

                <tr>
					<th>sample date</th>
					<th>
					{
								this.state.is_fetching?
								<p>Loading</p>
								:
							
										<PayslipReport item={this.state.employee}/>
							
							}
                    </th>
				
				</tr>

			</thead>

		

        </table>
        
    </div>        
    );
  }
}
export default Payslip_Page;

