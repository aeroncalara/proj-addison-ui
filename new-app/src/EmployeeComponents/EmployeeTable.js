import React, {Component} from 'react'
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
import './EmployeeTable.css';
import { List, Image } from 'semantic-ui-react'
import TimeInOut from '../TimeInOutComponents/TimeInOut';
import axios from 'axios';        


let my_query = 

`query
{
    getAllEmployees
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
            type
            number
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
      }
    }
  }
`


                                 
class EmployeeTable extends Component {

  constructor(props){
    super(props);
    this.state = { 
      employees: [],
    }
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = async () => {
    let employee_variable = await axios({
      url: `http://localhost:4000`,
      method: `post`,
      data: {
        query: my_query
      }
    })

    this.setState({ employees: employee_variable.data.data.getAllEmployees });
  }
  render() {

    const employees = this.state.employees;
    let employeeTable = employees.map((employee, index) => {

        let contactTable = employee.person.contact.map((contactInformation)=>{
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

            <tr key={employee.id}>
                <td data-label="Name">
					<h4 class="ui image header">
						<Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' size='mini'circular />
						<div class="content">
							{employee.person.first}
								<div className="sub header">
									{employee.position.title}
								</div>
						</div>
					</h4>
      			</td>

				<td data-label="Address">
					{employee.person.address[0].city}
				</td>

                <td data-label="Contact Info">  
                    <h4 class="ui image header">
                    	{contactTable}
                	</h4>
           		</td>

                <td data-label="Job">

                <List divided horizontal>

                <List.Item >
					<List.Content>
						<ViewEmployee item={employee}/>
					</List.Content>
                </List.Item>

                

					<List.Item>
						<List.Content>
							<TimeInOut item={employee._id} />
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
      
      

      <div className="EmployeeTables">


        <table className="ui teal table celled">
        
        <thead>
              <tr><th>Employee</th>
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
           {employeeTable}
        </tbody>
           
        </table>
        
      </div>        
    );
  }
}
export default EmployeeTable;