import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class AttendanceReport extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Button secondary>View Attendance Report</Button>
            </div>
        )
    }
}

export default AttendanceReport;