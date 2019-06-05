import React, { Component } from 'react'
import PayRollTable from './PayRollTable';


import { Button,Icon,Modal } from 'semantic-ui-react'


export default class ViewPayRoll extends Component {
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })

render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
            <div>
               <Button primary onClick={this.closeConfigShow(true, false)}>View</Button>
               <Modal
                    open={open}
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                >
                    <Modal.Header>	
                        <div className='EmpDetails'>
                            <div className ='desc'>
                                <i className="money bill alternate outline icon"/>
                                
                                    Payroll
                                
                            </div>
                        </div>
	                    </Modal.Header>

                        <Modal.Content image scrolling>
                            <PayRollTable/>
                        </Modal.Content>

                    <Modal.Actions>

                        <Button primary onClick={this.close}
                        labelPosition='right'
                        icon='checkmark'
                        content='Yes'>
                            Proceed <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                 </Modal>
            </div>
        )
    }
}
