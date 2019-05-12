 import React, { Component } from 'react'
import './EmployeeHeader.css';
import { Menu ,Header,Tab, Form,List, Grid,Image,Button  } from 'semantic-ui-react'
import AddEmployeeButton from '../EmployeeComponents/AddEmployeeButton';
import EmployeeTable from '../EmployeeComponents/EmployeeTable';
import ViewEmployee from '../EmployeeComponents/ViewEmployee';
 



import axios from 'axios';        


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



 class EmployeeGrid extends Component 
 {

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
    console.log(employees);
    
    let employeeTable = employees.map((employee, index) => {
      return (

        
            //   <tr key={index}>
            //     <td data-label="Name">{employee.person.first}</td>
            //     <td data-label="Age">{employee.person.middle}</td>
            //     <td data-label="Job">{employee.person.last}</td>
            //     <td data-label="Job">
            //       <ViewEmployee Employee={employee}/>
            //       <DeleteEmployee Employee={employee} />
            //     </td>
            //   </tr> 
       
         
            
     
<Grid columns={5}  key={index}>
    
    <Grid.Row stretched>
      <Grid.Column>
      <div className='Grid'>
      <Button >
      
           <List verticalAlign='middle'>
       <List.Item>
       <div className='gridImg'>
             <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular />
           </div>
           </List.Item>
           {employee.person.first}
           <List.Item>
         
           </List.Item>
       </List>
     
       <List verticalAlign='left'>
                       <List.Item>
                         <i className="mobile icon"/>
                           +639167105579
                       </List.Item>
                       <List.Item>
                         <i className="text telephone icon"/>
                             +639167105579
                       </List.Item>
                       <List.Item
                         icon='mail' 
                           content={<a href='mailto:jack@semantic-ui.com'>
                               Dave@semantic-ui.com
                         </a>}
                       />
        </List>
  
            </Button>

      </div>
    
      </Grid.Column>
    </Grid.Row>
    </Grid>
       
      )
    }
    )
    //here

    return (
      
        <div>
        
        <Grid columns={5}>
    
    <Grid.Row stretched>
     
      {employeeTable}
     
    </Grid.Row>
    </Grid>
        
           </div>
 

 
       
    //   <div className="EmployeeTables">


    //     <table className="ui celled table">
    //     <thead>
    //           <tr><th>Name</th>
    //           <th>Age</th>
    //           <th>Email Address</th>
    //           <th>Actions</th>
    //       </tr>
    //       </thead>
    //       <tbody>
       
          
    //        </tbody>
    //        <tfoot>
    //       <tr>
    //       <th colSpan="5">
    //       <div className="EmployeePagination">
    //         <div className="ui right floated pagination menu ">
    //           <a className="icon item">
    //           <i className="left chevron icon"></i></a>
    //             <a className="item">1</a>
    //             <a className="item">2</a>
    //             <a className="item">3</a>
    //             <a className="item">4</a>
    //             <a className="icon item">
    //           <i className="right chevron icon"></i>
    //           </a>
    //         </div>
    //       </div>
    //       </th>
    //     </tr>
    //     </tfoot>
    //     </table>
        
    //   </div>        
    );





      
//      return (
//        <div>
         
            
//     <Grid columns={5}>

// <Grid.Row stretched>
//   <Grid.Column>
//   <div className='Grid'>
//   <Button>
//   <List verticalAlign='middle'>
//   <List.Item>
//   <div className='gridImg'>
//         <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular />
//       </div>
//       </List.Item>
//       <List.Item>
    
//       </List.Item>
//   </List>

//   <List verticalAlign='left'>
//                   <List.Item>
//                     <i className="mobile icon"/>
//                       +639167105579
//                   </List.Item>
//                   <List.Item>
//                     <i className="text telephone icon"/>
//                         +639167105579
//                   </List.Item>
//                   <List.Item
//                     icon='mail' 
//                       content={<a href='mailto:jack@semantic-ui.com'>
//                           Dave@semantic-ui.com
//                     </a>}
//                   />
//               </List>
//   </Button>
//   </div>

//   </Grid.Column>




// </Grid.Row>



 

// </Grid>


//        </div>
    
//      );


   }
}
// ╔┓┏╦━━╦┓╔┓╔━━╗
// ║┗┛║┗━╣┃║┃║00║
// ║┏┓║┏━╣┗╣┗╣╰╯║
// ╚┛┗╩━━╩━╩━╩2019??﻿
export default EmployeeGrid;