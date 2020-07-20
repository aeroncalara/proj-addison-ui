import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import axios from 'axios';
import jspdf from 'jspdf';
import {addison_api_url} from '../Utilities/config';

class PayslipReport extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee: this.props.item,
            employee_name: "JANUS X. XAVIER",
            base_salary: 30000,
            position: "WEB DEVELOPER",
            incentives: [],
            deductions: [],
            total: 0,
        }
        this.generatePDF = this.generatePDF.bind(this);
        this.getAllActiveIncentives = this.getAllActiveIncentives.bind(this);
    }
    
    incentives = [
        {description: "Early bird", amount: 100},
        {description: "Best attendance", amount: 3000},
        {description: "Most clients", amount: 100}
    ]

    deductions = [
        {description: "Destroyed item", amount: 100},
        {description: "Absence", amount: 3000},
        {description: "No report", amount: 100}
    ]

    details_level = 66

    componentDidMount(){
        this.setState({employee_name: this.state.employee.person.first + " " +this.state.employee.person.last});
        this.setState({position: this.state.employee.position.title, base_salary: this.state.employee.position.salary});
        this.getAllActiveIncentives();
    }

    getAllActiveIncentives = async () =>{
        let incentives_query = `
            query{
                getAllActiveIncentivesOfEmployee(employee_id:"${this.state.employee._id}"){
                    description
                    amount
                }
            }
        `

        let deductions_query = `
            query{
                getAllDeductionsOfEmployee(employee_id:"${this.state.employee._id}"){
                    description
                    amount
                }
            }
        `

        let incentives = await axios({
            url: addison_api_url,
            method: `post`,
            data: {
              query: incentives_query
            }
        })

        this.setState({ incentives: incentives.data.data.getAllActiveIncentivesOfEmployee });


        let deductions = await axios({
            url: addison_api_url,
            method: `post`,
            data: {
              query: deductions_query
            }
        })

        this.setState({ deductions: deductions.data.data.getAllDeductionsOfEmployee });

        let total = 0;
        this.state.incentives.map(incentive =>{
            total += parseFloat(incentive.amount);
        })

        this.state.deductions.map(deduction => {
            total -= parseFloat(deduction.amount);
        })

        total += this.state.base_salary;
        this.setState({total});
    }



    generatePDF = () =>{
        let date = new Date();

        let pdf = new jspdf('p', 'mm', 'a4');
        pdf.setFont("times");

        pdf.setFontSize(12);
        pdf.setFontSize(12);
        pdf.text(60, 60, this.state.employee_name);
        pdf.text(60, 67, this.state.position);
        pdf.text(60, 74, this.state.base_salary.toString());


        // (right, height)
        pdf.line(15, 18, 185, 18, "closed");
        pdf.line(15, 20, 185, 20, "closed");

        pdf.setFontSize("14");
        pdf.text(15,25, "RP INNOTECH");
        
        pdf.setFontSize("8");
        pdf.text(15,30, "#89 Jasmine Street San Isidro Village");
        pdf.text(15,35, "San Fernando, Pampanga.");

        // pdf.setFontSize("8")
        // pdf.text(65,34, "Generated as of" + new Date());
        
        // pdf.line(15, 37, 185, 37, "closed");
        // pdf.line(15, 39, 185, 39, "closed");

        pdf.setFontSize("13");
        pdf.setFontStyle("bold");
        pdf.text(15,50, "PERSONAL INFORMATION");
        pdf.line(15, 52, 185, 52, "closed");

        pdf.setFontSize(11);
        pdf.text(15, 60, "Employee Name: ");
        pdf.text(15, 67, "Position: ");
        pdf.text(15, 74, "Anual Salary: ");

        pdf.setFontSize("13");
        pdf.setFontStyle("bold");
        pdf.text(15,50, "EARNING STATEMENT");
        pdf.line(15, 52, 185, 52, "closed");


        // pdf.text(20, this.details_level, "INCENTIVES");
        // let current_y = this.details_level;
        // this.state.incentives.map(incentive =>{
        //     current_y += 8;
        //     pdf.text(20, current_y, incentive.description);
        //     pdf.text(65, current_y, incentive.amount.toString());
        // })

        // pdf.text(80, this.details_level, "DEDUCTIONS");
        // current_y = this.details_level;
        // this.state.deductions.map(deduction =>{
        //     current_y += 8;
        //     pdf.text(80, current_y, deduction.description);
        //     pdf.text(110, current_y, deduction.amount.toString());
        // })


        // pdf.text(140, this.details_level, "TOTAL");
        // pdf.text(140, this.details_level+10, this.state.total.toString())

        pdf.line(15, 195, 50, 195);
        pdf.text(15, 200, "         APPROVED BY:")

        pdf.line(15, 220, 50, 220);
        pdf.text(15, 225, "         CREATED BY:")

        pdf.line(0, 280, 220, 280, "closed");
        pdf.text(15, 286, "As signed, all of the information stated above is true and correct to best knowledge of the company.\nIn case any of the above information is false or untrue, the company may be held liable for.\nThis serves as an official document from the company\n")

        pdf.output('dataurlnewwindow');
    }

    render(){

        return(
            <div>
                <Button positive onClick={this.generatePDF}>View Payslip</Button>
            </div>
        )
    }
}

export default PayslipReport;