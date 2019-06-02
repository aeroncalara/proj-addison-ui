import React, {Component} from 'react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';

import './ApplicantTable.css';
import { List, Image } from 'semantic-ui-react'
import HIre from '../ApplicantComponents/HIre'
import axios from 'axios';        


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
}
`
                            
class ApplicantTable extends Component {

  
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
    let applicant_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ applicants: applicant_variable.data.data.getAllApplicants });
  }

  render() {

    const applicants = this.state.epplicants;
    let applicantTable = applicants.map((applicant, index) => {

        let contactTable = applicant.person.contact.map((contactInformation)=>{

            return(
                <div className="content">
                    {contactInformation.type}
                    <div class="sub header">
                        {contactInformation.number}
                    </div>
                </div>
            )
        })
      return (

        
              <tr key={applicant.id}>
                <td data-label="Name">
                <h4 class="ui image header">
         <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
          <div class="content">
          {applicant.person.first}
          
        </div>
      </h4>
      </td>
                <td data-label="Address">{applicant.person.address[0].city}</td>
                <td data-label="Contact Info">  
                    <h4 class="ui image header">
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

      {/* <div className='head'>
          
          <div className ='Title'>
              <Header icon='users' content='Applicant' />
          </div>

          <div className="find">
              <div className="ui right aligned category search">
                   <div className="ui icon input">
                   <input className="prompt" type="text" placeholder="Search..." />
                   <i classn="search icon"></i>
                   </div>
                   <div classn="results"></div>
              </div>
          </div>


      </div> */}



        <table className="ui teal table celled">
        
        <thead>
              <tr><th>Applicant</th>
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
           {/* <tfoot>
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
        </tr>
        </tfoot> */}
        </table>
        
      </div>        
    );
  }
}
export default ApplicantTable;