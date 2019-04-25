import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';    
import Home from './HomeComponents/Home';
import ApplicantMain from './ApplicantComponents/ApplicantMain'
import Notfound from './WebComponents/Notfound';

const routing = (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/App" component={App} />
          <Route path="/Home" component={Home} />
          <Route path="/ApplicantMain" component={ApplicantMain} />
          <Route component={Notfound} />
        </Switch>  
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

