import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ViewEmployeeForm from '../EmployeeComponents/ViewEmployeeForm';
import TimeInOut from '../TimeInOutComponents/TimeInOut';
import { NavLink, Route} from 'react-router-dom'
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import { Popup } from 'semantic-ui-react'

export default class extends Component {

  // state = { 
  //   modalOpen: false, 
  //   isEdit: false
  // }

  // handleOpen = () => this.setState({ modalOpen: true })

  // handleClose = () => this.setState({ modalOpen: false })

  // handleEdit = () => {
  //   let status = this.state.isEdit;
  //   this.setState({ isEdit: !status });
  // }


  render() {
    return (
      <div>

{/* <Button className="ui button positive " onClick={this.handleOpen}>View</Button> */}
   
<NavLink exact activeClassName="active" to="/EmployeeDetails">
<Popup
          trigger={<button color='teal' positive class="ui circular icon button">
          <i aria-hidden="true" class="eye icon"></i>
        </button>}
          content='View Employee Details'
          position='top center'
        />
      
</NavLink>
  <Route path="/EmployeeDetails" component={EmployeeDetails } />

      </div>    
      
    //   <Modal
    //   trigger={<Button className="ui button positive " onClick={this.handleOpen}>View</Button>}
    //   open={this.state.modalOpen}
    //   onClose={this.handleClose}
     
    // >

        
    //     <Modal.Header>View Employee</Modal.Header>
    //       <Modal.Content>
    //           <ViewEmployeeForm Employee={this.props.Employee} isEdit={this.state.isEdit} />
    //       </Modal.Content>
    //       <Modal.Actions>

          
    //           <div className="AddEmpModalButton">
    //               <Button color='red' onClick={this.handleClose} inverted>
    //               Cancel
    //               </Button>

    //               <Button color='green' onClick={this.handleEdit} inverted>
    //                 {this.state.isEdit !== true? "Edit":"Save"} 
    //               </Button>

    //               <TimeInOut />
    //             </div>     

              

    //           </Modal.Actions>
    //     </Modal>
    
    )
  }
}



