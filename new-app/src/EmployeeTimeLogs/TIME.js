import React, { Component } from 'react'

export default class TIME extends Component {

    constructor(){
        super()
        this.state={time:new Date()}
        }

        currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


    render() {
        return (
            <div>
<<<<<<< HEAD
              <h3>
              {this.state.time.toLocaleTimeString()}
            </h3>
=======
                   <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
>>>>>>> 804eb5710c6f7243c13df2755ce54ddf062c6d50
            </div>
        )
    }
}
