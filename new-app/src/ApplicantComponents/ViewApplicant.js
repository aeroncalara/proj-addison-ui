import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ViewApplicantForm from '../ApplicantComponents/ViewApplicantForm';
import { NavLink, Route} from 'react-router-dom'
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';



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
        <NavLink exact activeClassName="active" to="/ApplicantDetails">
        <button positive class="ui circular icon button">
        <i aria-hidden="true" class="eye icon"></i>
      </button>
</NavLink>
  <Route path="/ApplicantDetails" component={EmployeeDetails } />

      </div>    
        
    //   <Modal
    //   trigger={<Button className="ui button positive " onClick={this.handleOpen}>View</Button>}
    //   open={this.state.modalOpen}
    //   onClose={this.handleClose}
     
    // >
        
    //     <Modal.Header>View Applicant</Modal.Header>
    //       <Modal.Content>
    //           <ViewApplicantForm Employee={this.props.Employee} isEdit={this.state.isEdit} />
    //       </Modal.Content>
    //       <Modal.Actions>

    //           <div className="AddEmpModalButton">
    //               <Button color='red' onClick={this.handleClose} inverted>
    //               Cancel
    //               </Button>

    //               <Button color='green' onClick={this.handleEdit} inverted>
    //                 {this.state.isEdit !== true? "Edit":"Save"} 
    //               </Button>
    //             </div>      
    //           </Modal.Actions>
    //     </Modal>
    
    )
  }
}



