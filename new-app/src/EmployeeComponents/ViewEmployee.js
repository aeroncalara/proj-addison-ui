import React, { Component } from 'react'
import { NavLink, Link, Route} from 'react-router-dom'
import EmployeeDetails from '../EmployeeComponents/EmployeeDetails';
import { Popup } from 'semantic-ui-react'

export default class extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: props.item
    }
  }


  render() {

    const {item} = this.state;

    return (
      <div>


   
{/* <NavLink exact activeClassName="active" to="/EmployeeDetails/"> */}
 <Link to={"/EmployeeDetails/" +item._id}>
<Popup
          trigger={<button class="ui circular icon button">
          <i aria-hidden="true" class="eye icon"></i>
        </button>}
          content='View Employee Details'

          position='top center'
        />
      </Link>

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



