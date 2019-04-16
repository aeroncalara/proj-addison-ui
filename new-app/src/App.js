import React, { Component } from 'react';
import Header from './EmployeeComponents/Header';
// import Footer from './EmployeeComponents/Footer';
import Searchbar from './EmployeeComponents/Searchbar';
import EmployeeHeader from './EmployeeComponents/EmployeeHeader';
import EmployeeTable from './EmployeeComponents/EmployeeTable';
// import EmployeeTableNew from './EmployeeComponents/EmployeeTableNew';
import AddEmployeeButton from './EmployeeComponents/AddEmployeeButton';

import axios from 'axios';

import ViewEmployee from './EmployeeComponents/ViewEmployee';

let my_query = 
  `query{
    getAllEmployees{
      person{
        first
        middle
        last
      }
    }
  }`

class App extends Component {

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
    
    let employeeTable = employees.map(employee => {
      return(

      
        <ul key={employee._id}>
          <li>{employee.person.first}</li>
          <li>{employee.person.middle}</li>
          <li>{employee.person.last}</li>
          <li><ViewEmployee ></ViewEmployee></li>
       </ul>
      )
    })




    return (
      <div className="App">
          <Header />
          <Searchbar />
          <EmployeeHeader />
          <AddEmployeeButton />
          <EmployeeTable />
          {/* <EmployeeTableNew /> */}

          {employeeTable}
          

      </div>        
    );
  }
}

export default App;
