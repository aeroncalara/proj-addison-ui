import React, { Component } from 'react'
import { Button,Modal,Icon } from 'semantic-ui-react'
import PayRollTable from './PayRollTable';
import {addison_api_url} from '../Utilities/config';

import axios from 'axios';
import jspdf from 'jspdf';


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
					start_date
					end_date
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
	
	generatePayrollPDF = () => {
		let pdf = new jspdf("p", "mm", "a4");
		pdf.setFont("times");

		console.log(this.state.payroll.entities);

		pdf.setFontSize(12);

        pdf.line(15, 18, 185, 18, "closed");
        pdf.line(15, 20, 185, 20, "closed");

        pdf.setFontSize("10");
		pdf.text(80,25, "MONTHLY PAYROLL REPORT");
		pdf.text(85, 29, `${this.state.payroll.start_date} - ${this.state.payroll.end_date}`);
        pdf.setFontSize("8")
        pdf.text(55,33, "Generated as of" + new Date());
		
		pdf.line(15, 36, 185, 36, "closed");
		pdf.line(15, 38, 185, 38, "closed");

		pdf.text(15, 46, "EMPLOYEE");
		pdf.text(50, 46, "BASE SALARY");
		pdf.text(87, 46, "DEDUCTIONS");
		pdf.text(128, 46, "INCENTIVES");
		pdf.text(160, 46, "TOTAL");

		let current_y = 50;
		let overall = 0;
		this.state.payroll.entities.map(entity => {
			
			let incentives_total = 0;
			let deductions_total = 0;
			if(entity.incentives.length = 0) incentives_total = 0;
			else entity.incentives.map(incentive => {incentives_total += incentive.amount});

			if(entity.deductions.length = 0) deductions_total = 0;
			else entity.deductions.map(deduction => {deductions_total += deduction.amount});
			
			let total = incentives_total - deductions_total + entity.base_salary;
			overall += total;
			
			pdf.text(10, current_y, entity.employee_name);
			pdf.text(55, current_y, entity.base_salary.toFixed(2).toString());
			pdf.text(90, current_y, deductions_total.toFixed(2).toString());
			pdf.text(132, current_y, incentives_total.toFixed(2).toString());
			pdf.text(163, current_y, total.toString());


			current_y += 4;
		})

		pdf.text(160, current_y+10, "IN TOTAL: " +overall.toString());


		pdf.line(15, 195, 50, 195);
        pdf.text(15, 200, "         APPROVED BY:")

        pdf.line(15, 220, 50, 220);
        pdf.text(15, 225, "         CREATED BY:")

        pdf.line(0, 280, 220, 280, "closed");
        pdf.text(15, 286, "As signed, all of the information stated above is true and correct to best knowledge of the company.\nIn case any of the above information is false or untrue, the company may be held liable for.\nThis serves as an official document from the company\n")

		pdf.output("dataurlnewwindow");
		pdf.save(`PAYROLL FOR ${this.state.payroll.start_date} - ${this.state.payroll.end_date}`);
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
									<PayRollTable item = {payroll}/>
							}
						</Modal.Content>

						<Modal.Actions>
							<Button primary onClick={this.close}> Back </Button>
							<Button secondary onClick={this.generatePayrollPDF}> Export to PDF </Button>
						</Modal.Actions>
				</Modal>
			</div>
		)
    }
}
