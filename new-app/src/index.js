import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
// import Testhome from './TestComponents/Testhome'

import Navbar from './Dashboard/Navbar';
class App extends React.Component {
    componentDidMount() {
        // alert('lykzz')
    }
    render(){
        return (
            <Navbar />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
