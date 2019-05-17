// import {Button} from 'semantic-ui-react'
import React, {Component} from 'react'

import HIre from '../ApplicantComponents/HIre';
import './ApplicantTable.css';
import { Dropdown, List,Image } from 'semantic-ui-react'
import axios from 'axios';   
import ViewApplicant from '../ApplicantComponents/ViewApplicant';
import DeleteApplicant from '../ApplicantComponents/DeleteApplicant';

                                   



let my_query = 
`
 
  query{
    getAllEmployees{
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
      }
    }
  }
`
class EmployeeTable extends Component {

 
  constructor(props){
    super(props);
    this.state = { 
      Employees: [],
    }
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = async () => {
    let Employee_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ Employees: Employee_variable.data.data.getAllEmployees });
  }
  render() {
    const Employees = this.state.Employees;
    console.log(Employees);
    
    let EmployeeTable = Employees.map(Employee => {
      return (

        
              <tr key={Employee._id}>
                   <td data-label="Name"><h4 class="ui image header">
         <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
          <div class="content">
          {Employee.person.first}
           
        </div>
      </h4>
      </td>
              <td data-label="Age">{Employee.person.middle}</td>
              <td data-label="Job">{Employee.person.last}</td>
              <td data-label="Job">
                
              <List divided horizontal>
                <List.Item>
                  
                  <List.Content>
                   <ViewApplicant Employee={Employee}/>
                  </List.Content>
                </List.Item>
                <List.Item>
                 
                  <List.Content>
                 
                  <HIre />
                  </List.Content>
                </List.Item>
                <List.Item>
    
                  {/* <List.Content>
                      <DeleteApplicant Employee={Employee} />
                  </List.Content> */}

                </List.Item>
          </List>
               
                
               
              </td>
              </tr> 
       
         
      )
    })
    //here

    return (
      <div className="EmployeeTable">

        <table className="ui teal table celled">
        <thead>
              <tr><th>Applicant</th>
              <th>Age</th>
              <th>Email Address</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
           {EmployeeTable}
          
           </tbody>
           <tfoot>
          <tr>
          <th colSpan="5">
          <div className="EmployeePagination">
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
export default EmployeeTable;