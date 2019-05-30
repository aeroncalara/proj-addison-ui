import React, {Component} from 'react'
import ViewApplicant from '../ApplicantComponents/ViewApplicant';
import DeleteApplicant from '../ApplicantComponents/DeleteApplicant';
import ApplicantDetails from '../ApplicantComponents/ApplicantDetails';
import './ApplicantTable.css';
import { Dropdown, List, Image } from 'semantic-ui-react'
import TimeInOut from '../TimeInOutComponents/TimeInOut';
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

    const Applicants = this.state.Applicants;
    let ApplicantTable = Applicants.map((Applicant, index) => {

        let contactTable = Applicant.person.contact.map((contactInformation)=>{
            return(
                <div class="content">
                    {contactInformation.type}
                    <div class="sub header">
                        {contactInformation.number}
                    </div>
                </div>
            )
        })
      return (

        
              <tr key={Applicant.id}>
                <td data-label="Name">
                <h4 class="ui image header">
         <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
          <div class="content">
          {Applicant.person.first}
            {/* <div class="sub header">
            {Applicant.position.title}
          </div> */}
        </div>
      </h4>
      </td>
                <td data-label="Address">{Applicant.person.address[0].city}</td>
                <td data-label="Contact Info">  
                    <h4 class="ui image header">
                    {contactTable}
                </h4>
            </td>
                <td data-label="Job">

                <List divided horizontal>

                <List.Item >
					<List.Content>
						<ViewApplicant item={Applicant}/>
					</List.Content>
                </List.Item>

                

                <List.Item>
					<List.Content>
						<HIre Applicant={Applicant} />
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
        </tr>
        </tfoot>
        </table>
        
      </div>        
    );
  }
}
export default ApplicantTable;