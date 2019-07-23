import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Dashboard/Navbar';
import EmployeePage from './Employee/EmployeePage';
class App extends React.Component {
    
    componentDidMount() {
        // alert('lykzz')
    }
    render(){
        return (
            <EmployeePage />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
