import React, { Component } from 'react'
import { Button,Modal,Icon } from 'semantic-ui-react'
import TimeTable from './TimeTable';
import axios from 'axios';
import {addison_api_url} from '../Utilities/config';


export default class ViewPayRoll extends Component {
    state = { open: false }

    constructor(props){
        super(props);
        this.state = {
			item: this.props.item,
			payroll: {},
			is_fetching: true,
		}
	
	}
	
	componentDidMount(){
		this.getPayroll();
	}

	getPayroll = async () => {
		let get_payroll_query = 
		`
			query{
				getPayroll(payroll_id:"${this.state.item}"){
					_id
					release_date
					total_pay
					entities{
						_id
						employee_id
						employee_name
						base_salary
						deductions{
							date_incurred
							description
							amount
						}
						incentives{
							date_incurred
							description
							amount
						}
						total_pay
					}
				}
			}
		`

		let payroll_variable = await axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: get_payroll_query
			}
		})

		this.setState({payroll: payroll_variable.data.data.getPayroll})
		this.setState({is_fetching: false});
		
	}

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })

	render() {
		const { open, closeOnEscape, closeOnDimmerClick, payroll, is_fetching } = this.state;
		return (
			<div>
				<Button primary onClick={this.closeConfigShow(true, false)}>View</Button>
					<Modal
						open={open}
						closeOnEscape={closeOnEscape}
						closeOnDimmerClick={closeOnDimmerClick}
						onClose={this.close}
					>
						<Modal.Header>	
							<div className='EmpDetails'>
								<div className ='desc'>
									<i className="money bill alternate outline icon"/>Payroll
								</div>
							</div>
						</Modal.Header>

						<Modal.Content image scrolling>
							{	
								is_fetching? 
									<div>Loading</div>
									:
									<TimeTable item = {payroll}/>
							}
						</Modal.Content>

						<Modal.Actions>


						<Button primary onClick={this.close}>
							back 
						</Button>

						<Button color='green'>
        					<Icon name='print' /> print payroll
     					</Button>

						


						</Modal.Actions>
				</Modal>
			</div>
		)
    }
}
