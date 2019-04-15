import React, { Component } from 'react'
import './AddEmployeeForm.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class AddEmployeeButton extends Component {
  render() {
    return (
        <div className="AddButton" >
                    
        <div className="ui horizontal divider">or</div>
        <form className="ui form segment">
          <p>Tell Us About Yourself</p>
          <div className="two fields">
            <div className="field">
              <label>Name</label>
              <input placeholder="First Name" name="name" type="text">
            </div>

            <div className="field">
              <label>Gender</label>
              <select className="ui dropdown" name="gender">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          </ div>
          </form>
          {/* <div className="two fields">
            <div className="field">
              <label>Username</label>
              <input placeholder="Username" name="username" type="text">
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password">
            </div>
          </div>
          <div className="field">
            <label>Skills</label>
            <select name="skills" multiple="" className="ui dropdown">
              <option value="">Select Skills</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="design">Graphic Design</option>
              <option value="plumbing">Plumbing</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="repair">Kitchen Repair</option>
            </select>
          </div>
              <div className="inline field">
                <div className="ui checkbox">
                  <input type="checkbox" name="terms">
                  <label>I agree to the terms and conditions</label>
                </div>
              </div>
              <div className="ui primary submit button">Submit</div>
              <div className="ui error message"></div>
            </form>          */}
           
        </div> 
    )
  }
}