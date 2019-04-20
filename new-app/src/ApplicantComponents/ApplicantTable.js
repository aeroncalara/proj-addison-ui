// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';
import DeleteApplicant from '../ApplicantComponents/DeleteApplicant';
import './ApplicantTable.css';

import axios from 'axios';         //import axios from 'axios';
                           
                                   


                                    //add componentDidMount()
                                    //Create get all Applicants function
                                    //Get all Applicants : this.setState({Applicants: chenes})

                                      let my_query = 
                                       `query{
                                         getAllApplicants{
                                           person{
                                              first
                                              middle
                                              last
                                            }
                                          }
                                        }`
class ApplicantTable extends Component {

  // componentDidMount(){
  //   //Add get Applicants
  // }
  constructor(props){
    super(props);
    this.state = { 
      Applicants: [],
    }
  }

  componentDidMount(){
    this.getApplicants();
  }

  getApplicants = async () => {
    let Applicant_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ Applicants: Applicant_variable.data.data.getAllApplicants });
  }
  render() {

    //let sample_array = this.state.Applicants;
    //let Applicant_rows = sample_array.map(Applicant => {
    //   return {
    //   }
    // })
    const Applicants = this.state.Applicants;
    console.log(Applicants);
    
    let ApplicantTable = Applicants.map(Applicant => {
      return (

        
              <tr key={Applicant._id}>
              <td data-label="Name">{Applicant.person.first}</td>
              <td data-label="Age">{Applicant.person.middle}</td>
              <td data-label="Job">{Applicant.person.last}</td>
              <td data-label="Job">
            
                <ViewApplicant />
                <DeleteApplicant />
              </td>
              </tr> 
       
         
      )
    })
    //here

    return (
      <div className="ApplicantTable">

        <table className="ui celled table">
        <thead>
              <tr><th>Name</th>
              <th>Age</th>
              <th>Email Address</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
           {ApplicantTable}
          
           </tbody>
           <tfoot>
          <tr>
          <th colSpan="5">
          <div className="ApplicantPagination">
            <div className="ui right floated pagination menu ">
              <a className="icon item">
              <i className="left chevron icon"></i></a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
              <i className="right chevron icon"></i>
              </a>
            </div>
          </div>
          </th>
        </tr></tfoot>
        </table>
        
      </div>        
    );
  }
}
export default ApplicantTable;