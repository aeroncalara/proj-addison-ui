// import React, { Component } from 'react'
// import './AddApplicantButton.css';
// import { Button, Modal} from 'semantic-ui-react'
// import AddApplicantForm from '../ApplicantComponents/AddApplicantForm';

// export default class AddApplicantButton extends Component {

//   state = { modalOpen: false }

//   handleOpen = () => this.setState({ modalOpen: true })

//   handleClose = () => this.setState({ modalOpen: false })

//   render() {
//     return (
//         <div className="AddButton" >
           
//            <Modal trigger={<a onClick={this.handleOpen}>
//             <i className="plus icon"></i>
//             Add New Applicant
//             </a>}
//             open={this.state.modalOpen}
//             onClose={this.handleClose}
//             // basic size='small'
//             >
            
  
//                 <Modal.Header>Add New Applicant</Modal.Header>
//                   <Modal.Content>
//                       <AddApplicantForm />
//                   </Modal.Content>


          
//               <Modal.Actions>
//               <div className="AddEmpModalButton">
//                   <Button color='red' onClick={this.handleClose} inverted>
//                   No
//                   </Button>

//                   <Button color='green' onClick={this.handleClose} inverted>
//                   Add New Applicant 
//                   </Button>
//                 </div>      
//               </Modal.Actions>
          
//               </Modal>
//         </div>
        
//     )
//   }
// }

